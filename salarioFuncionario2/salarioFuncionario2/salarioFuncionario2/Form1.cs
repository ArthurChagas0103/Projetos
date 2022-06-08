using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace salarioFuncionario2
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            int cod;
            double inss, salarioBruto, horasTrabalhadas, horasExtras, valorHorasExtras, salarioLiquido, salarioHorasExtras;

            cod = int.Parse(txtCodigoMatricula.Text);
            horasTrabalhadas = double.Parse(txtHorasTrabalhadas.Text);
            horasExtras = double.Parse(txtHorasExtras.Text);

            cod = cod / 10000;

            lblClasse.Text = cod.ToString();

            switch (cod.ToString()){
                case "1": 
                    salarioBruto = horasTrabalhadas * 8;
                    lblSalarioBruto.Text = "R$ " + salarioBruto.ToString();
                    /*---------------------------------------------------*/
                    valorHorasExtras = horasExtras * (8 / 2);
                    lblHorasExtras.Text = "R$ " + valorHorasExtras.ToString();
                    /*---------------------------------------------------*/
                    salarioHorasExtras = salarioBruto + valorHorasExtras;
                    lblSalarioHorasExtras.Text = "R$ " + salarioHorasExtras.ToString();
                    /*---------------------------------------------------*/
                    inss = (11 * salarioBruto) / 100;
                    lblINSS.Text = "R$ " + inss.ToString();
                    /*---------------------------------------------------*/
                    salarioLiquido = salarioBruto + valorHorasExtras - inss;
                    lblSalarioLiquido.Text = "R$ " + salarioLiquido.ToString();
                    break;
                case "2": 
                    salarioBruto = horasTrabalhadas * 10; 
                    lblSalarioBruto.Text = "R$ " + salarioBruto.ToString();
                    /*---------------------------------------------------*/
                    valorHorasExtras = horasExtras * (10 / 2);
                    lblHorasExtras.Text = "R$ " + valorHorasExtras.ToString();
                    /*---------------------------------------------------*/
                    salarioHorasExtras = salarioBruto + valorHorasExtras;
                    lblSalarioHorasExtras.Text = "R$ " + salarioHorasExtras.ToString();
                    /*---------------------------------------------------*/
                    inss = (11 * salarioBruto) / 100;
                    lblINSS.Text = "R$ " + inss.ToString();
                    /*---------------------------------------------------*/
                    salarioLiquido = salarioBruto + valorHorasExtras - inss;
                    lblSalarioLiquido.Text = "R$ " + salarioLiquido.ToString();
                    break;
                case "3": 
                    salarioBruto = horasTrabalhadas * 12; 
                    lblSalarioBruto.Text = "R$ " + salarioBruto.ToString();
                    /*---------------------------------------------------*/
                    valorHorasExtras = horasExtras * (12 / 2);
                    lblHorasExtras.Text = "R$ " + valorHorasExtras.ToString();
                    /*---------------------------------------------------*/
                    salarioHorasExtras = salarioBruto + valorHorasExtras;
                    lblSalarioHorasExtras.Text = "R$ " + salarioHorasExtras.ToString();
                    /*---------------------------------------------------*/
                    inss = (11 * salarioBruto) / 100;
                    lblINSS.Text = "R$ " + inss.ToString();
                    /*---------------------------------------------------*/
                    salarioLiquido = salarioBruto + valorHorasExtras - inss;
                    lblSalarioLiquido.Text = "R$ " + salarioLiquido.ToString();
                    break;
                case "4": 
                    salarioBruto = horasTrabalhadas * 15; 
                    lblSalarioBruto.Text = "R$ " + salarioBruto.ToString();
                    /*---------------------------------------------------*/
                    valorHorasExtras = horasExtras * (15 / 2);
                    lblHorasExtras.Text = "R$ " + valorHorasExtras.ToString();
                    /*---------------------------------------------------*/
                    salarioHorasExtras = salarioBruto + valorHorasExtras;
                    lblSalarioHorasExtras.Text = "R$ " + salarioHorasExtras.ToString();
                    /*---------------------------------------------------*/
                    inss = (11 * salarioBruto) / 100;
                    lblINSS.Text = "R$ " + inss.ToString();
                    /*---------------------------------------------------*/
                    salarioLiquido = salarioBruto + valorHorasExtras - inss;
                    lblSalarioLiquido.Text = "R$ " + salarioLiquido.ToString();
                    break;
                case "5": 
                    salarioBruto = horasTrabalhadas * 20; 
                    lblSalarioBruto.Text = "R$ " + salarioBruto.ToString();
                    /*---------------------------------------------------*/
                    valorHorasExtras = horasExtras * (20 / 2);
                    lblHorasExtras.Text = "R$ " + valorHorasExtras.ToString();
                    /*---------------------------------------------------*/
                    salarioHorasExtras = salarioBruto + valorHorasExtras;
                    lblSalarioHorasExtras.Text = "R$ " + salarioHorasExtras.ToString();
                    /*---------------------------------------------------*/
                    inss = (11 * salarioBruto) / 100;
                    lblINSS.Text = "R$ " + inss.ToString();
                    /*---------------------------------------------------*/
                    salarioLiquido = salarioBruto + valorHorasExtras - inss;
                    lblSalarioLiquido.Text = "R$ " + salarioLiquido.ToString();
                    break;
                default: MessageBox.Show("Código inválido", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Information);break;
            }
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtCodigoMatricula.Text = "";
            txtHorasTrabalhadas.Text = "";
            txtHorasExtras.Text = "";
            lblClasse.Text = "1/2/3/4/5";
            lblSalarioBruto.Text = "R$";
            lblHorasExtras.Text = "R$";
            lblSalarioHorasExtras.Text = "R$";
            lblINSS.Text = "R$";
            lblSalarioLiquido.Text = "R$";
        }
    }
}
