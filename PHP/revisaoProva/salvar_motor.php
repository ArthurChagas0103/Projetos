<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Salvar Motor</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
</head>

<body>

    <?php
        require_once("motor.php");

        $modelo = $_POST["modelo"]; //post é para recuperar os dados do fomulário
        $numero_serie = $_POST["numero_serie"];
        $potencia = intval($_POST["potencia"]);

        $motor = new Motor($modelo, $numero_serie, $potencia);
        
        echo $motor->salvar();
        echo "<br>";
        echo "<br>";
    ?>

    <a href="index.php">Voltar</a>

</body>

</html>