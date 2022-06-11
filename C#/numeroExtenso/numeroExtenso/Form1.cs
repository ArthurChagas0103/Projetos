using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace numeroExtenso
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            int a;

            a = int.Parse(txtNumero.Text);

            switch (a){
                case 0: lblResultado.Text = "Zero"; break;
                case 1: lblResultado.Text = "Um"; break;
                case 2: lblResultado.Text = "Dois"; break;
                case 3: lblResultado.Text = "Três"; break;
                case 4: lblResultado.Text = "Quatro"; break;
                case 5: lblResultado.Text = "Cinco"; break;
                case 6: lblResultado.Text = "Seis"; break;
                case 7: lblResultado.Text = "Sete"; break;
                case 8: lblResultado.Text = "Oito"; break;
                case 9: lblResultado.Text = "Nove"; break;
                case 10: lblResultado.Text = "Dez"; break;
                default: lblResultado.Text = "Fora do intervalo definido!"; break;
            }
            
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtNumero.Text = "";
            lblResultado.Text = "Um/Dois...";
        }
    }
}
