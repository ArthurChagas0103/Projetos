package com.example.passagemdadostelas

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText

class MainActivity : AppCompatActivity() {

    lateinit var nome : EditText
    lateinit var codigo : EditText
    lateinit var enviar : Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        nome = findViewById(R.id.edtNome)
        codigo = findViewById(R.id.edtCodigo)
        enviar = findViewById(R.id.btnEnviar)
        enviar.setOnClickListener{ enviar() }
    }

    private fun enviar(){
        val intent = Intent(this,Tela1::class.java)

        intent.putExtra("NOME", nome.text.toString())
        intent.putExtra("CODIGO", codigo.text.toString())
        startActivity(intent)
    }
}