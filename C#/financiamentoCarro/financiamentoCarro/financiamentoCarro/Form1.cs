using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace financiamentoCarro
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            char cod;
            double valorCarro, juros1, juros2, juros3, juros4, financiamento1, financiamento2, financiamento3, financiamento4, parcela1, parcela2, parcela3, parcela4;

            valorCarro = double.Parse(txtValor.Text);
            cod = char.Parse(txtCodigo.Text);

            juros1 = (valorCarro * 30) / 100;
            juros2 = (valorCarro * 55) / 100;
            juros3 = (valorCarro * 75) / 100;
            juros4 = (valorCarro * 100) / 100;

            financiamento1 = juros1 + valorCarro;
            financiamento2 = juros2 + valorCarro;
            financiamento3 = juros3 + valorCarro;
            financiamento4 = juros4 + valorCarro;

            parcela1 = financiamento1 / 24;
            parcela2 = financiamento2 / 36;
            parcela3 = financiamento3 / 48;
            parcela4 = financiamento4 / 60;
            
            switch (cod.ToString().ToUpper())
            {
                case "A": 
                    lblResultado1.Text = "R$ " + juros1.ToString();
                    lblResultado2.Text = "R$ " + financiamento1.ToString();
                    lblResultado3.Text = "R$ " + parcela1.ToString();
                    break;
                case "B":
                    lblResultado1.Text = "R$ " + juros2.ToString();
                    lblResultado2.Text = "R$ " + financiamento2.ToString();
                    lblResultado3.Text = "R$ " + parcela2.ToString();
                    break;
                case "C":
                    lblResultado1.Text = "R$ " + juros3.ToString();
                    lblResultado2.Text = "R$ " + financiamento3.ToString();
                    lblResultado3.Text = "R$ " + parcela3.ToString();
                    break;
                case "D":
                    lblResultado1.Text = "R$ " + juros4.ToString();
                    lblResultado2.Text = "R$ " + financiamento4.ToString();
                    lblResultado3.Text = "R$ " + parcela4.ToString();
                    break;
            }
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            lblResultado1.Text = "R$";
            lblResultado2.Text = "R$";
            lblResultado2.Text = "R$";
            txtCodigo.Text = "";
            txtValor.Text = "";
        }
    }
}
