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

        double soma = 0;

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            int cod, quantidade;
            double mult1, mult2, mult3, mult4, mult5;

            cod = int.Parse(txtCodigo.Text);
            quantidade = int.Parse(txtQuantidade.Text);

            mult1 = quantidade * 32;
            mult2 = quantidade * 26;
            mult3 = quantidade * 48;
            mult4 = quantidade * 17;
            mult5 = quantidade * 25;

            if (cod == 1)
            {
                soma = soma + mult1;
                lblResultado.Text = "R$ " + soma.ToString();
            }
            else if (cod == 2)
            {
                soma = soma + mult2;
                lblResultado.Text = "R$ " + soma.ToString();
            }
            else if (cod == 3)
            {
                soma = soma + mult3;
                lblResultado.Text = "R$ " + soma.ToString();
            }
            else if (cod == 4)
            {
                soma = soma + mult4;
                lblResultado.Text = "R$ " + soma.ToString();
            }
            else if (cod == 5)
            {
                soma = soma + mult5;
                lblResultado.Text = "R$ " + soma.ToString();
            }

        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtCodigo.Text = "";
            txtQuantidade.Text = "";
            lblResultado.Text = "R$";
            soma = 0;
        }
    }
}
