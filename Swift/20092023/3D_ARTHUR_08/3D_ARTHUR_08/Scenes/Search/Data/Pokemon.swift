protocol PokemonProtocol: AnyObject {
    func save(pokemon: Pokemon)
}

struct Pokemon: Codable {
    let abilities: [Ability]?
    let height: Int?
    let id: Int?
    let name: String?
    let sprites: Sprite?
    let weight: Int?
    let forms: [BaseAbility]?
    
    func toString() -> String {
        if let validName = name,
           let validId = id,
           let validHeight = height,
           let validWeight = weight {
            
            return "Id: \(validId). Nome: \(validName). Peso: \(validWeight). Altura: \(validHeight)."
        }
        return ""
    }
}

struct Ability: Codable {
    let ability: BaseAbility?
    let is_hidden: Bool?
    let slot: Int?
}

struct BaseAbility: Codable {
    let name, url: String?
}

struct Sprite: Codable {
    let front_default: String?
}
