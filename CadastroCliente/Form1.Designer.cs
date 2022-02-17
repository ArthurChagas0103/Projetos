namespace CadastroCliente
{
    partial class formTelaInicial
    {
        /// <summary>
        /// Variável de designer necessária.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpar os recursos que estão sendo usados.
        /// </summary>
        /// <param name="disposing">true se for necessário descartar os recursos gerenciados; caso contrário, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código gerado pelo Windows Form Designer

        /// <summary>
        /// Método necessário para suporte ao Designer - não modifique 
        /// o conteúdo deste método com o editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.lblCadastroCliente = new System.Windows.Forms.Label();
            this.btnCadastrarCliente = new System.Windows.Forms.Button();
            this.btnClientesCadastrados = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // lblCadastroCliente
            // 
            this.lblCadastroCliente.AutoSize = true;
            this.lblCadastroCliente.Font = new System.Drawing.Font("Arial", 20.25F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblCadastroCliente.ForeColor = System.Drawing.Color.PapayaWhip;
            this.lblCadastroCliente.Location = new System.Drawing.Point(79, 36);
            this.lblCadastroCliente.Name = "lblCadastroCliente";
            this.lblCadastroCliente.Size = new System.Drawing.Size(226, 32);
            this.lblCadastroCliente.TabIndex = 0;
            this.lblCadastroCliente.Text = "Cadastro Cliente";
            // 
            // btnCadastrarCliente
            // 
            this.btnCadastrarCliente.BackColor = System.Drawing.Color.White;
            this.btnCadastrarCliente.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.btnCadastrarCliente.Font = new System.Drawing.Font("Arial", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnCadastrarCliente.ForeColor = System.Drawing.SystemColors.Highlight;
            this.btnCadastrarCliente.Location = new System.Drawing.Point(102, 92);
            this.btnCadastrarCliente.Name = "btnCadastrarCliente";
            this.btnCadastrarCliente.Size = new System.Drawing.Size(174, 54);
            this.btnCadastrarCliente.TabIndex = 1;
            this.btnCadastrarCliente.Text = "Cadastrar Cliente";
            this.btnCadastrarCliente.UseVisualStyleBackColor = false;
            this.btnCadastrarCliente.Click += new System.EventHandler(this.btnCadastrarCliente_Click);
            // 
            // btnClientesCadastrados
            // 
            this.btnClientesCadastrados.BackColor = System.Drawing.Color.White;
            this.btnClientesCadastrados.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.btnClientesCadastrados.Font = new System.Drawing.Font("Arial", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnClientesCadastrados.ForeColor = System.Drawing.SystemColors.Highlight;
            this.btnClientesCadastrados.Location = new System.Drawing.Point(102, 180);
            this.btnClientesCadastrados.Name = "btnClientesCadastrados";
            this.btnClientesCadastrados.Size = new System.Drawing.Size(174, 54);
            this.btnClientesCadastrados.TabIndex = 2;
            this.btnClientesCadastrados.Text = "Clientes Cadastrados";
            this.btnClientesCadastrados.UseVisualStyleBackColor = false;
            this.btnClientesCadastrados.Click += new System.EventHandler(this.btnClientesCadastrados_Click);
            // 
            // formTelaInicial
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.Highlight;
            this.ClientSize = new System.Drawing.Size(380, 305);
            this.Controls.Add(this.btnClientesCadastrados);
            this.Controls.Add(this.btnCadastrarCliente);
            this.Controls.Add(this.lblCadastroCliente);
            this.Name = "formTelaInicial";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Tela Inicial";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lblCadastroCliente;
        private System.Windows.Forms.Button btnCadastrarCliente;
        private System.Windows.Forms.Button btnClientesCadastrados;
    }
}

