<?php 
    function formaFrase($primeiraPalavra, $segundaPalavra, $terceiraPalavra){
        return $primeiraPalavra . " " . $segundaPalavra . " " . $terceiraPalavra;
    }

    echo(formaFrase("Hello", "World", "Programming") . "<br>");

    $x = array(5, 2, 3);

    foreach($x as $posicaoArray => $valor){
        echo $posicaoArray, " = ", $valor, "<br>";
    }
?>