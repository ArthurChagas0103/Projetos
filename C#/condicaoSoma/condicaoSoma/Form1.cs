using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace condicaoSoma
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtNumero1.Text = "";
            txtNumero2.Text = "";
            lblSoma.Text = "0";
        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            double valor1, valor2, soma;

            valor1 = double.Parse(txtNumero1.Text);
            valor2 = double.Parse(txtNumero2.Text);
            soma = valor1 + valor2;

            if(soma > 20){
                soma = soma + 8;
            }
            else if (soma <= 20){
                soma = soma - 5;
            }

            lblSoma.Text = soma.ToString();
        }
    }
}
