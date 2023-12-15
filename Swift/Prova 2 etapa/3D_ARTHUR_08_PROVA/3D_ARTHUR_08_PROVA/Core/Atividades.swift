import Foundation

protocol AtividadesResponseProtocol : AnyObject  {
    func salvar(item: Atividades)
}

struct Atividades : Codable {
    let activity : String?,
        type : String?,
        participants : Int?,
        price : Double?,
        link : String?,
        key : String?,
        accessibility : Double?
    
    public func toString() -> String {
        return "Activity: \(activity!), Type: \(type!), Participants: \(participants!), Price: \(price!), Link: \(link!), Key: \(key!), Accessibility: \(accessibility!)"
    }
}
