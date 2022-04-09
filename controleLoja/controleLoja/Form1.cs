using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace controleLoja
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            int quantidadeComprada;
            double valorProduto, multiplicacao, porcentagem, valorFinal;

            quantidadeComprada = int.Parse(txtQuantidadeComprada.Text);
            valorProduto = double.Parse(txtValorProduto.Text);

            multiplicacao = quantidadeComprada * valorProduto;
            porcentagem = (multiplicacao * 15) / 100;
            valorFinal = multiplicacao - porcentagem;

            if (multiplicacao > 200){
                MessageBox.Show("Parabéns! Você recebeu 15% de desconto em sua compra!", "ALERTA!", MessageBoxButtons.OK, MessageBoxIcon.Information);
                lblResultado.Text = "R$ " + valorFinal.ToString();
            }
            else{
                lblResultado.Text = "R$ " + multiplicacao.ToString();
            }
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtQuantidadeComprada.Text = "";
            txtValorProduto.Text = "";
            lblResultado.Text = "R$ 0";
        }
    }
}
