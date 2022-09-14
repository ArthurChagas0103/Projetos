using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace salario200Funcionarios
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string nomeFuncionario;
            double salarioFuncionario, maiorSalarioFuncionario = double.MinValue, menorSalarioFuncionario = double.MaxValue, porcentagem = 0, cont500 = 0;

            for(int i = 0; i < 200; i++)
            {
                Console.Write("Digite o nome do funcionário: ");
                    nomeFuncionario = Console.ReadLine();
                Console.Write("Digite o salário do funcionário: ");
                    salarioFuncionario = double.Parse(Console.ReadLine());

                Console.WriteLine("");

                if (maiorSalarioFuncionario < salarioFuncionario)
                {
                    maiorSalarioFuncionario = salarioFuncionario;
                }
                if (menorSalarioFuncionario > salarioFuncionario)
                {
                    menorSalarioFuncionario = salarioFuncionario;
                }

                if(salarioFuncionario < 500)
                {
                    cont500++;
                }

                porcentagem = (cont500 * 100) / i;
            }
            

            Console.WriteLine("Maior salário digitado: " + maiorSalarioFuncionario);
            Console.WriteLine("Menor salário digitado: " + menorSalarioFuncionario);
            Console.WriteLine("Porcentagem de funcionário que ganham menos de R$500.00: " + porcentagem + "%");
            Console.ReadKey();
        }
    }
}
