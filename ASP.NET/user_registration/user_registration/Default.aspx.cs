using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace user_registration
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            txtNomeCompleto.Attributes.Add("placeholder", "Nome Completo");
            txtCpf.Attributes.Add("placeholder", "CPF");
            txtDataNascimento.Attributes.Add("placeholder", "Data Nascimento");
            txtEmail.Attributes.Add("placeholder", "Email");
            txtCelular.Attributes.Add("placeholder", "Celular");
            txtTelefone.Attributes.Add("placeholder", "Telefone Fixo");
            txtTelefoneAdicional.Attributes.Add("placeholder", "Telefone Adicional");
            txtSenha.Attributes.Add("placeholder", "Digite sua Senha");
            txtConfirmeSenha.Attributes.Add("placeholder", "Confirme sua Senha");
            txtCep.Attributes.Add("placeholder", "CEP");
            txtEndereco.Attributes.Add("placeholder", "Endereço");
            txtNumero.Attributes.Add("placeholder", "Número");
            txtComplemento.Attributes.Add("placeholder", "Complemento");
            txtCidade.Attributes.Add("placeholder", "Cidade");
            txtBairro.Attributes.Add("placeholder", "Bairro");

            txtCpf.ToolTip = "000.000.000-00";
            txtDataNascimento.ToolTip = "dd/mm/aaaa";
            txtEmail.ToolTip = "email@email.com.br";            
            txtCelular.ToolTip = "(00)0 0000-0000";
            txtTelefone.ToolTip = "(00) 0000-0000";
            txtTelefoneAdicional.ToolTip = "(00) 0000-0000";
            txtCep.ToolTip = "00000-000";

            txtCpf.MaxLength = 11;
            txtDataNascimento.MaxLength = 8;
            txtCelular.MaxLength = 11;
            txtTelefone.MaxLength = 10;
            txtTelefoneAdicional.MaxLength = 10;
            txtCep.MaxLength = 8;
        }

        protected void btnCadastro_Click(object sender, EventArgs e)
        { 
            if (txtNomeCompleto.Text == "")
            {
                Response.Write("<script>alert('Digite seu NOME COMPLETO!')</script>");
                txtNomeCompleto.Focus();
            }
            else if (dpdSexo.SelectedIndex == 0)
            {
                Response.Write("<script>alert('Selecione seu SEXO!')</script>");
                dpdSexo.Focus();
            }
            else if (txtCpf.Text == "" || txtCpf.Text.Length < 11)
            {
                Response.Write("<script>alert('Digite seu CPF!')</script>");
                txtCpf.Focus();
            }
            else if (txtDataNascimento.Text == "" || txtDataNascimento.Text.Length < 8)
            {
                Response.Write("<script>alert('Digite sua DATA DE NASCIMENTO!')</script>");
                txtDataNascimento.Focus();
            }
            else if (txtEmail.Text == "")
            {
                Response.Write("<script>alert('Digite seu EMAIL!')</script>");
                txtDataNascimento.Focus();
            }
            else if (txtCelular.Text == "" || txtCelular.Text.Length < 11)
            {
                Response.Write("<script>alert('Digite o número do seu CELULAR!')</script>");
                txtCelular.Focus();
            }
            else if (txtTelefone.Text.Length < 10 && txtTelefone.Text.Length != 0)
            {
                Response.Write("<script>alert('Digite o número do seu TELEFONE!')</script>");
                txtTelefone.Focus();
            }
            else if (txtTelefoneAdicional.Text.Length < 10 && txtTelefoneAdicional.Text.Length != 0)
            {
                Response.Write("<script>alert('Digite o número do seu TELEFONE ADICIONAL!')</script>");
                txtTelefoneAdicional.Focus();
            }
            else if (dpdArea.SelectedIndex == 0)
            {
                Response.Write("<script>alert('Selecione a ÁREA QUE VOCÊ ESTÁ SE PREPARANDO!')</script>");
                dpdArea.Focus();
            }
            else if (txtSenha.Text == "")
            {
                Response.Write("<script>alert('Digite sua SENHA!')</script>");
                txtSenha.Focus();
            }
            else if (txtSenha.Text != txtConfirmeSenha.Text)
            {
                Response.Write("<script>alert('SENHAS não conferem!')</script>");
                txtSenha.Focus();
                txtConfirmeSenha.Focus();
            }
            else if (txtCep.Text == "" || txtCep.Text.Length < 8)
            {
                Response.Write("<script>alert('Digite seu CEP!')</script>");
                txtCep.Focus();
            }
            else if (txtEndereco.Text == "")
            {
                Response.Write("<script>alert('Digite seu ENDEREÇO!')</script>");
                txtEndereco.Focus();
            }
            else if (txtNumero.Text == "")
            {
                Response.Write("<script>alert('Digite seu NÚMERO')</script>");
                txtNumero.Focus();
            }
            else if (txtCidade.Text == "")
            {
                Response.Write("<script>alert('Digite sua CIDADE!')</script>");
                txtCidade.Focus();
            }
            else if (txtBairro.Text == "")
            {
                Response.Write("<script>alert('Digite seu BAIRRO')</script>");
                txtBairro.Focus();
            }
            else if (dbdEstado.SelectedIndex == 0)
            {
                Response.Write("<script>alert('Selecione seu ESTADO!')</script>");
                dbdEstado.Focus();
            }
            else if (checkContrato.Checked == false)
            {
                Response.Write("<script>alert('Leia e marque a opção CONDIÇÕES GERAIS E CONTRATO DE TERMOS DE USO!')</script>");
                checkContrato.Focus();
            }
            else
            {
                txtDataNascimento.Text = String.Format(@"{0:00/00/0000}", Convert.ToDecimal(txtDataNascimento.Text));
                txtCelular.Text = String.Format(@"{0:(00)0 0000-0000}", Convert.ToDecimal(txtCelular.Text));
                txtTelefone.Text = String.Format(@"{0:(00) 0000-0000}", Convert.ToDecimal(txtTelefone.Text));
                txtTelefoneAdicional.Text = String.Format(@"{0:(00) 0000-0000}", Convert.ToDecimal(txtTelefoneAdicional.Text));
                txtCep.Text = String.Format(@"{0:00000-000}", Convert.ToDecimal(txtCep.Text));
            }
        }
    }
}