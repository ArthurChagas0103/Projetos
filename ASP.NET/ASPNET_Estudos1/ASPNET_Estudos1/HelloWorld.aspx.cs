using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ASPNET_Estudos1
{
    public partial class HelloWorld : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnExecutar_Click(object sender, EventArgs e)
        {
            if(txtMensagem.Text == "Diga Hello World")
            {
                lblMensagem.Text = "Hello World";
            }
            else
            {
                lblMensagem.Text = "<h1>Estou aguardando a instrução!</h1>";
            }
        }
    }
}