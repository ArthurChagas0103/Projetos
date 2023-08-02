import UIKit

class ViewController: UIViewController {
    private var isBusy: Bool = false
    @IBOutlet weak var txtCep: UITextField!
    @IBOutlet weak var txtResultado: UITextView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    var contadorDeBloqueio = 1
    
    @IBAction func searchTapped(_ sender: Any) {
        if isBusy == true {
            print("Bloqueou \(contadorDeBloqueio)")
            contadorDeBloqueio += 1
            return
        }
        isBusy = true
        self.txtResultado.text = ""
        guard let cep = txtCep.text, !cep.isEmpty && cep.count == 8 else {
            self.txtResultado.text = "CEP é obrigatório (com 8 dígitos numéricos)"
            isBusy = false
            return
        }
        
        if let url = URL(string: "https://viacep.com.br/ws/\(cep)/json/"){
            let urlSession = URLSession.shared
            urlSession.dataTask(with: url) { [weak self] data, response, error in guard let self = self else { return }
                if let resultData = data {
                    do{
                        let localStruct = try JSONDecoder().decode(CepResponseData.self, from: resultData)
                        DispatchQueue.main.async {
                            self.txtResultado.text = localStruct.toString()
                        }
                    } catch{
                        print("==> Erro no parser da struct")
                    }
                }
                if let resultError = error {
                    print("==> Erro na requisição: \(resultError)")
                }
                self.isBusy = false
            }.resume()
        } else {
            self.isBusy = false
        }
    }
    
}

