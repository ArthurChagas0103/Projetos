using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace diasDosMeses
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            int ano;
            double bissexto1, bissexto2, bissexto3;
            string mes;

            ano = int.Parse(txtAno.Text);
            mes = txtMes.Text;

            bissexto1 = ano % 4;
            bissexto2 = ano % 100;
            bissexto3 = ano % 400;

            if (bissexto3 == 0 || (bissexto1 == 0 && bissexto2 != 0))
            {
                switch (mes){
                    case "1": lblResultado.Text = "31 dias"; break;
                    case "2": lblResultado.Text = "29 dias"; break;
                    case "3": lblResultado.Text = "31 dias"; break;
                    case "4": lblResultado.Text = "30 dias"; break;
                    case "5": lblResultado.Text = "31 dias"; break;
                    case "6": lblResultado.Text = "30 dias"; break;
                    case "7": lblResultado.Text = "31 dias"; break;
                    case "8": lblResultado.Text = "31 dias"; break;
                    case "9": lblResultado.Text = "30 dias"; break;
                    case "10": lblResultado.Text = "31 dias"; break;
                    case "11": lblResultado.Text = "30 dias"; break;
                    case "12": lblResultado.Text = "31 dias"; break;
                    default: MessageBox.Show("Por favor, digite valores válidos", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);break;
                }
            }
            else{
                switch (mes){
                    case "1": lblResultado.Text = "31 dias"; break;
                    case "2": lblResultado.Text = "28 dias"; break;
                    case "3": lblResultado.Text = "31 dias"; break;
                    case "4": lblResultado.Text = "30 dias"; break;
                    case "5": lblResultado.Text = "31 dias"; break;
                    case "6": lblResultado.Text = "30 dias"; break;
                    case "7": lblResultado.Text = "31 dias"; break;
                    case "8": lblResultado.Text = "31 dias"; break;
                    case "9": lblResultado.Text = "30 dias"; break;
                    case "10": lblResultado.Text = "31 dias"; break;
                    case "11": lblResultado.Text = "30 dias"; break;
                    case "12": lblResultado.Text = "31 dias"; break;
                    default: MessageBox.Show("Por favor, digite valores válidos", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation); break;
                }
            }
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtAno.Text = "";
            txtMes.Text = "";
            lblResultado.Text = "29, 30, 31 dias";
        }
    }
}
