Public Class _Default
    Inherits Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
        'Dim CPF As Long = Convert.ToInt64(txtCpf.Text)
        'Dim CPFFormatado As String = String.Format("{0:\000\.000\.000\-00}", CPF)
        'txtCpf.Text = CPFFormatado

        txtCpf.MaxLength = 5
    End Sub
End Class