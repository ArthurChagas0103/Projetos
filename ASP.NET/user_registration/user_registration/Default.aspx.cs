using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text.RegularExpressions;
using System.Net;
using System.Net.WebSockets;
using System.IO;

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
            else if (txtTelefone.Text == txtTelefoneAdicional.Text)
            {
                Response.Write("<script>alert('Número do TELEFONE e do TELEFONE ADICIONAL não podem ser iguais!')</script>");
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

        protected void btnBuscarCep_Click(object sender, EventArgs e)
        {
            if (txtCep.Text == "" || txtCep.Text.Length < 8)
            {
                Response.Write("<script>alert('Digite um CEP válido!')</script>");
                txtCep.Focus();
            }
            else
            {
                LocalizarCEP();
            }
        }

        public void LocalizarCEP()
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://viacep.com.br/ws/" + txtCep.Text + "/json/");
            request.AllowAutoRedirect = false;
            HttpWebResponse ChecaServidor = (HttpWebResponse)request.GetResponse();

            if (ChecaServidor.StatusCode != HttpStatusCode.OK)
            {
                Response.Write("<script>alert('Servidor Indisponível!')</script>");
                return; // Sai da rotina
            }

            using (Stream webStream = ChecaServidor.GetResponseStream())
            {
                if (webStream != null)
                {
                    using (StreamReader responseReader = new StreamReader(webStream))
                    {
                        string response = responseReader.ReadToEnd();
                        response = Regex.Replace(response, "[{},]", string.Empty);
                        response = response.Replace("\"", "");

                        String[] substrings = response.Split('\n');

                        int cont = 0;
                        foreach (var substring in substrings)
                        {
                            if (cont == 1)
                            {
                                string[] valor = substring.Split(":".ToCharArray());
                                if (valor[0] == "  erro")
                                {
                                    Response.Write("<script>alert('CEP não encontrado!')</script>");
                                    txtCep.Focus();
                                    return;
                                }
                            }
                            else if (cont == 2)
                            {
                                string[] valor = substring.Split(":".ToCharArray());
                                txtEndereco.Text = valor[1];
                            }
                            else if (cont == 3)
                            {
                                string[] valor = substring.Split(":".ToCharArray());
                                txtComplemento.Text = valor[1]; 
                                if(txtComplemento.Text == " ")
                                {
                                    txtComplemento.Text = "";
                                }
                            }
                            else if (cont == 4)
                            {
                                string[] valor = substring.Split(":".ToCharArray());
                                txtBairro.Text = valor[1];
                            }
                            else if (cont == 5)
                            {
                                string[] valor = substring.Split(":".ToCharArray());
                                txtCidade.Text = valor[1];
                            }
                            else if (cont == 6)
                            {
                                string[] valor = substring.Split(":".ToCharArray());
                                dbdEstado.SelectedValue = valor[1];
                            }

                            cont++;
                        }
                    }
                }
            }
        }

        
    }

        
    
}