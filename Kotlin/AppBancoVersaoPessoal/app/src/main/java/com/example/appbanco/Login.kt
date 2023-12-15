package com.example.appbanco

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

class Login : AppCompatActivity() {
    lateinit var btnLogar : Button
    lateinit var usuarioC : EditText
    lateinit var senhaC : EditText
    lateinit var cadastrar : TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        usuarioC = findViewById(R.id.edtLogin)
        senhaC = findViewById(R.id.edtSenha)
        btnLogar = findViewById(R.id.btnLogar)
        cadastrar = findViewById(R.id.txtCriarConta)
        btnLogar.setOnClickListener{ lerDados() }
        cadastrar.setOnClickListener{ goToPrincipal() }
    }

    fun goToPrincipal() {
        val Tela = Intent(this@Login, CadastroUsuario::class.java)
        startActivity(Tela)
    }

    fun lerDados() {
        val c = usuarioC.text.toString()
        val s = senhaC.text.toString()

        if(c.isNotEmpty() && s.isNotEmpty()) {
            var cc: contaCorrente?

            GlobalScope.launch(Dispatchers.IO) {
                cc = BaseDados.getInstance(this@Login).getMeuMetodoDao().Logar(c,s)

                if(cc == null) {
                    usuarioC.requestFocus()
                    usuarioC.setText("")
                    senhaC.setText("")
                    Toast.makeText(applicationContext, "Nao Encontrado", Toast.LENGTH_LONG)
                }
                else {
                    val telaConta = Intent(this@Login, MainActivity2::class.java)
                    startActivity(telaConta)
                }
            }
        }
        else {
            usuarioC.requestFocus()
            usuarioC.setText("")
            senhaC.setText("")
            Toast.makeText(applicationContext, "Nao encontrado", Toast.LENGTH_LONG)
        }
    }
}