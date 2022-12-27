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
        }
    }
}