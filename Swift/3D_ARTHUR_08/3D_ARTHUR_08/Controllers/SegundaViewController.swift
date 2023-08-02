//
//  SegundaViewController.swift
//  3D_ARTHUR_08
//
//  Created by COTEMIG on 10/05/23.
//

import UIKit

class SegundaViewController: UIViewController {

    @IBOutlet weak var txtTitulo: UITextField!
    @IBOutlet weak var txtDiretor: UITextField!
    @IBOutlet weak var txtAno: UITextField!
    @IBOutlet weak var txtDuracao: UITextField!
    @IBOutlet weak var btnCadastrar: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        btnCadastrar.isEnabled = false
    }
    
    @IBAction func cadastrar(_ sender: Any) {
        if let titulo = txtTitulo.text,
           let diretor = txtDiretor.text,
           let ano = txtAno.text,
           let duracao = txtDuracao.text,
           titulo.isEmpty && !diretor.isEmpty && !ano.isEmpty && !duracao.isEmpty{
            
        }
    }
    
    @IBAction func tituloChanged(_ sender: Any) {
        verificaButtonActive()
    }
    
    @IBAction func diretorChanged(_ sender: Any) {
        verificaButtonActive()
    }
    
    @IBAction func anoChanged(_ sender: Any) {
        verificaButtonActive()
    }
    
    @IBAction func duracaoChanged(_ sender: Any) {
        verificaButtonActive()
    }
    
    func verificaButtonActive(){
        if let titulo = txtTitulo.text,
           let diretor = txtDiretor.text,
           let ano = txtAno.text,
           let duracao = txtDuracao.text,
           titulo.isEmpty && !diretor.isEmpty && !ano.isEmpty && !duracao.isEmpty{
            btnCadastrar.isEnabled = true
        }
    }
}
