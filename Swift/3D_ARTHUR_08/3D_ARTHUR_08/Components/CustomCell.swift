import UIKit

class CustomCell: UITableViewCell {

    @IBOutlet weak var Titulo: UILabel!
    @IBOutlet weak var Detalhes: UILabel!
    @IBOutlet weak var Duracao: UILabel!
    
    func populate(filme: Filme){
        Titulo.text = filme.Titulo
        Detalhes.text = "\(filme.Diretor) - \(filme.Ano)"
        Duracao.text = filme.Duracao
    }
}
