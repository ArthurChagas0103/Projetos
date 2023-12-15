import UIKit
import Alamofire
import Kingfisher

class ViewController: UIViewController {
    let apiUrl = "https://dog.ceo/api/breeds/image/random"
    @IBOutlet weak var imagem: UIImageView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    @IBAction func carregar(_ sender: UIButton) {
        sender.setTitle("Carregar Novamente", for: .normal)
        sender.isEnabled = false
        
        AF.request(apiUrl).responseDecodable(of: Dog.self) { response in
            if let doguinho = response.value {
                self.imagem.kf.setImage(with: URL(string: doguinho.message))
            }
            sender.isEnabled = true
        }
        
        /*DogService().carregarDoguinho(action: { [weak self] result in
            guard let self  = self,
                  let dog = result else {
                sender.isEnabled = true
                return
            }
            self.imagem.kf.setImage(with: URL(string: dog.message))
            sender.isEnabled = true
        })*/
    }
}
