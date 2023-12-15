
internal protocol PokemonProtocol {
    func append(_ pokemon: Pokemon)
}

struct Pokemon: Codable {
    let abilities: [Ability]?
    let height: Int?
    let id: Int
    let name: String
    let sprites: Sprite?
    let weight: Int?
    let forms: [BaseAbility]?
        
    func toString() -> String {
        let h = weight != nil ? "\(height!)" : "unknown"
        let w = weight != nil ? "\(weight!)" : "unknown"
        return "\(name.capitalized). Weight:\(w). Height:\(h)."
    }
    
    func details() -> String {
        let h = weight != nil ? "\(height!)" : "unknown"
        let w = weight != nil ? "\(weight!)" : "unknown"
        let total = forms?.count ?? 1
        return "Id on DataBase: \(id).\nMax forms: \(total). Weight:\(w). Height:\(h)."
    }
}

struct Ability: Codable {
    let ability: BaseAbility?
    let is_hidden: Bool?
    let slot: Int?
}

struct BaseAbility: Codable {
    let name, url: String
}

struct Sprite: Codable {
    let front_default: String?
}
