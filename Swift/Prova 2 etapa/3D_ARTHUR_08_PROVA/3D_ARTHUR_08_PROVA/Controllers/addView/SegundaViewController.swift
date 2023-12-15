import UIKit

class SegundaViewController: UIViewController {

    @IBOutlet weak var txtResultado: UITextView!
    @IBOutlet weak var btnSalvar: UIButton!
    
    private var atividadesData : Atividades? = nil
    var delegate : AtividadesResponseProtocol?
    var ocupado = false
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.navigationItem.title = "API de Atividades"
        self.btnSalvar.isEnabled = false
    }
    
    
    @IBAction func btnPesquisar(_ sender: Any) {
        self.btnSalvar.isEnabled = false
        self.atividadesData = nil
        txtResultado.text = ""
        if ocupado {
            return
        }
        ocupado = true
        
        let url = "https://www.boredapi.com/api/activity"
        if let customUrl = URL(string: url) {
            let request = URLSession.shared
            request.dataTask(with: customUrl) {
                [weak self] data, response, error in
                guard let self = self else {return}
                if let erro = error {
                    self.txtResultado.text = "Erro na requisicao"
                } else {
                    if let resultData = data{
                        print(resultData)
                        do {
                            let item = try JSONDecoder().decode(Atividades.self, from: resultData)
                            self.atividadesData = item
                            DispatchQueue.main.async {[weak self] in
                                guard let self = self else {return}
                                self.txtResultado.text = item.toString()
                                self.btnSalvar.isEnabled = true
                            }
                        } catch {
                            self.txtResultado.text = "Erro no parsing"
                        }
                    }
                }
                self.ocupado = false
            }.resume()
        } else {
            self.ocupado = false
        }
    }
    
    
    @IBAction func btnSalvar(_ sender: Any) {
        if let item = self.atividadesData,
           let localDelegate = self.delegate{
            localDelegate.salvar(item: item)
            self.navigationController?.popViewController(animated: true)
        }
    }
}
