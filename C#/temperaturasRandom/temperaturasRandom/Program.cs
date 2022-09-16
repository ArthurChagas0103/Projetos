using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace temperaturasRandom
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Random objeto = new Random();

            int temperatura, entre20e23 = 0, somaTemperatura = 0, mediaTemperatura = 0, abaixo20 = 0, porcentagemAbaixo20, i, maiorTemperatura = 0;

            for(i = 0; i < 200; i++)
            {
                temperatura = objeto.Next(0,40);
                    Console.WriteLine(temperatura);

                somaTemperatura = somaTemperatura + temperatura;
                mediaTemperatura = somaTemperatura / 200;

                if (temperatura >= 20 && temperatura <= 23)
                {
                    entre20e23++;
                }
                if (temperatura < 20)
                {
                    abaixo20++;  
                }
                if(temperatura > maiorTemperatura)
                {
                    maiorTemperatura = temperatura;
                }
            }
            porcentagemAbaixo20 = (abaixo20 * 100) / i;

            Console.WriteLine("");
            Console.WriteLine("- Número de dias que a temperatura esteve entre 20 e 23 graus: " + entre20e23 + " dias");
            Console.WriteLine("- Temperatura média: " + mediaTemperatura + "º");
            Console.WriteLine("- Porcentagem de dias em que a temperatura esteve abaixo de 20 graus: " + porcentagemAbaixo20 + "%");
            Console.WriteLine("- Maior temperatura: " + maiorTemperatura + "º");
            Console.ReadKey();
        }
    }
}
