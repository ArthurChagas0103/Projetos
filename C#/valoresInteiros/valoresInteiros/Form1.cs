using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace valoresInteiros
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            int valorA, valorB, valorC, soma, mult;
            
            valorA = int.Parse(txtValorA.Text);
            valorB = int.Parse(txtValorB.Text);

            if(valorA == valorB){
                soma = valorA + valorB;
                valorC = soma;
                lblResultado.Text = valorC.ToString();
            }
            else{
                mult = valorA * valorB;
                valorC = mult;
                lblResultado.Text = valorC.ToString();

            }
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtValorA.Text = "";
            txtValorB.Text = "";
            lblResultado.Text = "0";
        }
    }
}
