<?php 

    require("model/pessoa.php");

    $obj = array(
        new Pessoa("Arthur", 17, "Masculino"),
        new Pessoa("Letícia", 16, "Feminino"),
        new Pessoa("Lucas", 17, "Masculino"),
        new Pessoa("Thainá", 18, "Feminino"),
        new Pessoa("Sofia", 12, "Feminino")
    );

    foreach($obj as $pessoas){
        echo "Meu nome é " . $pessoas.$nome . ", tenho " . $pessoas.$idade . " anos e sou o sexo " . $pessoas.$sexo;
    }
    
?>