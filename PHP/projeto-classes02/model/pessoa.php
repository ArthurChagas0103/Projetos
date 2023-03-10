<?php 

    class Pessoa{
        private $nome = "";
        private $idade = 0;
        private $sexo = "";

        public function __construct($nome, $idade, $sexo)
        {
            echo("Meu nome é " . $nome . ", tenho " . $idade . " anos e sou o sexo " . $sexo);
        }
    }

?>