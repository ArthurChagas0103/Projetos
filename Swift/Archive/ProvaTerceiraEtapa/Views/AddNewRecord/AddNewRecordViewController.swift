
import UIKit

internal protocol AddRecordProtocol {
    func createNewItemWith(description: String, details: String, value: String)
}

class AddNewRecordViewController: UIViewController, UITextViewDelegate {
    
    @IBOutlet private weak var descricaoTextField: UITextField!
    @IBOutlet private weak var detalhesTextField: UITextView!
    @IBOutlet private weak var valorTextField: UITextField!
    @IBOutlet private weak var camposValidosLabel: UILabel!
    @IBOutlet private weak var botaoSalvar: UIButton!
    
    var delegate: AddRecordProtocol? = nil

    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.title = "Novo Registro"
        self.camposValidosLabel.isHidden = true
        self.botaoSalvar.isEnabled = false
        self.detalhesTextField.delegate = self
    }
    
    @IBAction func onTextFieldChanged(_ sender: UITextField) {
        self.validateFields()
    }
    
    func textViewDidChange(_ textView: UITextView) {
        self.validateFields()
    }
    
    private func validateFields() {
        self.camposValidosLabel.text = ""
        self.camposValidosLabel.isHidden = false
        self.botaoSalvar.isEnabled = false
        var result = ""
        
        if let value = self.descricaoTextField.text {
            if value.isEmpty {
                result += "Campo 'Descrição' não pode ser vazio.\n"
            }
            if value.count < 11 {
                result += "Campo 'Descrição' não pode conter menos de 10 caracteres.\n"
            }
        }
        if let value = self.detalhesTextField.text {
            if value.isEmpty {
                result += "Campo 'Detalhes' não pode ser vazio.\n"
            }
            if value.count < 101 {
                result += "Campo 'Detalhes' não pode conter menos de 100 caracteres.\n"
            }
        }
        if let value = self.valorTextField.text {
            if value.count < 1 {
                result += "Campo 'Valor' não pode ser vazio.\n"
            }
            if let validValue = Double(value), validValue <= 0.0 {
                result += "Campo 'Valor' precisa ser maior que zero."
            }
        }
        
        self.camposValidosLabel.text = result
        self.botaoSalvar.isEnabled = result.isEmpty
    }
    
    
    @IBAction private func salvarRegistro() {
        if let desc = descricaoTextField.text,
           let details = detalhesTextField.text,
           let value = valorTextField.text,
           let validDelegate = self.delegate {
            
            validDelegate.createNewItemWith(description: desc,
                                            details: details,
                                            value: value)
            self.navigationController?.popViewController(animated: true)
        }
    }
}
