using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace calculoAtletas
{
    internal class Program
    {
        //Arthur Gomes Chagas
        static void Main(string[] args)
        {
            string nome;
            double peso, mediaIdade;
            int idade, somaIdade = 0, abaixo75Kg = 0, idadeEntre20E23 = 0;


            for(int i = 1; i <= 3; i++)
            {
                Console.Write("Digite o nome do atleta: ");
                    nome = Console.ReadLine();
                Console.Write("Digite o peso do atleta: ");
                    peso = double.Parse(Console.ReadLine());
                Console.Write("Digite a idade do atleta: ");
                    idade = int.Parse(Console.ReadLine());

                Console.WriteLine("");

                somaIdade = somaIdade + idade;

                if(peso < 75)
                {
                    abaixo75Kg++;
                }
                if(idade >= 20 && idade <= 23)
                {
                    idadeEntre20E23++;
                }
            }
            mediaIdade = somaIdade / 3;

            Console.WriteLine("Atletas com menos de 75 kg: " + abaixo75Kg);
            Console.WriteLine("Atletas com idade entre 20 e 23 anos: " + idadeEntre20E23);
            Console.WriteLine("Média de idade da equipe: " + mediaIdade);
            Console.ReadKey();
        }
    }
}
