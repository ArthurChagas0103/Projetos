import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var txtAssunto: UITextField!
    @IBOutlet weak var txtPara: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    
    @IBAction func CallScreen(_ sender: Any) {
        if let para = txtPara.text, let assunto = txtAssunto.text, para.count > 0 && assunto.count > 0{
            let email = Email(para: para, assunto: assunto)
            performSegue(withIdentifier: "GoToResumo", sender: email)
        }
    }
}

struct Email {
    var para: String
    var assunto: String
}
