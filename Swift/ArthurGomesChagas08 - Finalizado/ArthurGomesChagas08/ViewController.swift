import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var txtAssunto: UITextField!
    @IBOutlet weak var txtPara: UITextField!
    @IBOutlet weak var txtMensagem: UITextView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    
    @IBAction func CallScreen(_ sender: Any) {
        if let para = txtPara.text, let assunto = txtAssunto.text, let mensagem = txtMensagem.text, para.count > 0 && assunto.count > 0, mensagem.count > 0{
            let email = Email(para: para, assunto: assunto, mensagem: mensagem)
            performSegue(withIdentifier: "GoToResumo", sender: email)
        }
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if let segundaView = segue.destination as? SegundaViewController, let texto = sender as? Email {
            segundaView.mensagem = texto
        }
    }
}

struct Email {
    var para: String
    var assunto: String
    var mensagem: String
}
