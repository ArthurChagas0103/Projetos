package com.example.appbanco

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

class CadastroUsuario : AppCompatActivity() {
    lateinit var nome: EditText
    lateinit var senha: EditText
    lateinit var gravar: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro_usuario)

        nome = findViewById(R.id.edtUsuario)
        senha = findViewById(R.id.edtSenhaUsuario)
        gravar = findViewById(R.id.btnCadastrarUsuario)
        gravar.setOnClickListener { GravarDados() }
    }

    fun GravarDados() {
        val cc = usuarios(null, nome.text.toString(), senha.text.toString())
        val cc2 = usuarios(1, null, null, null, null)

        GlobalScope.launch (Dispatchers.IO) {
            BaseDados.getInstance(this@CadastroUsuario).getMeuMetodoDao().inserir(cc)
            //BaseDados.getInstance(this@MainActivity).getMeuMetodoDao().deletar(cc2)
        }

        Toast.makeText(applicationContext, "Cadastrado com Sucesso", Toast.LENGTH_LONG).show()
    }
}