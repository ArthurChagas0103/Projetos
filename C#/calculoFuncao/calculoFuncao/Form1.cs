using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace calculoFuncao
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            double x, funcao;

            x = double.Parse(txtValorX.Text);

            funcao = (2 * x) + 1;

            lblResultado.Text = "(" + x + ", " + funcao + ")".ToString();
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtValorX.Text = "";
            lblResultado.Text = "(x, f(x))";
        }
    }
}
