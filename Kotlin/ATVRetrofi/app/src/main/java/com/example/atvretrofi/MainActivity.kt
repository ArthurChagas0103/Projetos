package com.example.atvretrofi

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

class MainActivity : AppCompatActivity() {
    lateinit var login: EditText
    lateinit var senha: EditText
    lateinit var gravar: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        login = findViewById(R.id.edtLogin)
        senha = findViewById(R.id.edtSenha)
        gravar = findViewById(R.id.btnLogar)
        gravar.setOnClickListener { GravarDados() }
    }

    fun GravarDados() {
        val c = login.text.toString()
        val s = senha.text.toString()

        if(c.isNotEmpty() && s.isNotEmpty()) {
            var cc: usuarios?

            GlobalScope.launch(Dispatchers.IO) {
                cc = BaseDados.getInstance(this@MainActivity).getMeuMetodoDao().Logar(c,s)

                if(cc == null) {
                    val cc = usuarios(null, login.text.toString(), senha.text.toString())

                    GlobalScope.launch (Dispatchers.IO) {
                        BaseDados.getInstance(this@MainActivity).getMeuMetodoDao().inserir(cc)
                    }

                    Toast.makeText(applicationContext, "Cadastrado com Sucesso", Toast.LENGTH_LONG).show()

                    val telaConta = Intent(this@MainActivity, TelaPrincipal::class.java)
                    startActivity(telaConta)
                }
                else {
                    val telaConta = Intent(this@MainActivity, TelaPrincipal::class.java)
                    startActivity(telaConta)
                }
            }
        }
        else {
            login.requestFocus()
            senha.setText("")
            Toast.makeText(applicationContext, "Nao encontrado", Toast.LENGTH_LONG)
        }
    }
}