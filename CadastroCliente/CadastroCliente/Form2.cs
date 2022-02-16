using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CadastroCliente
{
    public partial class formTelaCadastro : Form
    {
        public formTelaCadastro()
        {
            InitializeComponent();
        }

        private void btnExcluir_Click(object sender, EventArgs e)
        {
            var mensagem = MessageBox.Show("Gostaria de apagar tudo?", "Aviso!", MessageBoxButtons.OKCancel, MessageBoxIcon.Warning);

            if(mensagem == DialogResult.Cancel)
            {
                mensagem.ToString();
            }
            else
            {
                txtNome.Text = "";
                txtEmail.Text = "";
                txtCurriculo.Text = "";
                txtDataNascimento.Text = "";
                btnMasculino.Checked = false;
                btnFeminino.Checked = false;
                txtCPF.Text = "";
                txtCelular.Text = "";
                txtTelefone.Text = "";
                txtSenha1.Text = "";
                txtSenha2.Text = "";
            }
        }

        private void btnSalvar_Click(object sender, EventArgs e)
        {
            MessageBox.Show("Cadastro Salvo com Sucesso!", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Information);
        }

        private void btnCurriculo_Click(object sender, EventArgs e)
        {
            OpenFile.ShowDialog();
            this.OpenFile.InitialDirectory = @"C:\";
            this.OpenFile.RestoreDirectory = true;
            this.OpenFile.Title = "Browse Text Files";
            this.OpenFile.DefaultExt = "pdf";
            this.OpenFile.Filter = "PDF files|*.pdf";
            this.OpenFile.FilterIndex = 1;
            this.OpenFile.CheckFileExists = true;
            this.OpenFile.CheckPathExists = true;
            txtCurriculo.Text = OpenFile.FileName;
        }
    }
}
