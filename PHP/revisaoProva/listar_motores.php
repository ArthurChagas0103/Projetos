<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listar Motores</title>
</head>

<body>
    <?php
        function listar() {
            $con = new mysqli("localhost", "root", "", "devweb2_1etapa_revisao");

                $stmt = $con->prepare("select * from motores");

                $stmt->execute();

                    $result = $stmt->get_result();

                        while ($linha = $result->fetch_array()) {
                            echo $linha["modelo"], " - ", $linha["numero_serie"], " - ", $linha["potencia"], "<br>";
                        }

                    $result->close();

                $stmt->close();

            $con->close();
        }

        listar();
    ?>
    <p>
        <a href="index.php">Voltar</a>
    </p>
</body>

</html>