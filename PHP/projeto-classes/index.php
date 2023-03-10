<?php 

    require("model/carro.php");

    $obj = new Carro("Fusca", "Azul");  

    $numeros = array(10, 54, 78);   

    foreach($numeros as $valor){
        echo $valor, "<br>";
    }

    $numeros[2];
    $numeros[0];

    $palavras = array("banana", "maчу", "abacaxi");

    $palavras[1];

    $notas = array(5.99, 6.5, 7.8);

    $idades = array("Fernando" => 36, "Amanda" => 40, "Joуo" => 22);

    $idades["Amanda"]; //40
    $idades["Joуo"]; //22

    foreach($idades as $valor){
        echo $valor;
    }

?>