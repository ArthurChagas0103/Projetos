package com.example.revisao3etapa

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

class cadastro : AppCompatActivity() {
    lateinit var clogin : EditText
    lateinit var csenha : EditText
    lateinit var logar : Button
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro)
        clogin = findViewById(R.id.edtlogin)
        csenha = findViewById(R.id.edtsenha)
        logar  = findViewById(R.id.btnCadastrar)
        logar.setOnClickListener { loga() }
    }
    fun loga(){
        var l = clogin.text.toString()
        var s = csenha.text.toString()
        //var logi = cadastroLogin(null,l.toString(),s.toString())
        var logi : cadastroLogin?
        GlobalScope.launch(Dispatchers.IO) {
       // dataBase.getInstance(this@cadastro).getMeuMetodoDao().inserir(logi)
      logi =  dataBase.getInstance(this@cadastro).getMeuMetodoDao().Logar(l,s)
            if (logi==null){
             clogin.setText("")
                clogin.requestFocus()
                Toast.makeText(applicationContext,"Nao Encontrado",Toast.LENGTH_LONG).show()
            }else{
                val telaConta = Intent(this@cadastro, MainActivity::class.java)
                startActivity(telaConta) }
        }
    }



    }
