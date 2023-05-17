package com.example.atividadecache

import android.content.Context
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView

class MainActivity : AppCompatActivity() {

    lateinit var edtNome : EditText
    lateinit var edtCPF : EditText
    lateinit var edtEmail : EditText
    lateinit var edtSenha : EditText
    lateinit var txtNome : TextView
    lateinit var txtCPF : TextView
    lateinit var txtEmail : TextView
    lateinit var txtSenha : TextView
    lateinit var btnGravar : Button
    lateinit var btnLer : Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        edtNome = findViewById(R.id.edtNome)
        edtCPF = findViewById(R.id.edtCPF)
        edtEmail = findViewById(R.id.edtEmail)
        edtSenha = findViewById(R.id.edtSenha)
        txtNome = findViewById(R.id.txtNome)
        txtCPF = findViewById(R.id.txtCPF)
        txtEmail = findViewById(R.id.txtEmail)
        txtSenha = findViewById(R.id.txtSenha)
        btnGravar = findViewById(R.id.btnGravar)
        btnLer = findViewById(R.id.btnLer)

        val share = getSharedPreferences("Dados", Context.MODE_PRIVATE)

        btnGravar.setOnClickListener{
            val editar = share.edit()
            editar.apply{
                putString("NOME",edtNome.text.toString())
                putString("CPF",edtCPF.text.toString())
                putString("EMAIL",edtEmail.text.toString())
                putString("SENHA",edtSenha.text.toString())
                apply()
            }
        }

        btnLer.setOnClickListener{
            val nome = share.getString("NOME",null)
            val cpf = share.getString("CPF",null)
            val email = share.getString("EMAIL",null)
            val senha = share.getString("SENHA",null)

            txtNome.setText(nome)
            txtCPF.setText(cpf)
            txtEmail.setText(email)
            txtSenha.setText(senha)
        }
    }
}