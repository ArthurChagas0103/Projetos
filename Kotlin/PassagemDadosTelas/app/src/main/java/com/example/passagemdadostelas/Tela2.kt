package com.example.passagemdadostelas

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast

class Tela2 : AppCompatActivity() {

    lateinit var nome2 : TextView
    lateinit var codigo2 : TextView
    lateinit var enviar2 : Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_tela2)

        nome2 = findViewById(R.id.txtNome2)
        codigo2 = findViewById(R.id.txtCodigo2)
        enviar2 = findViewById(R.id.btnEnviar2)

        val n2 = intent.getStringExtra("NOME1")
        val c2 = intent.getStringExtra("CODIGO1")

        nome2.setText(n2)
        codigo2.setText(c2)

        val mensagem2 = "Dados Recebidos da Tela 1!"

        Toast.makeText(this, mensagem2, Toast.LENGTH_LONG)

        enviar2.setOnClickListener{ enviar2() }
    }

    private fun enviar2(){
        val intent = Intent(this,Tela3::class.java)

        intent.putExtra("NOME2", nome2.text.toString())
        intent.putExtra("CODIGO2", codigo2.text.toString())
        startActivity(intent)
    }
}