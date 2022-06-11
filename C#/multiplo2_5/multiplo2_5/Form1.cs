using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace multiplo2_5
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        private void btnCalcular_Click(object sender, EventArgs e)
        {
            int num1;

            num1 = int.Parse(txtNumero.Text);

            if(num1 % 2 == 0 && num1 % 5 ==0){
                lblResultado.Text = "Múltiplo de 2 e 5";
            }
            else if(num1 % 2 == 0){
                lblResultado.Text = "Múltiplo de 2";
            }
            else if (num1 % 5 == 0){
                lblResultado.Text = "Múltiplo de 5";
            }
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtNumero.Text = "";
            lblResultado.Text = "Múltiplo de 2/5";
        }
    }
}
