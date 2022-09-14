using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace pesquisa100Pessoas
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string nomePessoa;
            char sexoPessoa;
            int idadePessoa, homem = 0, mulher = 0, maiorDeIdade = 0, menorDeIdade = 0, i;
            double porcentagemMaiorIdade, porcentagemMenorIdade;

            for(i = 0; i < 100; i++)
            {
                Console.Write("Digite seu nome: ");
                    nomePessoa = Console.ReadLine();
                Console.Write("Digite seu sexo (m/f): ");
                    sexoPessoa = char.Parse(Console.ReadLine().ToLower());
                Console.Write("Digite sua idade: ");
                    idadePessoa = int.Parse(Console.ReadLine());

                Console.WriteLine("");

                if (sexoPessoa == 'm')
                {
                    homem++;
                }
                else if (sexoPessoa == 'f')
                {
                    mulher++;
                }

                if(idadePessoa > 18)
                {
                    maiorDeIdade++;
                }
                else
                {
                    menorDeIdade++;
                }
            }

            porcentagemMaiorIdade = (maiorDeIdade * 100) / i;
            porcentagemMenorIdade = (menorDeIdade * 100) / i;

            Console.WriteLine("Número de homens: " + homem);
            Console.WriteLine("Número de mulheres: " + mulher);
            Console.WriteLine("Número de maiores de idade: " + maiorDeIdade);
            Console.WriteLine("Número de menores de idade: " + menorDeIdade);
            Console.WriteLine("Porcentagem de maiores de idade: " + porcentagemMaiorIdade + "%");
            Console.WriteLine("Porcentagem de menores de idade: " + porcentagemMenorIdade + "%");
            Console.ReadKey();
        }
    }
}
