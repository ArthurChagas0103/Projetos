<?php

    require_once('ContaBancaria.php');
    
    class ContaPoupanca extends ContaBancaria{
        private function aplicarJuros() {
            return $this -> saldo = ($this -> saldo  * 0.5) / 100;
        }
    }

?>