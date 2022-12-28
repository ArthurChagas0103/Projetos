<%@ Page Title="User Registration" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="user_registration._Default" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxToolkit" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <div>     
        <ajaxToolkit:FilteredTextBoxExtender ID="filtroNome" runat="server" TargetControlID="txtNomeCompleto" FilterType="Custom" FilterMode="InvalidChars" InvalidChars="012356789/*+'.,<>{}()!@#$%¨=§?°º[]|&" />
        <ajaxToolkit:FilteredTextBoxExtender ID="filtroEndereco" runat="server" TargetControlID="txtEndereco" FilterType="Custom" FilterMode="InvalidChars" InvalidChars="012356789/*+'.,<>{}()!@#$%¨=§?[]|&" />
        <ajaxToolkit:FilteredTextBoxExtender ID="filtroNumero" runat="server" TargetControlID="txtNumero" FilterType="Numbers"  />
        <ajaxToolkit:FilteredTextBoxExtender ID="filtroComplemento" runat="server" TargetControlID="txtComplemento" FilterType="Custom" FilterMode="InvalidChars" InvalidChars="/*+'.,<>{}()!@#$%¨=§?[]|&" />
        <ajaxToolkit:FilteredTextBoxExtender ID="filtroCidade" runat="server" TargetControlID="txtCidade" FilterType="Custom" FilterMode="InvalidChars" InvalidChars="012356789/*+.',<>{}()!@#$%¨=§?°º[]|&" />
        <ajaxToolkit:FilteredTextBoxExtender ID="filtroBairro" runat="server" TargetControlID="txtBairro" FilterType="Custom" FilterMode="InvalidChars" InvalidChars="'*+./,<>{}()!@#$%¨=§?[]|&" />

        <h5 style="color: gray;">Identificação do Usuário</h5>    
        <hr style="margin-bottom: 5px" />

        <div>
            <div style="display: flex; flex-direction: row; flex-wrap: wrap;">
                <asp:TextBox ID="txtNomeCompleto" runat="server" CssClass="form-control col-md-4" Style="margin-right: 30px; margin-top: 20px;" Width="390px" Placeholder="Nome Completo"></asp:TextBox>
                <asp:DropDownList ID="dpdSexo" runat="server" CssClass="col-md-2 form-control" Style="margin-right: 30px; margin-top: 20px;" Width="150px">
                    <asp:ListItem>Sexo</asp:ListItem>
                    <asp:ListItem>Masculino</asp:ListItem>
                    <asp:ListItem>Feminino</asp:ListItem>
                </asp:DropDownList>
                <asp:TextBox ID="txtCpf" runat="server" Width="250px" CssClass="form-control col-md-4" Style="margin-right: 30px; margin-top: 20px;" ClientIDMode="Static" Placeholder="CPF"></asp:TextBox>
                <div class="input-group divSpan" style="margin-top: 20px;">
                    <span class="input-group-text span" id="spanCalendar"><i class="fa fa-calendar"></i></span>
                    <asp:TextBox ID="txtDataNascimento" runat="server" CssClass="form-control" ClientIDMode="Static" Width="230px" Placeholder="Data Nascimento"></asp:TextBox>
                </div>
            </div>

            <div style="display: flex; flex-direction: row; flex-wrap: wrap;">
                <div class="input-group divSpan" style="margin-right: 30px; margin-top: 20px;">
                    <span class="input-group-text span"><i class="fa fa-envelope"></i></span>
                    <asp:TextBox ID="txtEmail" runat="server" CssClass="form-control" ClientIDMode="Static" Width="210px" type="Email" Placeholder="Email"></asp:TextBox>
                </div>
                <div class="input-group divSpan" style="margin-right: 30px; margin-top: 20px;">
                    <span class="input-group-text span"><i class="fa fa-mobile"></i></span>
                    <asp:TextBox ID="txtCelular" runat="server" CssClass="form-control" ClientIDMode="Static" Width="262px" Placeholder="Celular"></asp:TextBox>
                </div>
                <div class="input-group divSpan" style="margin-right: 30px; margin-top: 20px;">
                    <span class="input-group-text span"><i class="fa fa-phone" style="transform: rotate(90deg);"></i></span>
                    <asp:TextBox ID="txtTelefone" runat="server" CssClass="form-control" ClientIDMode="Static" Width="216px" Placeholder="Telefone Fixo"></asp:TextBox>
                </div>
                <div class="input-group divSpan" style="margin-top: 20px;">
                    <span class="input-group-text span"><i class="fa fa-phone" style="transform: rotate(90deg);"></i></span>
                    <asp:TextBox ID="txtTelefoneAdicional" runat="server" CssClass="form-control" ClientIDMode="Static" Width="230px" Placeholder="Telefone Adicional"></asp:TextBox>
                </div>
            </div>

            <div style="display: flex; flex-direction: row; flex-wrap: wrap;">
                <asp:DropDownList ID="dpdArea" runat="server" CssClass="col-md-2 form-control" Style="margin-right: 30px; margin-top: 20px;" Width="570px" OnSelectedIndexChanged="dpdArea_SelectedIndexChanged" ClientIDMode="Static" AutoPostBack="True">
                    <asp:ListItem>Para qual área está se preparando?</asp:ListItem>
                    <asp:ListItem>Saúde</asp:ListItem>
                    <asp:ListItem>Direito</asp:ListItem>
                    <asp:ListItem>Tecnologia da Informação</asp:ListItem>
                </asp:DropDownList>
                <asp:DropDownList ID="dpdProfissao" runat="server" CssClass="col-md-2 form-control" Style="margin-top: 20px;" Width="545px">
                    <asp:ListItem>Profissão da área que está se preparando</asp:ListItem>                   
                </asp:DropDownList>
            </div>
        </div>

        <hr />
        <h5 style="color: gray">Endereço</h5>
        <hr style="margin-bottom: 5px"/>

        <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank">Não sei meu CEP</a>

        <div>
            <div style="display: flex; flex-direction: row; flex-wrap: wrap;">
                <asp:TextBox ID="txtCep" runat="server" CssClass="form-control col-md-4" Style="margin-right: 30px; margin-top: 20px;" Width="170px" ClientIDMode="Static" AutoPostBack="True" OnTextChanged="txtCep_TextChanged" Placeholder="CEP"></asp:TextBox>
                <asp:TextBox ID="txtEndereco" runat="server" Width="500px" CssClass="form-control col-md-4" Style="margin-right: 30px; margin-top: 20px;" AutoPostBack="True" Placeholder="Endereco"></asp:TextBox>
                <asp:TextBox ID="txtNumero" runat="server" Width="200px" CssClass="form-control col-md-4" Style="margin-right: 30px; margin-top: 20px;" Placeholder="Numero"></asp:TextBox>
                <asp:TextBox ID="txtComplemento" runat="server" Width="200px" CssClass="form-control col-md-4" Style="margin-top: 20px;" Placeholder="Complemento"></asp:TextBox>                
            </div>

            <div style="display: flex; flex-direction: row; flex-wrap: wrap;">
                <asp:TextBox ID="txtCidade" runat="server" CssClass="form-control col-md-4" Style="margin-right: 30px; margin-top: 20px;" Width="335px" Placeholder="Cidade"></asp:TextBox>
                <asp:TextBox ID="txtBairro" runat="server" Width="335px" CssClass="form-control col-md-4" Style="margin-right: 30px; margin-top: 20px;" Placeholder="Bairro"></asp:TextBox>
                <asp:DropDownList ID="dbdEstado" runat="server" CssClass="col-md-2 form-control" Style="margin-right: 30px; margin-top: 20px" Width="200px">
                    <asp:ListItem>-- Estado --</asp:ListItem>
                    <asp:ListItem> AC</asp:ListItem>
                    <asp:ListItem> AL</asp:ListItem>
                    <asp:ListItem> AP</asp:ListItem>
                    <asp:ListItem> AM</asp:ListItem>
                    <asp:ListItem> BA</asp:ListItem>
                    <asp:ListItem> CE</asp:ListItem>
                    <asp:ListItem> DF</asp:ListItem>
                    <asp:ListItem> ES</asp:ListItem>
                    <asp:ListItem> GO</asp:ListItem>
                    <asp:ListItem> MA</asp:ListItem>
                    <asp:ListItem> MT</asp:ListItem>
                    <asp:ListItem> MS</asp:ListItem>
                    <asp:ListItem> MG</asp:ListItem>
                    <asp:ListItem> PA</asp:ListItem>
                    <asp:ListItem> PB</asp:ListItem>
                    <asp:ListItem> PR</asp:ListItem>
                    <asp:ListItem> PE</asp:ListItem>
                    <asp:ListItem> PI</asp:ListItem>
                    <asp:ListItem> RJ</asp:ListItem>
                    <asp:ListItem> RN</asp:ListItem>
                    <asp:ListItem> RS</asp:ListItem>
                    <asp:ListItem> RO</asp:ListItem>
                    <asp:ListItem> RR</asp:ListItem>
                    <asp:ListItem> SC</asp:ListItem>
                    <asp:ListItem> SP</asp:ListItem>
                    <asp:ListItem> SE</asp:ListItem>
                    <asp:ListItem> TO</asp:ListItem>
                </asp:DropDownList>
            </div>
        </div>

        <hr />
        <h5 style="color: gray">Senha de Acesso</h5>
        <hr style="margin-bottom: 5px"/>

        <div style="display: flex; flex-direction: row; flex-wrap: wrap;">
            <asp:TextBox ID="txtSenha" runat="server" Width="558px" CssClass="form-control" Style="margin-right: 30px; margin-top: 20px;" TextMode="Password" Placeholder="Digite sua Senha"></asp:TextBox>
            <asp:TextBox ID="txtConfirmeSenha" runat="server" Width="558px" CssClass="form-control" Style="margin-top: 20px; margin-bottom: 20px" TextMode="Password" Placeholder="Confirme sua Senha"></asp:TextBox>
        </div>

        <div style="display: flex; flex-direction: column;">
            <asp:CheckBox ID="checkContrato" runat="server" Text="Declaro que li e concordo com as Condições Gerais e Contrato de Termos de Uso" CssClass="ChkBoxClass" />
            <asp:CheckBox ID="checkNoticias" runat="server" Text="Quero receber novidades de cursos e informações do portal" CssClass="ChkBoxClass" />
        </div>

        <asp:Button ID="btnCadastro" runat="server" UseSubmitBehavior="true" Text="Realizar Cadastro" CssClass="btnCadastro btn" Height="35px" Width="100%" OnClick="btnCadastro_Click" style="margin-top: 20px;"/>
    </div>

</asp:Content>
