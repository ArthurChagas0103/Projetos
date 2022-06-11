using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace media_numeros
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            int N1, N2, MEDIA;
            
            N1 = int.Parse(txtNumero1.Text);
            N2 = int.Parse(txtNumero2.Text);

            MEDIA = (N1 + N2) / 2;

            if(MEDIA >= 7){
                lblResultado.Text = "Aprovado";
            }
            else{
                lblResultado.Text = "Reprovado";
            }
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtNumero1.Text = "";
            txtNumero2.Text = "";
            lblResultado.Text = "A/P";
        }
    }
}
