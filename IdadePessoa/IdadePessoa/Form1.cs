using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace IdadePessoa
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            int anoNascimento, anoAtual, idadeAnos, idadeMeses, idadeSemanas, idadeDias;

            anoNascimento = int.Parse(txtAno.Text);
            idadeAnos = int.Parse(lblAnos.Text);
            idadeMeses = int.Parse(lblMeses.Text);
            idadeSemanas = int.Parse(lblSemanas.Text);
            idadeDias = int.Parse(lblDias.Text);

            anoAtual = DateTime.Now.Year;
            idadeAnos = anoAtual - anoNascimento;
            idadeMeses = idadeAnos * 12;
            idadeSemanas = idadeAnos * 52;
            idadeDias = idadeAnos * 365;

            lblAnos.Text = idadeAnos.ToString();
            lblMeses.Text = idadeMeses.ToString();
            lblSemanas.Text = idadeSemanas.ToString();
            lblDias.Text = idadeDias.ToString();
        }
    }
}
