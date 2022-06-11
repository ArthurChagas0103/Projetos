using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Soma2Numeros
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnSomar_Click(object sender, EventArgs e)
        {
            //Declaração de variável
            int num1, num2, resultado;

            //Entrada de Dados
            num1 = int.Parse(txtValor1.Text);
            num2 = int.Parse(txtValor2.Text);

            //Processamento de Dados
            resultado = num1 + num2;

            //Saída / Exibição de dados
            lblResultado.Text = resultado.ToString();

            //Apagar valores das TextBox após apertar ao botão
            txtValor1.Text = "";
            txtValor2.Text = "";
        }

        private void btnSair_Click(object sender, EventArgs e)
        {
            //Fecha o forms ao ser clicado
            Close();
        }
    }
}
