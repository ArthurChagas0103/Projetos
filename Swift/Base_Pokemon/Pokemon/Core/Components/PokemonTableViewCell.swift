
import UIKit

class PokemonTableViewCell: UITableViewCell {
    @IBOutlet weak var jokeImage: UIImageView!
    @IBOutlet weak var createdDate: UILabel!
    @IBOutlet weak var detail: UILabel!
    
    public func populate(imageUrl: String, title: String, detail: String) {
        self.jokeImage.loadUrl(imageUrl)
        self.createdDate.text = title.capitalized
        self.detail.text = detail
    }
}
