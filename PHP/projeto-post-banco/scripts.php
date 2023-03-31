<!-- intval($num) para converter string para int -->

<?php
$conexaoBanco = new mysqli('localhost', 'root', '', 'devweb2');

$primeiroNumero = $_POST["primeiroNumero"];
$segundoNumero = $_POST["segundoNumero"];
$somaNumeros = $primeiroNumero + $segundoNumero;

if ($primeiroNumero > 0 && $segundoNumero > 0) {
    $insert = $conexaoBanco->prepare("INSERT INTO soma(numero1, numero2, resultado) VALUES(?, ?, ?)");
    $insert->bind_param("ddd", $primeiroNumero, $segundoNumero, $somaNumeros);
    $insert->execute();
    $insert->close();

    $select = $conexaoBanco->prepare("SELECT * FROM soma");
    $select->execute();
    $result = $select -> get_result();
    
    while ($col = $result -> fetch_array()) {
        echo($col[1] . " + " . $col[2] . " = " . $col[3] . "<br>");
    }

    $select->close();
} 
else{
    echo("Digite números válidos");
}

$conexaoBanco->close();
?>