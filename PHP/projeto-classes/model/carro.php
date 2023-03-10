<?php
    class Carro{
        private $modelo = "";
        private $cor = "";

        public function __construct($modelo = "fusca", $cor) //se a instancia��o da classe for vazia, o modelo vai ser fusca
        {
            $this -> modelo = strtoupper($modelo);
            $this -> cor = strtoupper($cor);
        }

        public function set_modelo($modelo = "", $x = 10){ //get e set s�o utilizados s� em atributos private, pois vc consegue manipular a classe e seus atributos fora do escopo
            $this -> modelo = strtoupper($modelo);
        }

        public function get_modelo($modelo){
            return $this -> modelo;
        }
    }

    $obj = new Carro("Honda Civic", "Azul");
    //$obj -> set_modelo("teste", 45) //quando h� construct, n�o precisa instanciar o objeto
?>