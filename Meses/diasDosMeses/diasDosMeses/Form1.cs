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
            double bissexto;
            string mes;

            ano = int.Parse(txtAno.Text);
            mes = txtMes.Text;

            bissexto = ano % 4;

            if(bissexto == 0){
                switch (mes)
                {
                    case "Janeiro": lblResultado.Text = "31 dias"; break;
                    case "Fevereiro": lblResultado.Text = "29 dias"; break;
                    case "Março": lblResultado.Text = "31 dias"; break;
                    case "Abril": lblResultado.Text = "30 dias"; break;
                    case "Maio": lblResultado.Text = "31 dias"; break;
                    case "Junho": lblResultado.Text = "30 dias"; break;
                    case "Julho": lblResultado.Text = "31 dias"; break;
                    case "Agosto": lblResultado.Text = "31 dias"; break;
                    case "Setembro": lblResultado.Text = "30 dias"; break;
                    case "Outubro": lblResultado.Text = "31 dias"; break;
                    case "Novembro": lblResultado.Text = "30 dias"; break;
                    case "Dezembro": lblResultado.Text = "31 dias"; break;
                    default: MessageBox.Show("Por favor, digite valores válidos", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);break;
                }
            }
            else{
                switch (mes)
                {
                    case "Janeiro": lblResultado.Text = "31 dias"; break;
                    case "Fevereiro": lblResultado.Text = "28 dias"; break;
                    case "Março": lblResultado.Text = "31 dias"; break;
                    case "Abril": lblResultado.Text = "30 dias"; break;
                    case "Maio": lblResultado.Text = "31 dias"; break;
                    case "Junho": lblResultado.Text = "30 dias"; break;
                    case "Julho": lblResultado.Text = "31 dias"; break;
                    case "Agosto": lblResultado.Text = "31 dias"; break;
                    case "Setembro": lblResultado.Text = "30 dias"; break;
                    case "Outubro": lblResultado.Text = "31 dias"; break;
                    case "Novembro": lblResultado.Text = "30 dias"; break;
                    case "Dezembro": lblResultado.Text = "31 dias"; break;
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
