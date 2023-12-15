
import UIKit

class SearchViewController: UIViewController {
    @IBOutlet weak var pkImage: UIImageView!
    @IBOutlet weak var pkValue: UILabel!
    @IBOutlet weak var saveButton: UIButton!
    
    private var service: PokemonService? = nil
    private var current: Pokemon? = nil
    var delegate: PokemonProtocol? = nil
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.service = PokemonService()
        self.saveButton.isEnabled = false
        createSearchButton()
    }
    
    private func createSearchButton() {
        let item = UIBarButtonItem(barButtonSystemItem: .search,
                                   target: self,
                                   action: #selector(findNew))
        self.title = "Buscar"
        self.navigationItem.rightBarButtonItem = item
    }
    
    @objc func findNew(_ sender: UIBarButtonItem) {
        sender.isEnabled = false
        self.saveButton.isEnabled = false
        self.pkImage.image = UIImage(systemName: "questionmark")
        self.pkValue.text = "Loading..."
        self.current = nil
        
        // Busca do pokemon via BaseService.
        self.service?.load { [weak self] result in
            guard let self = self else { return }
            
            // Validação do resultado da busca
            switch result {
                // Tratamento do caso de sucesso.
            case .success(let pokemon):
                if let imageUrl = pokemon.sprites?.front_default {
                    self.pkImage.loadUrl(imageUrl)
                }
                self.pkValue.text = pokemon.toString()
                self.current = pokemon
                self.saveButton.isEnabled = true
                
                // Tratamento do caso de falha.
            case .failure(let requestError):
                self.pkImage.image = UIImage(systemName: "exclamationmark.icloud")
                self.pkValue.text = requestError.localizedDescription
                
            }
            
            sender.isEnabled = true
        }
    }
    
    @IBAction func save(_ sender: Any) {
        if let item = current,
           let validDelegate = delegate {
            
            validDelegate.append(item)
            self.navigationController?.popViewController(animated: true)
        }
    }
}
