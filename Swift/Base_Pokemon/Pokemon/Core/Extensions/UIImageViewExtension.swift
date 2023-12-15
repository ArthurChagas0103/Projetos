
import UIKit
import Kingfisher

extension UIImageView {
    func loadUrl(_ url: String) {
        self.kf.setImage(with: URL(string: url))
    }
}
