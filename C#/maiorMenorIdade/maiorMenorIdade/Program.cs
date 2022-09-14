using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace maiorMenorIdade
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int numero, soma = 0, maiorValor = int.MinValue, menorValor = int.MaxValue;

            Console.Write("Digite um número inteiro e positivo: ");
                numero = int.Parse(Console.ReadLine());

            while(numero != 0)
            {
                soma += numero;

                Console.WriteLine("");

                if (numero > maiorValor)
                {
                    maiorValor = numero;
                }

                if (numero < menorValor)
                {
                    menorValor = numero;
                }

                Console.Write("Digite outro número inteiro e positivo: ");
                    numero = int.Parse(Console.ReadLine());
            }

            Console.WriteLine("");
            Console.WriteLine("Resultado da soma: " + soma);
            Console.WriteLine("O maior número é: " + maiorValor);
            Console.WriteLine("O menor número é: " + menorValor);
            Console.ReadKey();
        }
    }
}
