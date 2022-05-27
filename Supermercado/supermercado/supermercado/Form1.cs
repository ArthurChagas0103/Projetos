using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace supermercado
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        public double soma { get; set; }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            int cod, quantidade;
            double mult1, mult2, mult3, mult4, mult5;

            cod = int.Parse(txtCodigo.Text);
            quantidade = int.Parse(txtQuantidade.Text);

            soma = 0;

            mult1 = quantidade * 32;
            mult2 = quantidade * 26;
            mult3 = quantidade * 48;
            mult4 = quantidade * 17;
            mult5 = quantidade * 25;

            /*while(cod != 10) { 
            if(cod == 1)
            {
                soma = soma + mult1;
            }
            else if(cod == 2)
            {
                soma = soma + mult2;
            }
            else if(cod == 3)
            {
                soma = soma + mult3;
            }
            }*/


            /*switch(cod)
            {
                case 1: lblResultado.Text = "R$ " + mult1.ToString();
                    break;
                case 2:
                    lblResultado.Text = "R$ " + mult2.ToString();
                    break;
                case 3:
                    lblResultado.Text = "R$ " + mult3.ToString();
                    break;
                case 4:
                    lblResultado.Text = "R$ " + mult4.ToString();
                    break;
                case 5:
                    lblResultado.Text = "R$ " + mult5.ToString();
                    break;
                default:
                    lblResultado.Text = "Código inválido";
                    break;
            }*/

            while (cod != 10){
                switch (cod)
            {
                case 1: soma = soma + mult1;
                    break;
                case 2:
                    soma = soma + mult2;
                    break;
                case 3:
                    soma = soma + mult3;
                    break;
                case 4:
                    soma = soma + mult4;
                    break;
                case 5:
                    soma = soma + mult5;
                    break;
                default:
                    lblResultado.Text = "Código inválido";
                    break;
            }
            }
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtCodigo.Text = "";
            txtQuantidade.Text = "";
            lblResultado.Text = soma.ToString();

        }
    }
}
