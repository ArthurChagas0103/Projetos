import UIKit

protocol TerceiraViewControllerDelegate: AnyObject {
    func saveNew(filme : Filme)
}

class TerceiraViewController: UIViewController {
    
    @IBOutlet weak var txtTitulo: UITextField!
    @IBOutlet weak var txtDiretor: UITextField!
    @IBOutlet weak var txtAno: UITextField!
    @IBOutlet weak var txtDuracao: UITextField!
    
    weak var delegate: TerceiraViewControllerDelegate?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.navigationItem.title = "Novo Filme"
    }
    
    @IBAction func btnSaveTapped(_ sender: Any) {
        if let titulo = txtTitulo.text, let diretor = txtDiretor.text, let ano = txtAno.text, let duracao = txtDuracao.text, !titulo.isEmpty && !diretor.isEmpty && !ano.isEmpty && !duracao.isEmpty{
            let item = Filme(Titulo: titulo, Diretor: diretor, Ano: ano, Duracao: duracao)
            
            delegate?.saveNew(filme: item)
            
            self.navigationController?.popViewController(animated: true)
        }
    }
}
