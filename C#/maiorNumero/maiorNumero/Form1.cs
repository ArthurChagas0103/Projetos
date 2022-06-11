using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace maiorNumero
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            double num1, num2;

            num1 = double.Parse(txtNumero1.Text);
            num2 = double.Parse(txtNumero2.Text);

            if(num1 > num2){
                lblResultado.Text = num1.ToString();
            }
            else
            {
                lblResultado.Text = num2.ToString();
            }
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtNumero1.Text = "";
            txtNumero2.Text = "";
            lblResultado.Text = "0";
        }
    }
}
