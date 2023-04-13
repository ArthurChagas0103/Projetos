<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro Motor</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">
</head>

<body>
    <form action="salvar_motor.php" id="formCalculadora" class="form-control" method="post">
        <h4 class="mb-4 mt-4">Cadastro Motor</h1>
            <div class="form-floating mb-3">
                <input type="text" name="modelo" class="form-control" id="modelo" placeholder="Modelo">
                <label for="modelo">Modelo</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" name="numero_serie" class="form-control" id="numero_serie" placeholder="Número de Série">
                <label for="numero_serie">Número de Série</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" name="potencia" class="form-control" id="potencia" placeholder="Potência">
                <label for="potencia">Potência</label>
            </div>
            <div>
                <button type="submit" class="btn btn-primary mb-2">ENVIAR</button>
            </div>
            <div>
                <a href="listar_motores.php">Listar Motores</a>
            </div>
    </form>

    <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
</body>

</html>