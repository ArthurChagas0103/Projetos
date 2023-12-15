import UIKit

class ViewController: UIViewController {
    // Variáveis e referências de objetos visuais
    @IBOutlet weak var tabela: UITableView!
    var lista: [String] = []
    
    override func viewDidLoad() {
        super.viewDidLoad()
        carregarLista()
        self.tabela.dataSource = self
    }

    //Métodos, eventos e funções
    func carregarLista(){
        self.lista = ["Arthur", "Thainá", "Sofia", "Janete", "Flávio"]
    }
}

extension ViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.lista.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        if let cell = tableView.dequeueReusableCell(withIdentifier: "cell") as? MinhaCelulaTableViewCell {
            let item = lista[indexPath.row]
            cell.carregar(item: item)
            return cell
        }
        return UITableViewCell()
    }
}
