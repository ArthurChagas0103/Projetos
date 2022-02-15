using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CadastroClientes
{    
    public partial class TelaCadastro : Form
    {        
          public System.Windows.Forms.ImageList ImageList1 { get; set; }              
          Label lab1 = new Label();
          Label lab2 = new Label();
          Label lab3 = new Label();
          Label lab4 = new Label();
          Label lab5 = new Label();
          Label lab6 = new Label();
          Label lab7 = new Label();
          Label lab8 = new Label();
          Label lab9 = new Label();
          Label lab10 = new Label();
          Label lab11 = new Label();                   
          Label lab12 = new Label();
          TextBox txt1 = new TextBox();            
          TextBox txt2 = new TextBox();
          TextBox txt3 = new TextBox();
          TextBox txt4 = new TextBox();
          TextBox txt5 = new TextBox();
          TextBox txt6 = new TextBox();
          TextBox txt7 = new TextBox();
          TextBox txt8 = new TextBox();
          ComboBox cbox1 = new ComboBox();
          RadioButton radb1 = new RadioButton();
          RadioButton radb2 = new RadioButton();        
          MaskedTextBox mask1 = new MaskedTextBox();
          MaskedTextBox mask2 = new MaskedTextBox();
          Button btn1 = new Button();    
          Button btn2 = new Button(); 
          Button btn3 = new Button();       

        public TelaCadastro()
        {
            InitializeComponent();
            
            //lab1.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;  

            //var button1 = new Button();
            //button1.Text = "foo";
            //button1.Location = new Point(100, 100);
            //button1.Click += new System.EventHandler(this.button_Clicked);

            this.Size = new Size (909, 672);            

            txt1.Text = "";
            txt1.Location = new Point (100, 100);
            this.Controls.Add(txt1);  
                                 
            txt2.Text = "R$ ";
            txt2.Location = new Point (100, 200);
            this.Controls.Add(txt2);     

            txt3.Text = "";
            txt3.Location = new Point (100, 250);
            this.Controls.Add(txt3);  

            txt4.Text = "";
            txt4.Location = new Point (200, 250);
            this.Controls.Add(txt4); 

            txt5.Text = "";
            txt5.Location = new Point (300, 250);
            this.Controls.Add(txt5);    

            txt6.Text = "";
            txt6.Location = new Point (100, 300);
            this.Controls.Add(txt6);  

            txt7.Text = "";
            txt7.Location = new Point (200, 300);
            this.Controls.Add(txt7);  

            txt8.Text = "";
            txt8.Location = new Point (550, 200);
            txt8.Size = new Size (170, 300);
            this.Controls.Add(txt8);  
            
            mask1.Location = new Point (100, 150);
            mask1.Mask = "(00)0 0000-0000";
            this.Controls.Add(mask1); 

            mask2.Location = new Point (550, 300);
            mask2.Mask = "00/00/00";
            this.Controls.Add(mask2);  

            cbox1.Text = "";
            cbox1.Location = new Point (550, 100);
            this.Controls.Add(cbox1); 

            radb1.Location = new Point (550, 150);
            this.Controls.Add(radb1);    
            radb1.Size = new Size (100, 20);   
            radb1.Text = "Masculino";               

            radb2.Location = new Point (650, 150);
            this.Controls.Add(radb2);   
            radb2.Size = new Size (100, 20); 
            radb2.Text = "Feminino"; 
            
            btn1.Text = "Salvar";
            btn1.Location = new Point (750, 25);
            btn1.Click += new System.EventHandler(this.btn1_Click);
            this.Controls.Add(btn1);  
            
            btn2.Text = "Excluir";
            btn2.Location = new Point (600, 25);
            btn2.Click += new System.EventHandler(this.btn2_Click);
            this.Controls.Add(btn2); 
                        
            btn3.Text = "Limpar";
            btn3.Location = new Point (450, 25);
            btn3.Click += new System.EventHandler(this.btn3_Click);
            this.Controls.Add(btn3);                       

            lab1.ImageList = ImageList1;
            lab1.ImageIndex = 1;
            lab1.ImageAlign = ContentAlignment.TopLeft;
            lab1.UseMnemonic = true;
            lab1.Text = "Barbearia Corta Pra Mim";
            lab1.Location = new Point (100, 20);
            lab1.Size = new Size (400, 50);
            lab1.Font = new Font (lab1.Font.FontFamily, 15);
            this.Controls.Add(lab1); 
                        
            lab2.ImageList = ImageList1;
            lab2.ImageIndex = 1;
            lab2.ImageAlign = ContentAlignment.TopLeft;
            lab2.UseMnemonic = true;
            lab2.Text = "Nome completo";
            lab2.Location = new Point (100, 77);
            this.Controls.Add(lab2); 

            lab3.ImageList = ImageList1;
            lab3.ImageIndex = 1;
            lab3.ImageAlign = ContentAlignment.TopLeft;
            lab3.UseMnemonic = true;
            lab3.Text = "Número para contato";
            lab3.Location = new Point (100, 127);
            lab3.Size = new Size (150, 50);
            this.Controls.Add(lab3);

            lab4.ImageList = ImageList1;
            lab4.ImageIndex = 1;
            lab4.ImageAlign = ContentAlignment.TopLeft;
            lab4.UseMnemonic = true;
            lab4.Text = "Preço a pagar";
            lab4.Location = new Point (100, 180);
            lab4.Size = new Size (150, 50);
            this.Controls.Add(lab4);

            lab5.ImageList = ImageList1;
            lab5.ImageIndex = 1;
            lab5.ImageAlign = ContentAlignment.TopLeft;
            lab5.UseMnemonic = true;
            lab5.Text = "Data do corte";
            lab5.Location = new Point (100, 230);
            lab5.Size = new Size (150, 50);
            this.Controls.Add(lab5);

            lab6.ImageList = ImageList1;
            lab6.ImageIndex = 1;
            lab6.ImageAlign = ContentAlignment.TopLeft;
            lab6.UseMnemonic = true;
            lab6.Text = "Horário";
            lab6.Location = new Point (100, 280);
            lab6.Size = new Size (150, 50);
            this.Controls.Add(lab6);

            lab7.ImageList = ImageList1;
            lab7.ImageIndex = 1;
            lab7.ImageAlign = ContentAlignment.TopLeft;
            lab7.UseMnemonic = true;
            lab7.Text = "Horas";
            lab7.Location = new Point (300, 304);
            lab7.Size = new Size (150, 50);
            this.Controls.Add(lab7);

            lab8.ImageList = ImageList1;
            lab8.ImageIndex = 1;
            lab8.ImageAlign = ContentAlignment.TopLeft;
            lab8.UseMnemonic = true;
            lab8.Text = "Serviço";
            lab8.Location = new Point (550, 80);
            lab8.Size = new Size (150, 50);
            this.Controls.Add(lab8);

            lab9.ImageList = ImageList1;
            lab9.ImageIndex = 1;
            lab9.ImageAlign = ContentAlignment.TopLeft;
            lab9.UseMnemonic = true;
            lab9.Text = "Corte";
            lab9.Location = new Point (550, 130);
            lab9.Size = new Size (150, 50);
            this.Controls.Add(lab9);     

            lab10.ImageList = ImageList1;
            lab10.ImageIndex = 1;
            lab10.ImageAlign = ContentAlignment.TopLeft;
            lab10.UseMnemonic = true;
            lab10.Text = "Observações";
            lab10.Location = new Point (550, 180);
            lab10.Size = new Size (150, 50);
            this.Controls.Add(lab10);       

            lab11.ImageList = ImageList1;
            lab11.ImageIndex = 1;
            lab11.ImageAlign = ContentAlignment.TopLeft;
            lab11.UseMnemonic = true;
            lab11.Text = "|";
            lab11.Location = new Point (707, 26);
            lab11.Size = new Size (100, 100);
            this.Controls.Add(lab11);

            lab12.ImageList = ImageList1;
            lab12.ImageIndex = 1;
            lab12.ImageAlign = ContentAlignment.TopLeft;
            lab12.UseMnemonic = true;
            lab12.Text = "|";
            lab12.Location = new Point (560, 26);
            lab12.Size = new Size (100, 100);
            this.Controls.Add(lab12);
                                                                                                                                                                            
        }

        private void btn1_Click(object sender, EventArgs e)
        {
            //MessageBox.Show = ("");
        }

        private void btn2_Click(object sender, EventArgs e)
        {
            txt1.Text = "";
            txt2.Text = "R$ ";
            txt3.Text = "";
            txt4.Text = "";
            txt4.Text = "";
            txt5.Text = "";
            txt6.Text = "";
            txt7.Text = "";
            txt8.Text = "";
            mask1.Text = "";
            mask2.Text = "";
            cbox1.Text = "";       
            Close();
        }
        private void btn3_Click(object sender, EventArgs e)
        {
            txt1.Text = "";
            txt2.Text = "R$ ";
            txt3.Text = "";
            txt4.Text = "";
            txt4.Text = "";
            txt5.Text = "";
            txt6.Text = "";
            txt7.Text = "";
            txt8.Text = "";
            mask1.Text = "";
            mask2.Text = "";
            cbox1.Text = "";                              
        }
       
    }
    
}
