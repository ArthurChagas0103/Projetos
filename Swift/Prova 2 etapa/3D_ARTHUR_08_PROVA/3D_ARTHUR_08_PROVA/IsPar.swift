import Foundation

protocol AtividadesResponseProtocol : AnyObject  {
    func salvar(item: Atividades)
}

struct Atividades : Codable {
    let ad : String,
        iseven : Bool
}
