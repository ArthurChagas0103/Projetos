using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace operacoesMatematicas
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string sair = "", operacao;
            double num1, num2, resultado;

            Metodos operacoes = new Metodos();

            while (sair != "s")
            {
                Console.Write("Digite o primeiro número: ");
                num1 = double.Parse(Console.ReadLine());

                Console.Write("Digite o segundo número: ");
                num2 = double.Parse(Console.ReadLine());

                Console.WriteLine("");

                Console.Write("Digite a operação desejada: ");
                operacao = Console.ReadLine().ToUpper();

                Console.WriteLine("");

                if (operacao == "SOMA")
                {
                    resultado = operacoes.Soma(num1, num2);
                    Console.Write("O resultado da soma é: " + resultado);
                    Console.WriteLine("");
                }
                else if (operacao == "SUBTRAÇÃO")
                {
                    resultado = operacoes.Subtracao(num1, num2);
                    Console.Write("O resultado da subtração é: " + resultado);
                    Console.WriteLine("");
                }
                else if (operacao == "MULTIPLICAÇÃO")
                {
                    resultado = operacoes.Multiplicacao(num1, num2);
                    Console.Write("O resultado da multiplicação é: " + resultado);
                    Console.WriteLine("");
                }
                else
                {
                    resultado = operacoes.Divisao(num1, num2);
                    Console.Write("O resultado da divisão é: " + resultado);
                    Console.WriteLine("");
                }

                Console.WriteLine("");

                Console.Write("Digite 's' para sair ou 'c' para continuar: ");
                sair = Console.ReadLine();

                Console.WriteLine("");
            }
            Console.ReadKey();
        }
    }
}
