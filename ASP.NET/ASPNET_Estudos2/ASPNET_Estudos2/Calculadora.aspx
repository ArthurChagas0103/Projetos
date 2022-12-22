<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Calculadora.aspx.cs" Inherits="ASPNET_Estudos2.Calculadora" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" lang="pt-br">
<head runat="server">
    <title>Calculadora</title>
    <link href="App_Themes/Styles/index.css" rel="stylesheet" type="text/css" />
    <link rel="icon" type="image/x-icon" href="App_Themes/Styles/img/iconeCalculadora.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
        <div id="divForms">
            <asp:Label ID="lblText" runat="server" Text="Calculadora"></asp:Label>
            <div class="input-group" id="txt1">
                <span class="input-group-text" id="spanNumero1">Número 1</span>
                <asp:TextBox ID="txtNumero1" runat="server" class="form-control" placeholder="Digite um número" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"></asp:TextBox>
            </div>
            <div class="input-group">
                <span class="input-group-text" id="spanNumero2">Número 2</span>
                <asp:TextBox ID="txtNumero2" runat="server" class="form-control" placeholder="Digite um número" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"></asp:TextBox>
            </div>
            <div class="input-group" id="txt3">
                <span class="input-group-text" id="spanResultado">Resultado</span>
                <asp:TextBox ID="txtResultado" runat="server" class="form-control" placeholder="0" ReadOnly="True"></asp:TextBox>
            </div>
            <br />
            <div id="btnAndDropdown">
                <asp:Button ID="btnCalcular" runat="server" Text="Calcular" class="btn btn-success" Height="40px" Width="105px" OnClick="btnCalcular_Click" />
                <asp:Button ID="btnLimpar" runat="server" Text="Limpar" class="btn btn-danger" Height="40px" Width="105px" OnClick="btnLimpar_Click" />
                <asp:DropDownList ID="dropOperacoes" runat="server" Height="40px" Width="242px">
                    <asp:ListItem></asp:ListItem>
                    <asp:ListItem>Soma</asp:ListItem>
                    <asp:ListItem>Subtração</asp:ListItem>
                    <asp:ListItem>Multiplicação</asp:ListItem>
                    <asp:ListItem>Divisão</asp:ListItem>
                    <asp:ListItem>Resto da Divisão</asp:ListItem>
                </asp:DropDownList>
            </div>
        </div>
    </form>

    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
