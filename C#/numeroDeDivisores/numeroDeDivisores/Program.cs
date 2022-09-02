using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace numeroDeDivisores
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int numDigitado;
            string sair = "";

            while(sair.ToLower() != "s")
            {
                Classe objeto = new Classe();

                Console.Write("Digite um número: ");
                    numDigitado = int.Parse(Console.ReadLine());

                Console.WriteLine("");

                Console.WriteLine("Número de divisores de " + numDigitado + ": " + objeto.Divisores(numDigitado));
                Console.WriteLine("O número é primo: " + objeto.Primo(numDigitado));

                Console.WriteLine("");

                Console.Write("Digite 'c' para continuar ou 's' para sair: ");
                    sair = Console.ReadLine();

                Console.WriteLine("");
            }

            Console.ReadKey();
        }
    }
}
 /* Descobrir quais são os divisores do número
int numDigitado = 0, i;

Console.Write("Digite um número: ");
numDigitado = int.Parse(Console.ReadLine());

for (i = 1; i <= numDigitado; i++)
{
    if (numDigitado % i == 0)
    {
        Console.WriteLine("Divisor de " + numDigitado + ": " + i);
    }
}
Console.ReadKey();
*/