<?php
    
    class Moeda{
        private static function formatarMoeda($valor) {
            $formatter = new NumberFormatter('pt_BR',  NumberFormatter::CURRENCY);
            echo  $formatter->formatCurrency($valor, 'BRL') . '<br>';
        }
    }

?>