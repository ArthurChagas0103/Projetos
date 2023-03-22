<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Pessoas</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
</head>

<body>
    <?php

    require("model/pessoa.php");

    $obj = array(
        new Pessoa("Arthur", 17, "Masculino"),
        new Pessoa("Letícia", 16, "Feminino"),
        new Pessoa("Lucas", 17, "Masculino"),
        new Pessoa("Thainá", 18, "Feminino"),
        new Pessoa("Sofia", 12, "Feminino")
    );

    foreach ($obj as $pessoas) {
        echo "<h1>" . $pessoas->imprimir() . "</h1>";
    }

    ?>
</body>

</html>