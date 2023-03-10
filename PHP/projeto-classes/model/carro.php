<?php
    class Carro{
        private $modelo = "";
        private $cor = "";

        public function __construct($modelo = "fusca", $cor) //se a instanciaзгo da classe for vazia, o modelo vai ser fusca
        {
            $this -> modelo = strtoupper($modelo);
            $this -> cor = strtoupper($cor);
        }

        public function set_modelo($modelo = "", $x = 10){ //get e set sгo utilizados sу em atributos private, pois vc consegue manipular a classe e seus atributos fora do escopo
            $this -> modelo = strtoupper($modelo);
        }

        public function get_modelo($modelo){
            return $this -> modelo;
        }
    }

    $obj = new Carro("Honda Civic", "Azul");
    //$obj -> set_modelo("teste", 45) //quando hб construct, nгo precisa instanciar o objeto
?>