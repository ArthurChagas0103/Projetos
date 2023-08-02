import UIKit

protocol SegundaViewControllerDelegate : AnyObject{
    func deleteItem(filme: Filme)
}

class SegundaViewController: UIViewController {
    
    weak var delegate : SegundaViewControllerDelegate? = nil
    
    var filme : Filme? = nil
    
    @IBOutlet weak var txtDiretor: UILabel!
    @IBOutlet weak var txtAno: UILabel!
    @IBOutlet weak var txtDuracao: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        if let item = filme{
            self.navigationItem.title = item.Titulo
            txtDiretor.text = item.Diretor
            txtAno.text = item.Ano
            txtDuracao.text = item.Duracao
        }
    }
    
    @IBAction func btnVoltaFilmes(_ sender: Any) {
        if let item = filme, let delegateNotNull = delegate {
            delegateNotNull.deleteItem(filme: item)
        }
        
        self.navigationController?.popViewController(animated: true)
    }
}
