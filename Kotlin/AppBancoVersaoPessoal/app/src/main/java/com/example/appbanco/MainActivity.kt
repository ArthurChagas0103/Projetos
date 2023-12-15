package com.example.appbanco

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

class MainActivity : AppCompatActivity() {
    lateinit var nome: EditText
    lateinit var dataCriacao: EditText
    lateinit var desenvolvedor: EditText
    lateinit var escritoEm: EditText
    lateinit var gravar: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        nome = findViewById(R.id.edtNome)
        dataCriacao = findViewById(R.id.edtDataCriacao)
        desenvolvedor = findViewById(R.id.edtDesenvolvedor)
        escritoEm = findViewById(R.id.edtEscritoEm)
        gravar = findViewById(R.id.btnCadastrar)
        gravar.setOnClickListener { GravarDados() }
    }
    
    fun GravarDados() {
        val cc = contaCorrente(null, nome.text.toString(), dataCriacao.text.toString(), desenvolvedor.text.toString(), escritoEm.text.toString())
        val cc2 = contaCorrente(1, null, null, null, null)

        GlobalScope.launch (Dispatchers.IO) {
            BaseDados.getInstance(this@MainActivity).getMeuMetodoDao().inserir(cc)
            //BaseDados.getInstance(this@MainActivity).getMeuMetodoDao().deletar(cc2)
        }

        Toast.makeText(applicationContext, "Cadastrado com Sucesso", Toast.LENGTH_LONG).show()
    }
}