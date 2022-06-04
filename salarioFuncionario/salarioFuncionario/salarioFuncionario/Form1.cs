using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace salarioFuncionario
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            string nome;
            char classe;
            int horas;
            double horasA, horasB, horasC, minutosA, minutosB, minutosC, minutos;

            nome = txtNome.Text;
            classe = char.Parse(txtClasse.Text);
            horas = int.Parse(txtHoras.Text);
            minutos = int.Parse(txtMinutos.Text);

            horasA = horas * 8;
            horasB = horas * 12;
            horasC = horas * 17;

            minutosA = (minutos * 8) / 60 + horasA;
            minutosB = (minutos * 12) / 60 + horasB;
            minutosC = (minutos * 17) / 60 + horasC;

            switch (classe.ToString().ToUpper()){
                case "A":
                    lblNome.Text = nome;
                    lblHoras.Text = horas.ToString() + ":" + minutos.ToString();
                    lblSalario.Text = "R$ " + minutosA.ToString();
                    break;
                case "B":
                    lblNome.Text = nome;
                    lblHoras.Text = horas.ToString() + ":" + minutos.ToString();
                    lblSalario.Text = "R$ " + minutosB.ToString();
                    break;
                case "C":
                    lblNome.Text = nome;
                    lblHoras.Text = horas.ToString() + ":" + minutos.ToString();
                    lblSalario.Text = "R$ " + minutosC.ToString();
                    break;
                default: MessageBox.Show("Classe inválida!","Alerta!",MessageBoxButtons.OK,MessageBoxIcon.Information); break;
            }
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtNome.Text = "";
            txtClasse.Text = "";
            txtHoras.Text = "";
            txtMinutos.Text = "";
            lblNome.Text = "Carlos";
            lblHoras.Text = "00:00";
            lblSalario.Text = "R$";
        }
    }
}
