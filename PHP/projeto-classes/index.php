<?php 

    require("model/carro.php");

    $obj = new Carro("Fusca", "Azul");  

    $numeros = array(10, 54, 78);   

    foreach($numeros as $valor){
        echo $valor, "<br>";
    }

    $numeros[2];
    $numeros[0];

    $palavras = array("banana", "ma��", "abacaxi");

    $palavras[1];

    $notas = array(5.99, 6.5, 7.8);

    $idades = array("Fernando" => 36, "Amanda" => 40, "Jo�o" => 22);

    $idades["Amanda"]; //40
    $idades["Jo�o"]; //22

    foreach($idades as $valor){
        echo $valor;
    }

?>