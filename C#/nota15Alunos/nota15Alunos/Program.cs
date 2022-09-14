using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace nota15Alunos
{
    //Arthur Gomes Chagas
    internal class Program
    {
        static void Main(string[] args)
        {
            double notaAluno, mediaAlunos, maiorNotaAluno = 0, somaNotas = 0;

            for(int i = 1; i <= 15; i++)
            {
                Console.Write("Digite a nota do aluno " + i + ": ");
                    notaAluno = double.Parse(Console.ReadLine());

                Console.WriteLine("");

                somaNotas = somaNotas + notaAluno;

                if(notaAluno > maiorNotaAluno)
                {
                    maiorNotaAluno = notaAluno;
                }
            }

            mediaAlunos = somaNotas / 15;

            Console.WriteLine("A média da turma é: " + mediaAlunos);
            Console.WriteLine("A maior nota da turma é: " + maiorNotaAluno);
            Console.ReadKey();
        }
    }
}
