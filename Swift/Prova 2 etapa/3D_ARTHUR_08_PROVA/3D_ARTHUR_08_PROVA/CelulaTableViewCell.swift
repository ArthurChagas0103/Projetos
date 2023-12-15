import UIKit

class CelulaTableViewCell: UITableViewCell {

    @IBOutlet weak var lblActivity: UILabel!
    
    public func cellPopulation(atividades : Atividades) {
        lblActivity.text = atividades.activity
    }

}
