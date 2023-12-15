
import UIKit
import CoreData

class ViewController: UIViewController {
    var list: [NSManagedObject] = []
    @IBOutlet weak var table: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.title = "Favoritos"
        
        // Navegação para tela fake de carregamento
        let fake = FakeLaunchViewController()
        fake.modalTransitionStyle = .crossDissolve
        fake.modalPresentationStyle = .fullScreen
        self.navigationController?.pushViewController(fake, animated: false)
        
        // Disparo, em segundo plano, do carregamento de dados e configuração de protocolos da tabela.
        DispatchQueue.main.async { [weak self] in
            guard let self = self else { return }
            self.loadItems()
            self.table.dataSource = self
            self.table.delegate = self
        }
    }
    
    private func loadItems() {
        // Captura do DELEGATE da aplicação (geral) para, através dele, acessar um contexto de conexão dentro da Sandbox da aplicação.
        guard let appDelegate = UIApplication.shared.delegate as? AppDelegate else { return }
        // Através do delegate, carregamos o contexto para conectar no arquivo de base de dados CoreData.
        let context = appDelegate.persistentContainer.viewContext
        // Criação de uma requisição (consulta) à base de dados local.
        let fetchRequest = NSFetchRequest<NSManagedObject>(entityName: "PokemonEntity")
        // Configuração de uma ordenação (o mesmo que a cláusula ORDER BY de uma instrução SQL convencional).
        fetchRequest.sortDescriptors = [NSSortDescriptor(key: "weight", ascending: false)]
        // Removendo o comentário da linha abaixo será realizado um filtro, recuperando assim apenas os que pesam mais de 50.
        // fetchRequest.predicate = NSPredicate(format: "weight > %@", "50")
        do {
            // Disparo da requisição ao CoreData para carregar a listagem.
            list = try context.fetch(fetchRequest)
        } catch {
            debugPrint("==> Erro ao recuperar pokemon.")
        }
    }

    @IBAction func goToSearchView(_ sender: Any) {
        let vc = SearchViewController()
        vc.delegate = self
        self.navigationController?.pushViewController(vc, animated: true)
    }
}

extension ViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        self.list.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "cell") as? PokemonTableViewCell else {
            return UITableViewCell()
        }
        let item = self.list[indexPath.row]
        
        let imageUrl = item.value(forKey: "frontImage") as? String ?? ""
        let name = item.value(forKey: "name") as? String ?? "Unknown"
        let height = item.value(forKey: "height") as? Int ?? 0
        let weight = item.value(forKey: "weight") as? Int ?? 0
        let forms = item.value(forKey: "forms") as? Int ?? 0
        let id = item.value(forKey: "id") as? Int ?? 0
        
        let detailText = "Id: \(id). Formas: \(forms).\nPeso: \(weight). Altura: \(height)."
        cell.populate(imageUrl: imageUrl,
                      title: name.capitalized,
                      detail: detailText)
        
        return cell
    }
}

extension ViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, trailingSwipeActionsConfigurationForRowAt indexPath: IndexPath) -> UISwipeActionsConfiguration? {
        let deleteAction = UIContextualAction(style: .normal, title: "Delete", handler: { [weak self] _,_,_ in
            guard let self = self else { return }
            let item = self.list[indexPath.row]
            self.delete(item)
        })
        deleteAction.backgroundColor = .red
        deleteAction.image = .init(systemName: "trash", withConfiguration: nil)
        return UISwipeActionsConfiguration(actions: [deleteAction])
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 100.0
    }
}

extension ViewController: PokemonProtocol {
    private func reloadAsync() {
        self.loadItems()
        DispatchQueue.main.async { [weak self] in
            guard let self = self else { return }
            self.table.reloadData()
        }
    }
    
    func append(_ pokemon: Pokemon) {
        let id = pokemon.id
        if self.list.first(where: { $0.value(forKey: "id") as? Int == id }) != nil {
            return
        }
        // Captura do DELEGATE da aplicação.
        guard let appDelegate = UIApplication.shared.delegate as? AppDelegate else { return }
        // Recuperação do contexto de conexão à base de dados.
        let context = appDelegate.persistentContainer.viewContext
        // Recuperação de um descritor capaz de ler as propriedades de uma entidade (tabela) da base CoreData.
        if let entity = NSEntityDescription.entity(forEntityName: "PokemonEntity", in: context) {
            // Criação de um objeto NSManagedObject que aponta para o 'PokemonEntity', de maneira a permitir sua inclusão.
            let pk = NSManagedObject(entity: entity, insertInto: context)
            // Configuração das propriedades da entidade (campos da tabela).
            pk.setValue(pokemon.id, forKey: "id")
            pk.setValue(pokemon.sprites?.front_default ?? "", forKey: "frontImage")
            pk.setValue(pokemon.name, forKey: "name")
            pk.setValue(pokemon.abilities?[0].ability?.name ?? "", forKey: "abilities")
            pk.setValue(pokemon.forms?.count, forKey: "forms")
            pk.setValue(pokemon.height ?? 1, forKey: "height")
            pk.setValue(pokemon.weight ?? 1, forKey: "weight")
            pk.setValue(UUID().uuidString, forKey: "hashId")
            
            do {
                try context.save()
            } catch {
                debugPrint("==> Erro ao adicionar pokemon.")
            }
            self.reloadAsync()
        }
    }
    
    func delete(_ pokemon: NSManagedObject) {
        // Captura do DELEGATE da aplicação.
        guard let appDelegate = UIApplication.shared.delegate as? AppDelegate else { return }
        // Recuperação do contexto de conexão à base de dados.
        let context = appDelegate.persistentContainer.viewContext
        do {
            // Exclusão do registro
            context.delete(pokemon)
            // Confirmação da exclusão e efetivação da gravação.
            try context.save()
        } catch {
            debugPrint("==> Erro ao excluir pokemon.")
        }
        self.reloadAsync()
    }
}
