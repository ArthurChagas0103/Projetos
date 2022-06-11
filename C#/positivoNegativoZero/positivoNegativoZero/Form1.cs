using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace positivoNegativoZero
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnMostrar_Click(object sender, EventArgs e)
        {
            int N;

            N = int.Parse(txtNumero.Text);

            if(N > 0){
                lblPositiveNegativeZero.Text = "Positivo";
            }
            else if(N < 0){
                lblPositiveNegativeZero.Text = "Negativo";
            }
            else
            {
                lblPositiveNegativeZero.Text = "Zero";
            }
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtNumero.Text = "";
            lblPositiveNegativeZero.Text = "Positive/Negative/Zero";
        }
    }
}
