import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var tableView: UITableView!
    
    @IBAction func btnAdd(_ sender: Any) {
        let terceiraView = TerceiraViewController()
        
        terceiraView.delegate = self
        
        self.navigationController?.pushViewController(terceiraView, animated: true)
    }
    
    var lista: [Filme] = []
    var userDefault = UserDefaults.standard
    let listKey = "filmes"
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        listaFilmes()
        
        tableView.dataSource = self
        tableView.delegate = self
        
        self.navigationItem.title = "Home"
    }
    
    private func listaFilmes(){
        guard let listData = userDefault.value(forKey: listKey) as? Data else{
            lista = []
            return
        }
        do{
            let saveList = try JSONDecoder().decode([Filme].self, from: listData)
            lista = saveList
            tableView.reloadData()
        } catch {
            print("Erro ao recuperar dados!")
        }
        
    }
}

extension ViewController: UITableViewDataSource{
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return lista.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        if let cell = tableView.dequeueReusableCell(withIdentifier: "cell1"){
            let item = lista[indexPath.row]
            
            if let customCell = cell as? CustomCell{
                customCell.populate(filme: item)
                return customCell
            }
        }
        return UITableViewCell()
    }
}

extension ViewController: UITableViewDelegate{
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let item = lista[indexPath.row]
        let segundaView = SegundaViewController()
        
        segundaView.filme = item
        segundaView.delegate = self
        
        self.navigationController?.pushViewController(segundaView, animated: true)
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 110.0
    }
}

extension ViewController : SegundaViewControllerDelegate {
    func deleteItem(filme : Filme) {
        
        let i = self.lista.firstIndex(where: { $0.Titulo == filme.Titulo && $0.Diretor == filme.Diretor })
        
        self.lista.removeAll(where : { $0.Titulo == filme.Titulo && $0.Diretor == filme.Diretor })
        
        do {
            let serializedList = try JSONEncoder().encode(lista)
            userDefault.setValue(serializedList, forKey: listKey)
            //throw NSError(domain: "com.example", code: 1, userInfo: nil)
        } catch {
            if let index = i {
                lista.insert(filme, at: index)
            }
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5, execute: { [weak self] in guard let context = self else{
            return
        }
        
        context.tableView.reloadData()
        })
    }
}

extension ViewController : TerceiraViewControllerDelegate {
    func saveNew(filme : Filme){
        lista.append(filme)
        
        do {
            let serializeList = try JSONEncoder().encode(lista)
            userDefault.setValue(serializeList, forKey: listKey)
        } catch{
            lista.removeAll(where: {$0.Titulo == filme.Titulo && $0.Diretor == filme.Diretor})
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5, execute: { [weak self] in guard let context = self else {
            return
        }
        
        context.tableView.reloadData()
    })
        
    }
}
