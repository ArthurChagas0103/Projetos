import UIKit

class Celula: UITableViewCell {

    @IBOutlet weak var lblActivity: UILabel!
    
    public func cellPopulation(atividades : Atividades) {
        lblActivity.text = atividades.activity
    }
}
