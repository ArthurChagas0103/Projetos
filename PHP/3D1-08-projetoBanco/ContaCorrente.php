<?php

    require_once('ContaBancaria.php');
    
    class ContaCorrente extends ContaBancaria{
        private $classe = "Silver";

        public function get_classe(){
            return $this -> classe;
        }

        private function mudarClasseParaSilver() {
            return $this -> classe = "Silver";
        }

        private function mudarClasseParaGold() {
            return $this -> classe = "Gold";
        }

        private function mudarClasseParaBlack() {
            return $this -> classe = "Black";
        }
    }

?>