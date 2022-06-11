using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Calculo_Retangulo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            int num1, num2, calcArea, calcPerimetro;

            num1 = int.Parse(txtBase.Text);
            num2 = int.Parse(txtAltura.Text);
            calcArea = num1 * num2;
            calcPerimetro = (num1 * 2) + (num2 * 2);
            lblNumArea.Text = calcArea.ToString();
            lblNumPerimetro.Text = calcPerimetro.ToString();

        }

        private void txtBase_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (!char.IsDigit(e.KeyChar))

            {

                e.Handled = true;

            }
        }

        private void txtAltura_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (!char.IsDigit(e.KeyChar))

            {

                e.Handled = true;

            }
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtBase.Text = "";
            txtAltura.Text = "";
            lblNumArea.Text = "0";
            lblNumPerimetro.Text = "0";
        }
    }
}
