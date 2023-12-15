
import Alamofire
import Foundation

internal protocol BaseServiceProtocol {
    func performRequest<T: Codable>(route: BaseRequestProtocol,
                                    completion: @escaping(Result<T, Error>) -> Void)
}

internal class BaseService: BaseServiceProtocol {
    func performRequest<T: Codable>(route: BaseRequestProtocol,
                                    completion: @escaping(Result<T, Error>) -> Void) where T : Codable {
        
        let primaryEncoding: ParameterEncoding = route.method == .get ? URLEncoding.default: JSONEncoding.default
        let primaryHeaders: HTTPHeaders = [
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8",
            "Cookie": SessionManager.shared.HttpSession
        ]
        
        AF.request(route.path,
                   method: route.method,
                   parameters: route.body,
                   encoding: primaryEncoding,
                   headers: route.headers != nil ? route.headers: primaryHeaders)
        .responseDecodable(of: T.self) { result in
            
            // Testes de sucesso para validar se precisamos atualizar os Cookies da requisição.
            if let statusCode = result.response?.statusCode,
               statusCode > 199 && statusCode < 300,
               let headers = result.response?.allHeaderFields as? [String: String],
               let baseUrl = result.response?.url {
                
                // Teste para detectar se há um possível ataque Man-in-the-middle, fazendo um
                // escape forçado caso seja detectado.
                if !baseUrl.absoluteString.lowercased().starts(with: route.basePath.lowercased()) {
                    completion(.failure(self.getGenericError("Possible man in the middle attack...")))
                    return
                }
                // Recuperação de Cookies da requisição/resposta (atualização automática)
                let cookies = HTTPCookie.cookies(withResponseHeaderFields: headers, for: baseUrl)
                var cookiesToUpdate = ""
                for cookie in cookies {
                    cookiesToUpdate += "\(cookie.name):\(cookie.value);"
                }
                if !cookiesToUpdate.isEmpty {
                    SessionManager.shared.HttpSession = cookiesToUpdate
                }
            }
            
            // Tratamento de resultados (sucesso ou erro).
            if let value = result.value {
                completion(.success(value))
                return
            }
            if let error = result.error {
                completion(.failure(error))
                return
            }
            let error = self.errorHandler(by: result.data)
            completion(.failure(error))
        }
    }
    
    private func errorHandler(by: Data?) -> BaseError {
        if let data = by {
            do {
                let error = try JSONDecoder().decode(BaseError.self, from: data)
                return error
            } catch {
                let error = getGenericError("==> RE: Error trying handler data result from server")
                return error
            }
        }
        return getGenericError()
    }
    
    private func getGenericError(_ message: String? = nil) -> BaseError {
        let errorMessage = message ?? "==> RE: Unknown error"
        return BaseError(message: errorMessage, code: -1)
    }
}
