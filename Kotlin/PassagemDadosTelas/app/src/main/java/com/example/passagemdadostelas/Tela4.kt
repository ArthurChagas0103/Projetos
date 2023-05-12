package com.example.passagemdadostelas

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast

class Tela4 : AppCompatActivity() {

    lateinit var nome4 : TextView
    lateinit var codigo4 : TextView
    lateinit var voltar : Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_tela4)

        nome4 = findViewById(R.id.txtNome4)
        codigo4 = findViewById(R.id.txtCodigo4)
        voltar = findViewById(R.id.btnVoltar)

        val n4 = intent.getStringExtra("NOME3")
        val c4 = intent.getStringExtra("CODIGO3")

        nome4.setText(n4)
        codigo4.setText(c4)

        val mensagem4 = "Dados Recebidos da Tela 4!"

        Toast.makeText(this, mensagem4, Toast.LENGTH_LONG)

        voltar.setOnClickListener{ voltar() }
    }

    private fun voltar(){
        val intent = Intent(this,MainActivity::class.java)

        startActivity(intent)
    }
}