//
//  SegundaViewController.swift
//  ArthurChagas08_LucasSena24
//
//  Created by COTEMIG on 15/03/23.
//

import UIKit

class SegundaViewController: UIViewController {

    @IBOutlet weak var txtEmail: UITextField!
    @IBOutlet weak var lblMensagem: UILabel!
    @IBOutlet weak var txtSenha: UITextField!
    
    @IBAction func Validacao(_ sender: Any) {
        lblMensagem.text = ""
        
        if let email = txtEmail.text,
           let pass = txtSenha.text,
           !email.isEmpty && pass.count > 0 {
            let user = Usuario(email: email, senha: pass)
            performSegue(withIdentifier: "GoToApp2", sender: user)
        } else {
            lblMensagem.text = "Por favor, não deixe os campos vazios."
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if let terceiraView = segue.destination as? TerceiraViewController,
           let texto = sender as? Usuario {
            terceiraView.mensagem = texto
        }
    }

}
