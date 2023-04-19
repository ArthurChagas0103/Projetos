package com.example.projetotela

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    lateinit var login : EditText
    lateinit var senha : EditText
    lateinit var logar : Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        login = findViewById(R.id.edtLogin)
        senha = findViewById(R.id.edtSenha)
        logar = findViewById(R.id.btnLogar)
        logar.setOnClickListener{ chamaTela() }
    }

    private fun chamaTela(){
        var l = login.text.toString().trim();
        var s = senha.text.toString().trim();

        if(l.equals("aluno") && s.equals("123456")){
            val tela = Intent(this@MainActivity,Tela2::class.java);
            startActivity(tela);
            Toast.makeText(applicationContext, "LOGIN REALIZADO COM SUCESSO", Toast.LENGTH_LONG).show();
        }
        else{
            login.setText("");
            senha.setText("");
            login.requestFocus();
            Toast.makeText(applicationContext, "FALHA NO LOGIN", Toast.LENGTH_LONG).show();
        }
    }
}