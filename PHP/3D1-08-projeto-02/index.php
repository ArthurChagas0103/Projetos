<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">
</head>

<body>
    <form action="processar.php" id="formCalculadora" class="form-control" method="post">
        <h4 class="mb-4 mt-4">Calculadora</h1>
            <div class="form-floating mb-3">
                <input type="number" name="numero1" class="form-control" id="numero1" placeholder="Número 1">
                <label for="numero1">Número 1</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" name="numero2" class="form-control" id="numero2" placeholder="Número 2">
                <label for="numero2">Número 2</label>
            </div>
            <div class="form-floating">
                <select name="operador" class="form-select mb-4" id="floatingSelect" aria-label="Floating label select example">
                    <option selected></option>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <label for="floatingSelect">Operador</label>
            </div>
            <div>
                <button type="submit" class="btn btn-primary mb-2">ENVIAR</button>
            </div>
            <div>
                <a href="listar.php">Listar dados</a>
            </div> 
    </form>
    <p>
        
    </p>

    <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
    </div>
    </svg>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
        integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD"
        crossorigin="anonymous"></script>
</body>

</html>