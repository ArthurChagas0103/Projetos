//
//  TerceiraViewController.swift
//  ArthurChagas08_LucasSena24
//
//  Created by COTEMIG on 15/03/23.
//

import UIKit

class TerceiraViewController: UIViewController {

    @IBOutlet weak var lblSenha: UILabel!
    @IBOutlet weak var lblUsuario: UILabel!
    
    var mensagem : Usuario?
    
    override func viewDidLoad() {
        super.viewDidLoad()
         
        lblUsuario.text = "Email:  \(String(mensagem?.email ?? ""))"
        lblSenha.text = "Senha:  \(String(mensagem?.senha ?? ""))"
    }
    
    


}
