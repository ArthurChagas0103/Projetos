import UIKit

class SegundaViewController: UIViewController {

    @IBOutlet weak var lblPara: UILabel!
    @IBOutlet weak var lblAssunto: UILabel!
    @IBOutlet weak var lblMensagem: UITextView!
    
    var mensagem : Email?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        lblPara.text = "\(String(mensagem?.para ?? ""))"
        lblAssunto.text = "\(String(mensagem?.assunto ?? ""))"
        lblMensagem.text = "\(String(mensagem?.mensagem ?? ""))"
    }
    
    

}
