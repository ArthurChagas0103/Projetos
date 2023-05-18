import UIKit

var idade : Int?

idade = nil

if let valor = idade, valor >= 18 {
    print("Voce é maior de idade!")
}
else {
    print("Sem valor")
}

//! avisa que o valor nao vai ser mais nulo naquele momento
