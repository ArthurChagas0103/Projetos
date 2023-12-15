import Foundation


internal class SessionManager {
    internal static let shared = SessionManager()
    fileprivate static var userDefaults = UserDefaults.standard
    
    // Variável encarregada de armazenar os Cookies de conexão.
    fileprivate var requestSession: String? = nil
}

extension SessionManager {
    // Propriedade responsável por garantir atualização dos cookies em cada requisição.
    internal var HttpSession: String {
        get {
            if requestSession == nil {
                requestSession = SessionManager.userDefaults.string(forKey: "httpSession") ?? ""
            }
            return requestSession ?? ""
        }
        set(newValue) {
            requestSession = newValue
            SessionManager.userDefaults.setValue(newValue, forKey: "httpSession")
        }
    }
}
