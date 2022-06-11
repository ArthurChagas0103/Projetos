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
    public partial class formLoginSenha : Form
    {
        public formLoginSenha()
        {
            InitializeComponent();
        }

        private void btnEntrar_Click(object sender, EventArgs e)
        {
            if(txtUsuario.Text == "")
            {
                MessageBox.Show("Por favor, digite um usuário!", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            else if (txtSenha.Text == "")
            {
                MessageBox.Show("Por favor, digite uma senha!", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            else if (txtUsuario.Text == "Arthur Chagas" && txtSenha.Text == "1234")
            {
                var form = new formUsuariosCadastrados();
                form.Show();
                txtUsuario.Text = "";
                txtSenha.Text = "";
                Close();
            }
            else { 
                MessageBox.Show("Usuário ou Senha inválidos!", "Aviso!", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
        }

        private void checkMostrarSenha_CheckedChanged(object sender, EventArgs e)
        {
            if (checkMostrarSenha.Checked)
            {
                txtSenha.UseSystemPasswordChar = true;
            }
            else
            {
                txtSenha.UseSystemPasswordChar = false;
            }
        }
    }
}
