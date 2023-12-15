
import UIKit
import CoreData

class ViewController: UIViewController {
    @IBOutlet private weak var table: UITableView!
    private var list: [NSManagedObject] = []

    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.table.dataSource = self
        self.table.delegate = self
        self.loadItems()
        self.table.reloadData()
    }
    
    private func loadItems() {
        // Implemente aqui o método de leitura à partir da base de dados para carregar a lista e a tabela
    }

    @IBAction func goToAddNew() {
        let vc = AddNewRecordViewController()
        vc.delegate = self
        self.navigationController?.pushViewController(vc, animated: true)
    }
}

extension ViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.list.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "cell") as? CustomCell else {
            return UITableViewCell()
        }
        let item = self.list[indexPath.row]
        // Implemente aqui a carga da célula com os dados da entidade recuperada na linha anterior.
        return cell
    }
}

extension ViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 120.0
    }
    
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
}

// MARK: - Implemente aqui o código dos métodos já definidos
extension ViewController: AddRecordProtocol {
    func createNewItemWith(description: String, details: String, value: String) {
        // Implemente a inserção aqui (não se esqueça de transformar o atributo "value" - Não é String no CoreData - e de recarregar a tabela)
    }
    
    private func delete(item: NSManagedObject) {
        // Implemente aqui os códigos necessários para excluir o item do CoreData (não se esqueça de recarregar a tabela)
    }
}
