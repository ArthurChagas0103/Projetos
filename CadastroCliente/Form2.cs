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

            if (mensagem == DialogResult.Cancel)
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
            if (txtNome.Text == "")
            {
                MessageBox.Show("Por favor, digite um nome!", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            else if (txtEmail.Text == "")
            {
                MessageBox.Show("Por favor, digite um email!", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            else if (txtCurriculo.Text == "")
            {
                MessageBox.Show("Por favor, adicione um curriculo!", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            else if (txtDataNascimento.Text == "  /  /")
            {
                MessageBox.Show("Por favor, digite uma data de nascimento!", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            else if (btnMasculino.Checked == false && btnFeminino.Checked == false)
            {
                MessageBox.Show("Por favor, selecione um gênero!", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            else if (txtCPF.Text == "   ,   ,   -")
            {
                MessageBox.Show("Por favor, digite um CPF!", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            else if (txtCelular.Text == "(  )       -")
            {
                MessageBox.Show("Por favor, digite um número de celular!", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            else if (txtTelefone.Text == "(  )     -")
            {
                MessageBox.Show("Por favor, digite um número de telefone!", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            else if (txtSenha1.Text == "")
            {
                MessageBox.Show("Por favor, digite uma senha!", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            else if (txtSenha2.Text != txtSenha1.Text)
            {
                MessageBox.Show("Senhas não conferem!", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            else MessageBox.Show("Cadastro Salvo com Sucesso!", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Information); 
        }

        private void btnCurriculo_Click(object sender, EventArgs e)
        {
            OpenFile.ShowDialog();
        }

        private void OpenFile_FileOk(object sender, CancelEventArgs e)
        {
            OpenFile.InitialDirectory = @"C:\";
            OpenFile.RestoreDirectory = true;
            OpenFile.Title = "Browse Text Files";
            OpenFile.DefaultExt = "pdf";
            OpenFile.Filter = "PDF files|*.pdf";
            OpenFile.FilterIndex = 1;
            OpenFile.CheckFileExists = true;
            OpenFile.CheckPathExists = true;
            txtCurriculo.Text = OpenFile.FileName;
        }
    }
}
