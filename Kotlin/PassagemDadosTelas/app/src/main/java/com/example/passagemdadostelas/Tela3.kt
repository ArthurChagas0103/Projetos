package com.example.passagemdadostelas

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast

class Tela3 : AppCompatActivity() {

    lateinit var nome3 : TextView
    lateinit var codigo3 : TextView
    lateinit var enviar3 : Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_tela3)

        nome3 = findViewById(R.id.txtNome3)
        codigo3 = findViewById(R.id.txtCodigo3)
        enviar3 = findViewById(R.id.btnEnviar3)

        val n3 = intent.getStringExtra("NOME2")
        val c3 = intent.getStringExtra("CODIGO2")

        nome3.setText(n3)
        codigo3.setText(c3)

        val mensagem3 = "Dados Recebidos da Tela 3!"

        Toast.makeText(this, mensagem3, Toast.LENGTH_LONG)

        enviar3.setOnClickListener{ enviar3() }
    }

    private fun enviar3(){
        val intent = Intent(this,Tela4::class.java)

        intent.putExtra("NOME3", nome3.text.toString())
        intent.putExtra("CODIGO3", codigo3.text.toString())
        startActivity(intent)
    }
}