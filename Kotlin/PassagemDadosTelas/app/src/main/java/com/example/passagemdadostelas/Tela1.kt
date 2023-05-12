package com.example.passagemdadostelas

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast

class Tela1 : AppCompatActivity() {

    lateinit var nome1 : TextView
    lateinit var codigo1 : TextView
    lateinit var enviar1 : Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_tela1)

        nome1 = findViewById(R.id.txtNome1)
        codigo1 = findViewById(R.id.txtCodigo1)
        enviar1 = findViewById(R.id.btnEnviar1)

        val n1 = intent.getStringExtra("NOME")
        val c1 = intent.getStringExtra("CODIGO")

        nome1.setText(n1)
        codigo1.setText(c1)

        val mensagem1 = "Dados Recebidos da Tela Principal!"

        Toast.makeText(this, mensagem1, Toast.LENGTH_LONG)

        enviar1.setOnClickListener{ enviar1() }
    }

    private fun enviar1(){
        val intent = Intent(this,Tela2::class.java)

        intent.putExtra("NOME1", nome1.text.toString())
        intent.putExtra("CODIGO1", codigo1.text.toString())
        startActivity(intent)
    }
}