using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ASPNET_Estudos2
{
    public partial class Calculadora : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        public void MsgBox(String ex, Page pg, Object obj)
        {
            string s = "<SCRIPT language='javascript'>alert('" + ex.Replace("\r\n", "\\n").Replace("'", "") + "'); </SCRIPT>";
            Type cstype = obj.GetType();
            ClientScriptManager cs = pg.ClientScript;
            cs.RegisterClientScriptBlock(cstype, s, s.ToString());
        }

        protected void btnCalcular_Click(object sender, EventArgs e)
        {
            if(txtNumero1.Text == "")
            {
                MsgBox("Digite o primeiro número!", this.Page, this);
                txtNumero1.Focus();
            }
            else if(txtNumero2.Text == "")
            {
                MsgBox("Digite o segundo número!", this.Page, this);
                txtNumero2.Focus();
            }
            else if (dropOperacoes.SelectedIndex == 0)
            {
                Response.Write("<script LANGUAGE='JavaScript' >alert('Escolha uma operação!')</script>");
                dropOperacoes.Focus();
            }
            else
            {
                double number1, number2, soma, subtracao, multiplicacao, divisao, restoDivisao;

                number1 = double.Parse(txtNumero1.Text);
                number2 = double.Parse(txtNumero2.Text);

                if (dropOperacoes.SelectedIndex == 1)
                {
                    soma = number1 + number2;
                    txtResultado.Text = soma.ToString();
                }
                else if (dropOperacoes.SelectedIndex == 2)
                {
                    subtracao = number1 - number2;
                    txtResultado.Text = subtracao.ToString();
                }
                else if (dropOperacoes.SelectedIndex == 3)
                {
                    multiplicacao = number1 * number2;
                    txtResultado.Text = multiplicacao.ToString();
                }
                else if (dropOperacoes.SelectedIndex == 4)
                {
                    divisao = number1 / number2;
                    txtResultado.Text = divisao.ToString();
                }
                else
                {
                    restoDivisao = number1 % number2;
                    txtResultado.Text = restoDivisao.ToString();
                }
            }
        }

        protected void btnLimpar_Click(object sender, EventArgs e)
        {
            txtNumero1.Text = "";
            txtNumero2.Text = "";
            txtResultado.Text = "";
            dropOperacoes.SelectedIndex = 0;
        }
    }
}