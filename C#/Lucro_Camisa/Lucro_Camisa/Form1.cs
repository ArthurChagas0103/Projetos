using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Lucro_Camisa
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            double blusaP, blusaM, blusaG, somaMult;

            blusaP = double.Parse(txtBlusaP.Text);
            blusaM = double.Parse(txtBlusaM.Text);
            blusaG = double.Parse(txtBlusaG.Text);

            somaMult = (blusaP * 12) + (blusaM * 16) + (blusaG * 22);

            lblResultado.Text = "R$ " + somaMult.ToString(); 
        }
    }
}
