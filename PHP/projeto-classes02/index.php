<?php 

    require("model/pessoa.php");

    $obj = array(
        new Pessoa("Arthur", 17, "Masculino"),
        new Pessoa("Let�cia", 16, "Feminino"),
        new Pessoa("Lucas", 17, "Masculino"),
        new Pessoa("Thain�", 18, "Feminino"),
        new Pessoa("Sofia", 12, "Feminino")
    );

    foreach($obj as $pessoas){
        echo "Meu nome � " . $pessoas.$nome . ", tenho " . $pessoas.$idade . " anos e sou o sexo " . $pessoas.$sexo;
    }
    
?>