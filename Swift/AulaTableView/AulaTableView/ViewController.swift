//
//  ViewController.swift
//  AulaTableView
//
//  Created by COTEMIG on 05/04/23.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var tableView: UITableView!
    
    var listaDeNomes = ["Arthur","Doug","Letícia","Jonisvaldo","Jonildo","Palermo"]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.tableView.delegate = self
        self.tableView.dataSource = self
    }
}

/*extension ViewController : UIViewController{
    
}*/

extension ViewController : UITableViewDataSource{
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return listaDeNomes.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        if let cell = tableView.dequeueReusableCell(withIdentifier: "cell1"){
            cell.textLabel?.text = listaDeNomes[indexPath.row]
            return cell
        } else{
            let cell = UITableViewCell()
            cell.textLabel?.text = listaDeNomes[indexPath.row]
            return cell
        }
    }
}

extension ViewController : UITableViewDelegate{
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        print(self.listaDeNomes[indexPath.row])
    }
}

