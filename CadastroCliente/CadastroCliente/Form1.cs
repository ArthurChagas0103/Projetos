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
    public partial class formTelaInicial : Form
    {
        public formTelaInicial()
        {
            InitializeComponent();
        }

        private void btnCadastrarCliente_Click(object sender, EventArgs e)
        {
            var form = new formTelaCadastro();
            form.Show();
        }
    }
}
