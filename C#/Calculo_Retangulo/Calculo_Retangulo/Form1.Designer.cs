namespace Calculo_Retangulo
{
    partial class Form1
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.btnCalcular = new System.Windows.Forms.Button();
            this.txtBase = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.lblNumArea = new System.Windows.Forms.Label();
            this.lblDigiteBase = new System.Windows.Forms.Label();
            this.lblDigiteAltura = new System.Windows.Forms.Label();
            this.lblArea = new System.Windows.Forms.Label();
            this.lblPerimetro = new System.Windows.Forms.Label();
            this.lblNumPerimetro = new System.Windows.Forms.Label();
            this.txtAltura = new System.Windows.Forms.TextBox();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.btnLimpar = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.groupBox1.SuspendLayout();
            this.SuspendLayout();
            // 
            // btnCalcular
            // 
            this.btnCalcular.Location = new System.Drawing.Point(35, 178);
            this.btnCalcular.Name = "btnCalcular";
            this.btnCalcular.Size = new System.Drawing.Size(94, 42);
            this.btnCalcular.TabIndex = 0;
            this.btnCalcular.Text = "CALCULAR";
            this.btnCalcular.UseVisualStyleBackColor = true;
            this.btnCalcular.Click += new System.EventHandler(this.btnCalcular_Click);
            // 
            // txtBase
            // 
            this.txtBase.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtBase.Location = new System.Drawing.Point(35, 57);
            this.txtBase.Multiline = true;
            this.txtBase.Name = "txtBase";
            this.txtBase.Size = new System.Drawing.Size(201, 31);
            this.txtBase.TabIndex = 1;
            this.txtBase.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.txtBase_KeyPress);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Arial", 20.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(90, 9);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(288, 32);
            this.label1.TabIndex = 3;
            this.label1.Text = "Rectangle Calculator";
            // 
            // pictureBox1
            // 
            this.pictureBox1.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox1.Image")));
            this.pictureBox1.Location = new System.Drawing.Point(44, 59);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(363, 221);
            this.pictureBox1.TabIndex = 4;
            this.pictureBox1.TabStop = false;
            // 
            // lblNumArea
            // 
            this.lblNumArea.AutoSize = true;
            this.lblNumArea.Font = new System.Drawing.Font("Arial", 14.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblNumArea.Location = new System.Drawing.Point(210, 295);
            this.lblNumArea.Name = "lblNumArea";
            this.lblNumArea.Size = new System.Drawing.Size(21, 22);
            this.lblNumArea.TabIndex = 5;
            this.lblNumArea.Text = "0";
            // 
            // lblDigiteBase
            // 
            this.lblDigiteBase.AutoSize = true;
            this.lblDigiteBase.Font = new System.Drawing.Font("Arial", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblDigiteBase.Location = new System.Drawing.Point(32, 36);
            this.lblDigiteBase.Name = "lblDigiteBase";
            this.lblDigiteBase.Size = new System.Drawing.Size(97, 17);
            this.lblDigiteBase.TabIndex = 6;
            this.lblDigiteBase.Text = "Digite a base:";
            // 
            // lblDigiteAltura
            // 
            this.lblDigiteAltura.AutoSize = true;
            this.lblDigiteAltura.Font = new System.Drawing.Font("Arial", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblDigiteAltura.Location = new System.Drawing.Point(32, 109);
            this.lblDigiteAltura.Name = "lblDigiteAltura";
            this.lblDigiteAltura.Size = new System.Drawing.Size(101, 17);
            this.lblDigiteAltura.TabIndex = 7;
            this.lblDigiteAltura.Text = "Digite a altura:";
            // 
            // lblArea
            // 
            this.lblArea.AutoSize = true;
            this.lblArea.Font = new System.Drawing.Font("Arial", 14.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblArea.Location = new System.Drawing.Point(147, 295);
            this.lblArea.Name = "lblArea";
            this.lblArea.Size = new System.Drawing.Size(60, 22);
            this.lblArea.TabIndex = 8;
            this.lblArea.Text = "Área:";
            // 
            // lblPerimetro
            // 
            this.lblPerimetro.AutoSize = true;
            this.lblPerimetro.Font = new System.Drawing.Font("Arial", 14.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblPerimetro.Location = new System.Drawing.Point(147, 329);
            this.lblPerimetro.Name = "lblPerimetro";
            this.lblPerimetro.Size = new System.Drawing.Size(108, 22);
            this.lblPerimetro.TabIndex = 9;
            this.lblPerimetro.Text = "Perímetro:";
            // 
            // lblNumPerimetro
            // 
            this.lblNumPerimetro.AutoSize = true;
            this.lblNumPerimetro.Font = new System.Drawing.Font("Arial", 14.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblNumPerimetro.Location = new System.Drawing.Point(261, 329);
            this.lblNumPerimetro.Name = "lblNumPerimetro";
            this.lblNumPerimetro.Size = new System.Drawing.Size(21, 22);
            this.lblNumPerimetro.TabIndex = 10;
            this.lblNumPerimetro.Text = "0";
            // 
            // txtAltura
            // 
            this.txtAltura.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtAltura.Location = new System.Drawing.Point(35, 129);
            this.txtAltura.Multiline = true;
            this.txtAltura.Name = "txtAltura";
            this.txtAltura.Size = new System.Drawing.Size(201, 31);
            this.txtAltura.TabIndex = 11;
            this.txtAltura.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.txtAltura_KeyPress);
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.btnLimpar);
            this.groupBox1.Controls.Add(this.txtAltura);
            this.groupBox1.Controls.Add(this.btnCalcular);
            this.groupBox1.Controls.Add(this.txtBase);
            this.groupBox1.Controls.Add(this.lblDigiteBase);
            this.groupBox1.Controls.Add(this.lblDigiteAltura);
            this.groupBox1.Location = new System.Drawing.Point(96, 359);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(263, 241);
            this.groupBox1.TabIndex = 12;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Calcular";
            // 
            // btnLimpar
            // 
            this.btnLimpar.Location = new System.Drawing.Point(140, 178);
            this.btnLimpar.Name = "btnLimpar";
            this.btnLimpar.Size = new System.Drawing.Size(96, 42);
            this.btnLimpar.TabIndex = 12;
            this.btnLimpar.Text = "LIMPAR";
            this.btnLimpar.UseVisualStyleBackColor = true;
            this.btnLimpar.Click += new System.EventHandler(this.btnLimpar_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(447, 632);
            this.Controls.Add(this.lblNumPerimetro);
            this.Controls.Add(this.lblPerimetro);
            this.Controls.Add(this.lblArea);
            this.Controls.Add(this.lblNumArea);
            this.Controls.Add(this.pictureBox1);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.groupBox1);
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Rectangle Calculator";
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnCalcular;
        private System.Windows.Forms.TextBox txtBase;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Label lblNumArea;
        private System.Windows.Forms.Label lblDigiteBase;
        private System.Windows.Forms.Label lblDigiteAltura;
        private System.Windows.Forms.Label lblArea;
        private System.Windows.Forms.Label lblPerimetro;
        private System.Windows.Forms.Label lblNumPerimetro;
        private System.Windows.Forms.TextBox txtAltura;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Button btnLimpar;
    }
}

