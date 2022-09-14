using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace nota100Aluno
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int matricula, maiorMatricula = 0, segundaMaiorMatricula = 0;
            double nota, maiorNota1 = double.MinValue, maiorNota2 = 0;

            for(int i = 0; i < 3; i++)
            {
                Console.Write("Digite a matrícula do aluno: ");
                    matricula = int.Parse(Console.ReadLine());
                Console.Write("Digite a nota do aluno: ");
                    nota = int.Parse(Console.ReadLine());

                Console.WriteLine("");

                if (maiorNota1 < nota)
                {
                    maiorNota2 = maiorNota1;
                    maiorNota1 = nota;                 
                    segundaMaiorMatricula = maiorMatricula;
                    maiorMatricula = matricula;
                }
                if (maiorNota2 < nota && maiorNota1 < nota)
                {
                    maiorNota2 = nota;
                    segundaMaiorMatricula = maiorMatricula;
                }  
            }

            Console.WriteLine("A maior nota é: " + maiorNota1 + " - " + "Matrícula: " + maiorMatricula);
            Console.WriteLine("A segunda maior nota é: " + maiorNota2 + " - " + "Matrícula: " + segundaMaiorMatricula);
            Console.ReadKey();
        }
    }
}
