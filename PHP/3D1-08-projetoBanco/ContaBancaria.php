<?php
    
    class ContaBancaria{
        private $numeroConta;
        private $nomeTitular;
        private $saldo = 0;

        public function __construct($numeroConta, $nomeTitular) {
            $this -> numeroConta = $numeroConta;
            $this -> nomeTitular = $nomeTitular;
        }

        private function depositar($valorDeposito) {
            return $this->saldo = $this->saldo + $valorDeposito;
        }
    
        private function sacar($valorSaque) {
            return $this->numero1 - $this -> numero2;
        }
    }

?>