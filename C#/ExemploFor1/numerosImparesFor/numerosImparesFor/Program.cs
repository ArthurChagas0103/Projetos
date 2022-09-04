using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace numerosImparesFor
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string nome, nomeMaisde21 = "";
            int idade, soma = 0;

            for (int i = 0; i < 3; i++)
            {
                Console.Write("Digite seu nome: ");
                    nome = Console.ReadLine();

                Console.Write("Digite sua idade: ");
                    idade = int.Parse(Console.ReadLine());

                Console.WriteLine("");

                soma += idade;

                if(idade >= 21)
                {
                    nomeMaisde21 += nome + ", ";
                }
            }

            Console.WriteLine("Soma das idades: " + soma);
            Console.WriteLine("Nome das pessoas com mais de 21 anos: " + nomeMaisde21);
            Console.ReadKey();
        }
    }
}
