using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace opcaoABC
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            string opcao;

            opcao = txtLetra.Text; 

            switch (opcao.ToUpper())
            {
                case "A": lblResultado.Text = "Opção A escolhida"; break;
                case "B": lblResultado.Text = "Opção B escolhida"; break;
                case "C": lblResultado.Text = "Opção C escolhida"; break;
                default: lblResultado.Text = "Opção inválida"; break;
            }
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtLetra.Text = "";
            lblResultado.Text = "Opção ... escolhida";
        }
    }
}
