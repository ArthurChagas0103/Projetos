<?php
    
    class ContaBancaria{
        private $numeroConta = 0;
        private $nomeTitular = "";
        protected $saldo = 0.0;

        public function __construct($numeroConta, $nomeTitular) {
            $this -> numeroConta = $numeroConta;
            $this -> nomeTitular = $nomeTitular;
        }

        public function get_numeroConta(){
            return $this -> numeroConta;
        }

        public function get_nomeTitular(){
            return $this -> nomeTitular;
        }

        public function get_saldo(){
            return $this -> saldo;
        }

        private function depositar($valorDeposito) {
            return $this->saldo = $this->saldo + $valorDeposito;
        }
    
        private function sacar($valorSaque) {
            if($this->saldo > 0 && $this->saldo - $valorSaque > 0){
                return $this->saldo = $this->saldo - $valorSaque;
            }
            else{
                echo('Operaчуo nуo pode ser realizada!');
            }
        }
    }

?>