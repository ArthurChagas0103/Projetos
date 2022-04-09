using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace valoresAleatorios
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            double valor1, valor2, valor3, soma, soma13, media, porcentagem1, porcentagem2, porcentagem3;

            valor1 = double.Parse(txtValor1.Text);
            valor2 = double.Parse(txtValor2.Text);
            valor3 = double.Parse(txtValor3.Text);

            soma = valor1 + valor2 + valor3;
            soma13 = valor1 + valor3;
            media = (valor1 + valor2 + valor3) / 3;
            porcentagem1 = (valor1 / soma) * 100;
            porcentagem2 = (valor2 / soma) * 100;
            porcentagem3 = (valor3 / soma) * 100;

            porcentagem1 = Math.Round(porcentagem1, 2);
            porcentagem2 = Math.Round(porcentagem2, 2);
            porcentagem3 = Math.Round(porcentagem3, 2);
            media = Math.Round(media, 2);

            lblSoma13.Text = soma13.ToString();
            lblMedia.Text = media.ToString();
            lblPorcentagem1.Text = porcentagem1.ToString() + "%";
            lblPorcentagem2.Text = porcentagem2.ToString() + "%";
            lblPorcentagem3.Text = porcentagem3.ToString() + "%";
        }

        private void btnExcluir_Click(object sender, EventArgs e)
        {
            txtValor1.Text = "";
            txtValor2.Text = "";
            txtValor3.Text = "";
            lblSoma13.Text = "0";
            lblMedia.Text = "0";
            lblPorcentagem1.Text = "0%";
            lblPorcentagem2.Text = "0%";
            lblPorcentagem3.Text = "0%";
        }
    }
}
