using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace provaAluno
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            int numQuestao, questaoAcertada, questaoErrada;
            double porcentagemAcerto, porcentagemErro;

            numQuestao = int.Parse(txtQuestaoProva.Text);
            questaoAcertada = int.Parse(txtQuestoesCertas.Text);
            questaoErrada = int.Parse(lblQuestoesErradas.Text);
            porcentagemAcerto = double.Parse(lblPorcentagemAcerto.Text);
            porcentagemErro = double.Parse(lblPorcentagemErro.Text);

            questaoErrada = numQuestao - questaoAcertada;
            porcentagemAcerto = (questaoAcertada / numQuestao) * 100;
            porcentagemErro = (questaoErrada / numQuestao) * 100;

            lblQuestoesErradas.Text = questaoErrada.ToString();
            lblPorcentagemAcerto.Text = porcentagemAcerto.ToString();
            lblPorcentagemErro.Text = porcentagemErro.ToString();
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtQuestaoProva.Text = "";
            txtQuestoesCertas.Text = "";
            lblPorcentagemAcerto.Text = "0";
            lblPorcentagemErro.Text = "0";
            lblQuestoesErradas.Text= "0";
        }
    }
}
