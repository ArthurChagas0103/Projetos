import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var tabela: UITableView!
    
    var lista : [Atividades] = []
    var listKey = "atividades"
    var userDefault = UserDefaults.standard
    
    override func viewDidLoad() {
        super.viewDidLoad()
        carregaDados()
        tabela.dataSource = self
        tabela.delegate = self
    }
    
    @IBAction func btnAdd(_ sender: Any) {
        let viewAtividades = SegundaViewController()
        viewAtividades.delegate = self
        self.navigationController?.pushViewController(viewAtividades, animated: true)
    }
    
    private func carregaDados() {
        guard let listData = userDefault.value(forKey: listKey) as? Data else {
            lista = []
            return
        }
        do {
            let savedList = try JSONDecoder().decode([Atividades].self, from : listData)
            lista = savedList
        } catch {
            print("Erro ao recuperar os dados")
        }
        tabela.reloadData()
    }
}

extension ViewController : UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.lista.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "cell") as? Celula else {
            return UITableViewCell()
        }
        let item = self.lista[indexPath.row]
        cell.cellPopulation(atividades: item)
        return cell
    }
}

extension ViewController : UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 100.0
    }
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        //
    }
}

extension ViewController: AtividadesResponseProtocol{
    func salvar(item: Atividades) {
        lista.append(item)
        do {
            let serialezedList = try JSONEncoder().encode(self.lista)
            userDefault.setValue(serialezedList, forKey: listKey)
        } catch {
            lista.removeAll(where: {$0.activity == item.activity})
        }
            self.tabela.reloadData()
        }
    }
