using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace numeroDeDivisores
{
    internal class Classe
    {
        public int Divisores(int valorDigitado)
        {
            int i, contador = 0;

            for (i = 1; i <= valorDigitado; i++)
            {
                if (valorDigitado % i == 0)
                {
                    contador++;
                }
            }
            return contador;
        }

        public string Primo(int valorDigitado)
        {
            Classe objeto = new Classe();

            if(objeto.Divisores(valorDigitado) == 2)
            {
                return "Sim";
            }
            else
            {
                return "Não";
            }
            
        }
    }
}
