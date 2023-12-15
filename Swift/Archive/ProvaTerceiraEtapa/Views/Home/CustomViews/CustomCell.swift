import UIKit

class CustomCell: UITableViewCell {
    @IBOutlet weak var descriptionLabel: UILabel!
    @IBOutlet weak var detailsLabel: UILabel!
    @IBOutlet weak var valueLabel: UILabel!
    
    func populate(description: String, details: String, value: Double) {
        self.descriptionLabel.text = description
        self.detailsLabel.text = details
        self.valueLabel.text = "R$ \(String(format: "%.2f", value))"
    }
}
