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
using user_registration.Scripts.WebForms.Classes;

namespace user_registration
{
    public partial class _Default : Page
    {
        bool btnCadastrarClick = false;
        ValidacaoCPF validaCPF = new ValidacaoCPF();
        ValidacaoData validaData = new ValidacaoData();

        protected void Page_Load(object sender, EventArgs e)
        {
            txtCpf.ToolTip = "000.000.000-00";
            txtDataNascimento.ToolTip = "dd/mm/aaaa";
            txtEmail.ToolTip = "email@email.com.br";
            txtCelular.ToolTip = "(00) 0 0000-0000";
            txtTelefone.ToolTip = "(00) 0000-0000";
            txtTelefoneAdicional.ToolTip = "(00) 0000-0000";
            txtCep.ToolTip = "00000-000";

            txtCpf.MaxLength = 14;
            txtDataNascimento.MaxLength = 10;
            txtCelular.MaxLength = 16;
            txtTelefone.MaxLength = 14;
            txtTelefoneAdicional.MaxLength = 14;
            txtCep.MaxLength = 9;

            btnCadastrarClick = false;
        }

        protected void btnCadastro_Click(object sender, EventArgs e)
        {
            btnCadastrarClick = true;

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
            else if (txtCpf.Text == "" || txtCpf.Text.Length < 14)
            {
                Response.Write("<script>alert('Digite seu CPF!')</script>");
                txtCpf.Focus();
            }
            else if (txtDataNascimento.Text == "" || txtDataNascimento.Text.Length < 10)
            {
                Response.Write("<script>alert('Digite sua DATA DE NASCIMENTO!')</script>");
                txtDataNascimento.Focus();
            }
            else if (txtEmail.Text == "")
            {
                Response.Write("<script>alert('Digite seu EMAIL!')</script>");
                txtDataNascimento.Focus();
            }
            else if (txtCelular.Text == "" || txtCelular.Text.Length < 16)
            {
                Response.Write("<script>alert('Digite o número do seu CELULAR!')</script>");
                txtCelular.Focus();
            }
            else if (txtTelefoneAdicional.Text != "" && txtTelefone.Text == "")
            {
                Response.Write("<script>alert('Digite o número do seu TELEFONE antes de cadastrar um TELEFONE ADICIONAL!')</script>");
                txtTelefoneAdicional.Focus();
            }
            else if (txtTelefone.Text.Length < 14 && txtTelefone.Text.Length != 0)
            {
                Response.Write("<script>alert('Digite o número do seu TELEFONE!')</script>");
                txtTelefone.Focus();
            }
            else if (txtTelefoneAdicional.Text.Length < 14 && txtTelefoneAdicional.Text.Length != 0)
            {
                Response.Write("<script>alert('Digite o número do seu TELEFONE ADICIONAL!')</script>");
                txtTelefoneAdicional.Focus();
            }
            else if ((txtTelefone.Text == txtTelefoneAdicional.Text) && txtTelefone.Text != "")
            {
                Response.Write("<script>alert('Número do TELEFONE e do TELEFONE ADICIONAL não podem ser iguais!')</script>");
                txtTelefoneAdicional.Focus();
            }
            else if (dpdArea.SelectedIndex == 0)
            {
                Response.Write("<script>alert('Selecione uma ÁREA QUE VOCÊ ESTÁ SE PREPARANDO!')</script>");
                dpdArea.Focus();
            }            
            else if (dpdProfissao.SelectedIndex == 0)
            {
                Response.Write("<script>alert('Selecione uma PROFISSÃO!')</script>");
                dpdArea.Focus();
            }
            else if (txtCep.Text == "" || txtCep.Text.Length < 9)
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
                Response.Write("<script>alert('Digite o NÚMERO do seu ENDEREÇO')</script>");
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
            else if (checkContrato.Checked == false)
            {
                Response.Write("<script>alert('Leia e marque a opção CONDIÇÕES GERAIS E CONTRATO DE TERMOS DE USO!')</script>");
                checkContrato.Focus();
            }
            else
            {
                if (validaCPF.IsCpf(txtCpf.Text) == false)
                {
                    Response.Write("<script>alert('CPF inválido!')</script>");
                }
                else if (validaData.DataIsTrue(txtDataNascimento.Text) == false)
                {
                    Response.Write("<script>alert('Data inválida!')</script>");
                }
                else
                {
                    LocalizarCEP();
                }
            }
        }

        protected void txtCep_TextChanged(object sender, EventArgs e)
        {
            LocalizarCEP();
        }

        public void LocalizarCEP()
        {
            if (txtCep.Text == "" || txtCep.Text.Length < 9)
            {
                Response.Write("<script>alert('Digite um CEP válido!')</script>");
                txtCep.Focus();
                txtEndereco.Text = "";
                txtNumero.Text = "";
                txtComplemento.Text = "";
                txtCidade.Text = "";
                txtBairro.Text = "";
                dbdEstado.SelectedIndex = 0;
            }
            else
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
                                        txtEndereco.Text = "";
                                        txtNumero.Text = "";
                                        txtComplemento.Text = "";
                                        txtCidade.Text = "";
                                        txtBairro.Text = "";
                                        dbdEstado.SelectedIndex = 0;
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
                                    if (txtComplemento.Text == " ")
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

                            if (btnCadastrarClick == true)
                            {
                                Response.Write("<script>alert('Cadastro realizado com sucesso!')</script>");

                                txtNomeCompleto.Text = "";
                                dpdSexo.SelectedIndex = 0;
                                txtCpf.Text = "";
                                txtDataNascimento.Text = "";
                                txtEmail.Text = "";
                                txtCelular.Text = "";
                                txtTelefone.Text = "";
                                txtTelefoneAdicional.Text = "";
                                dpdArea.SelectedIndex = 0;
                                dpdProfissao.SelectedIndex = 0;
                                txtCep.Text = "";
                                txtEndereco.Text = "";
                                txtNumero.Text = "";
                                txtComplemento.Text = "";
                                txtCidade.Text = "";
                                txtBairro.Text = "";
                                dbdEstado.SelectedIndex = 0;
                                txtSenha.Text = "";
                                txtConfirmeSenha.Text = "";
                                checkContrato.Checked = false;
                                checkNoticias.Checked = false;
                            }
                        }
                    }
                }
            }        
        }

        protected void dpdArea_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (dpdArea.SelectedIndex == 1)
            {
                dpdProfissao.Items.Clear();
                dpdProfissao.Items.Insert(0, new ListItem("Profissão da área que está se preparando", "Profissão da área que está se preparando"));
                dpdProfissao.Items.Insert(1, new ListItem("Fisioterapia", "Fisioterapia"));
                dpdProfissao.Items.Insert(2, new ListItem("Medicina", "Medicina"));
                dpdProfissao.Items.Insert(3, new ListItem("Psicologia", "Psicologia"));
                dpdProfissao.Items.Insert(4, new ListItem("Enfermagem", "Enfermagem"));
                dpdProfissao.Items.Insert(5, new ListItem("Farmácia", "Farmácia"));
                dpdProfissao.Items.Insert(6, new ListItem("Nutrição", "Nutrição"));
                dpdProfissao.Items.Insert(7, new ListItem("Odontologia", "Odontologia"));
                dpdProfissao.Items.Insert(8, new ListItem("Biomedicina", "Biomedicina"));
                dpdProfissao.Items.Insert(9, new ListItem("Obstetrícia", "Obstetrícia"));
                dpdProfissao.Items.Insert(10, new ListItem("Medicina Veterinária", "Medicina Veterinária"));
            }
            else if (dpdArea.SelectedIndex == 2)
            {
                dpdProfissao.Items.Clear();
                dpdProfissao.Items.Insert(0, new ListItem("Profissão da área que está se preparando", "Profissão da área que está se preparando"));
                dpdProfissao.Items.Insert(1, new ListItem("Procurador", "Procurador"));
                dpdProfissao.Items.Insert(2, new ListItem("Promotor de Justiça", "Promotor de Justiça"));
                dpdProfissao.Items.Insert(3, new ListItem("Defensor público", "Defensor público"));
                dpdProfissao.Items.Insert(4, new ListItem("Juiz", "Juiz"));
                dpdProfissao.Items.Insert(5, new ListItem("Desembargador", "Desembargador"));
                dpdProfissao.Items.Insert(6, new ListItem("Delegado", "Delegado"));
            }
            else if (dpdArea.SelectedIndex == 3)
            {
                dpdProfissao.Items.Clear();
                dpdProfissao.Items.Insert(0, new ListItem("Profissão da área que está se preparando", "Profissão da área que está se preparando"));
                dpdProfissao.Items.Insert(1, new ListItem("Desenvolvedor de Software", "Desenvolvedor de Software"));
                dpdProfissao.Items.Insert(2, new ListItem("Desenvolvedor Web", "Desenvolvedor Web"));
                dpdProfissao.Items.Insert(3, new ListItem("Administrador de Banco de Dados (DBA)", "Administrador de Banco de Dados (DBA)"));
                dpdProfissao.Items.Insert(4, new ListItem("Analista de Dados", "Analista de Dados"));
                dpdProfissao.Items.Insert(5, new ListItem("Analistas de Sistemas de Computação", "Analistas de Sistemas de Computação"));
                dpdProfissao.Items.Insert(6, new ListItem("Desenvolvedores de Aplicativos para Dispositivos Móveis", "Desenvolvedores de Aplicativos para Dispositivos Móveis"));
                dpdProfissao.Items.Insert(7, new ListItem("Analista de Segurança da Informação", "Analista de Segurança da Informação"));
                dpdProfissao.Items.Insert(8, new ListItem("DevOps", "DevOps"));
            }
            else
            {
                dpdProfissao.Items.Clear();
                dpdProfissao.Items.Insert(0, new ListItem("Profissão da área que está se preparando", "Profissão da área que está se preparando"));
            }
        }
    } 
}