using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vinteNumerosParesImpares
{
    internal class Program
    {
        //Arthur Gomes Chagas
        static void Main(string[] args)
        {
            int numero, par = 0, impar = 0;

            for(int i = 1; i <= 20; i++)
            {
                Console.Write("Digite o " + i + " número: ");
                    numero = int.Parse(Console.ReadLine());

                Console.WriteLine("");

                if(numero % 2 == 0)
                {
                    par++;
                }
                else if (numero % 2 == 1)
                {
                    impar++;
                }
            }
            Console.WriteLine("Foram digitados " + par + " números pares");
            Console.WriteLine("Foram digitados " + impar + " números ímpares");
            Console.ReadKey();
        }
    }
}
