using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Calc_Cofrinho
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnSomar_Click(object sender, EventArgs e)
        {
            int num1, num2, num3, num4, num5, num6, mult6;
            double mult1, mult2, mult3, mult4, mult5, soma;

            if (txt1Cent.Text == "")
            {
                txt1Cent.Text = "0";
            }
            if (txt5Cent.Text == "")
            {
                txt5Cent.Text = "0";
            }
            if (txt10Cent.Text == "")
            {
                txt10Cent.Text = "0";
            }
            if (txt25Cent.Text == "")
            {
                txt25Cent.Text = "0";
            }
            if (txt50Cent.Text == "")
            {
                txt50Cent.Text = "0";
            }
            if (txt1Real.Text == "")
            {
                txt1Real.Text = "0";
            }

            num1 = int.Parse(txt1Cent.Text);
            num2 = int.Parse(txt5Cent.Text);
            num3 = int.Parse(txt10Cent.Text);
            num4 = int.Parse(txt25Cent.Text);
            num5 = int.Parse(txt50Cent.Text);
            num6 = int.Parse(txt1Real.Text);

            mult1 = num1 * 0.01;
            mult2 = num2 * 0.05;
            mult3 = num3 * 0.10;
            mult4 = num4 * 0.25;
            mult5 = num5 * 0.50;
            mult6 = num6 * 1;

            soma = mult1 + mult2 + mult3 + mult4 + mult5 + mult6;

            lblValor.Text = soma.ToString();
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txt1Cent.Text = "";
            txt5Cent.Text = "";
            txt10Cent.Text = "";
            txt25Cent.Text = "";
            txt50Cent.Text = "";
            txt1Real.Text = "";
            lblValor.Text = "0";
        }
    }
}
