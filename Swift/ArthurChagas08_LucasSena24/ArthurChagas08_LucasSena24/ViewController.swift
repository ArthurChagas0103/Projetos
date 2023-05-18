//
//  ViewController.swift
//  ArthurChagas08_LucasSena24
//
//  Created by COTEMIG on 15/03/23.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var txtSenha: UITextField!
    @IBOutlet weak var txtEmail: UITextField!
    
    @IBAction func CallScreen(_ sender: Any) {
        if let email = txtEmail.text, let pass = txtSenha.text, email.count > 0 && pass.count > 0 {
            let user = Usuario(email: email, senha: pass)
            performSegue(withIdentifier: "GoToApp", sender: user)
        }
        else {
            performSegue(withIdentifier: "GoToCadastro", sender: nil)
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

struct Usuario {
    var email: String
    var senha: String
}
