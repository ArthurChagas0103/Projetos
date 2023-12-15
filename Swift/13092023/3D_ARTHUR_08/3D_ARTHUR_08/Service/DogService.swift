import Alamofire

struct DogService {
    let apiUrl = "https://dog.ceo/api/breeds/image/random"
    
    func carregarDoguinho(action: @escaping(Dog?) -> Void) -> Void {
        AF.request(apiUrl).responseDecodable(of: Dog.self) { response in
            if let doguinho = response.value {
                action(doguinho)
            }
            action(nil)
        }
    }
}
