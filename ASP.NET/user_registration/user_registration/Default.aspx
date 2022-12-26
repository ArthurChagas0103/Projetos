<%@ Page Title="User Registration" Language="VB" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.vb" Inherits="user_registration._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <div>
        <h5 style="color: gray">Identificação do Usuário</h5>
        <hr style="margin-bottom: 5px" />

        <div>
            <div style="display: flex; flex-direction: row; flex-wrap: wrap;">
                <asp:TextBox ID="TextBox1" runat="server" CssClass="form-control col-md-4" Style="margin-right: 40px; margin-top: 20px;" Width="300px"></asp:TextBox>
                <asp:DropDownList ID="DropDownList1" runat="server" CssClass="col-md-2 form-control" Style="margin-right: 40px; margin-top: 20px;" Width="200px">
                    <asp:ListItem>SEXO</asp:ListItem>
                    <asp:ListItem>Masculino</asp:ListItem>
                    <asp:ListItem>Feminino</asp:ListItem>
                </asp:DropDownList>
                <asp:TextBox ID="txtCpf" runat="server" Width="300px" CssClass="form-control col-md-4" Style="margin-right: 40px; margin-top: 20px;"></asp:TextBox>
                <div class="input-group divSpan" style="margin-top: 20px;">
                    <span class="input-group-text span" id="spanCalendar"><i class="fa fa-calendar"></i></span>
                    <asp:TextBox ID="calendar" runat="server" CssClass="form-control" ClientIDMode="Static" Width="250px"></asp:TextBox>
                </div>
            </div>

            <div style="display: flex; flex-direction: row; flex-wrap: wrap;">
                <div class="input-group divSpan" style="margin-right: 40px; margin-top: 20px;">
                    <span class="input-group-text span"><i class="fa fa-envelope"></i></span>
                    <asp:TextBox ID="TextBox3" runat="server" CssClass="form-control" ClientIDMode="Static" Width="202px"></asp:TextBox>
                </div>
                <div class="input-group divSpan" style="margin-right: 40px; margin-top: 20px;">
                    <span class="input-group-text span"><i class="fa fa-mobile"></i></span>
                    <asp:TextBox ID="TextBox4" runat="server" CssClass="form-control" ClientIDMode="Static" Width="202px"></asp:TextBox>
                </div>
                <div class="input-group divSpan" style="margin-right: 40px; margin-top: 20px;">
                    <span class="input-group-text span"><i class="fa fa-phone" style="transform: rotate(90deg);"></i></span>
                    <asp:TextBox ID="TextBox5" runat="server" CssClass="form-control" ClientIDMode="Static" Width="240px"></asp:TextBox>
                </div>
                <div class="input-group divSpan" style="margin-top: 20px;">
                    <span class="input-group-text span"><i class="fa fa-phone" style="transform: rotate(90deg);"></i></span>
                    <asp:TextBox ID="TextBox6" runat="server" CssClass="form-control" ClientIDMode="Static" Width="247px"></asp:TextBox>
                </div>
            </div>

            <div style="display: flex; flex-direction: row; flex-wrap: wrap;">
                <asp:DropDownList ID="DropDownList3" runat="server" CssClass="col-md-2 form-control" Style="margin-right: 40px; margin-top: 20px;" Width="300px">
                    <asp:ListItem>Para qual área está se preparando?</asp:ListItem>
                </asp:DropDownList>
                <asp:DropDownList ID="DropDownList4" runat="server" CssClass="col-md-2 form-control" Style="margin-right: 40px; margin-top: 20px;" Width="300px">
                    <asp:ListItem>Advogado</asp:ListItem>
                </asp:DropDownList>
            </div>
        </div>

        <hr />
        <h5 style="color: gray">Senha de Acesso</h5>
        <hr style="margin-bottom: 5px"/>

        <div style="display: flex; flex-direction: row; flex-wrap: wrap;">
            <asp:TextBox ID="TextBox7" runat="server" Width="300px" CssClass="form-control" Style="margin-right: 40px; margin-top: 20px;"></asp:TextBox>
            <asp:TextBox ID="TextBox8" runat="server" Width="300px" CssClass="form-control" Style="margin-right: 40px; margin-top: 20px;"></asp:TextBox>
        </div>

        <hr />
        <h5 style="color: gray">Endereço</h5>
        <hr style="margin-bottom: 5px"/>

        <div>
            <div style="display: flex; flex-direction: row; flex-wrap: wrap;">
                <asp:TextBox ID="TextBox13" runat="server" CssClass="form-control col-md-4" Style="margin-right: 40px; margin-top: 20px;" Width="300px"></asp:TextBox>
                <asp:TextBox ID="TextBox14" runat="server" Width="300px" CssClass="form-control col-md-4" Style="margin-right: 40px; margin-top: 20px;"></asp:TextBox>
                <asp:TextBox ID="TextBox15" runat="server" Width="200px" CssClass="form-control col-md-4" Style="margin-right: 40px; margin-top: 20px;"></asp:TextBox>
                <asp:TextBox ID="TextBox16" runat="server" Width="200px" CssClass="form-control col-md-4" Style="margin-right: 40px; margin-top: 20px;"></asp:TextBox>                
            </div>

            <div style="display: flex; flex-direction: row; flex-wrap: wrap;">
                <asp:TextBox ID="TextBox9" runat="server" CssClass="form-control col-md-4" Style="margin-right: 40px; margin-top: 20px;" Width="300px"></asp:TextBox>
                <asp:TextBox ID="TextBox10" runat="server" Width="300px" CssClass="form-control col-md-4" Style="margin-right: 40px; margin-top: 20px;"></asp:TextBox>
                <asp:DropDownList ID="DropDownList2" runat="server" CssClass="col-md-2 form-control" Style="margin-right: 40px; margin-top: 20px; margin-bottom: 20px" Width="200px">
                    <asp:ListItem>-- Estado --</asp:ListItem>
                    <asp:ListItem>Acre</asp:ListItem>
                    <asp:ListItem>Alagoas</asp:ListItem>
                    <asp:ListItem>Amapá</asp:ListItem>
                    <asp:ListItem>Amazonas</asp:ListItem>
                    <asp:ListItem>Bahia</asp:ListItem>
                    <asp:ListItem>Ceará</asp:ListItem>
                    <asp:ListItem>Espírito Santo</asp:ListItem>
                    <asp:ListItem>Goiás</asp:ListItem>
                    <asp:ListItem>Maranhão</asp:ListItem>
                    <asp:ListItem>Mato Grosso</asp:ListItem>
                    <asp:ListItem>Mato Grosso do Sul </asp:ListItem>
                    <asp:ListItem>Minas Gerais</asp:ListItem>
                    <asp:ListItem>Pará</asp:ListItem>
                    <asp:ListItem>Paraíba</asp:ListItem>
                    <asp:ListItem>Paraná</asp:ListItem>
                    <asp:ListItem>Pernambuco</asp:ListItem>
                    <asp:ListItem>Piauí</asp:ListItem>
                    <asp:ListItem>Rio de Janeiro</asp:ListItem>
                    <asp:ListItem>Rio Grande do Norte</asp:ListItem>
                    <asp:ListItem>Rio Grande do Sul</asp:ListItem>
                    <asp:ListItem>Rondônia</asp:ListItem>
                    <asp:ListItem>Roraima</asp:ListItem>
                    <asp:ListItem>Santa Catarina</asp:ListItem>
                    <asp:ListItem>São Paulo</asp:ListItem>
                    <asp:ListItem>Sergipe</asp:ListItem>
                    <asp:ListItem>Tocantins</asp:ListItem>
                </asp:DropDownList>
            </div>
        </div>

        <div style="display: flex; flex-direction: column;">
            <asp:CheckBox ID="CheckBox1" runat="server" Text="Declaro que li e concordo com as Condições Gerais e Contrato de Termos de Uso" CssClass="ChkBoxClass" />
            <asp:CheckBox ID="CheckBox2" runat="server" Text="Quero receber novdades de cursos e informações do portal" CssClass="ChkBoxClass" />
        </div>

        <asp:Button ID="Button1" runat="server" Text="Realizar Cadastro" CssClass="btnCadastro" Height="36px" Width="1254px"/>
    </div>

&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;   

    

</asp:Content>
