package com.example.atvretrofi

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

class TelaPrincipal : AppCompatActivity() {
    lateinit var buscaCep: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_tela_principal)

        buscaCep = findViewById(R.id.btnBuscaCep)
        buscaCep.setOnClickListener { BuscaCep() }
    }

    fun BuscaCep() {
        val telaConta = Intent(this@TelaPrincipal, BuscaCep::class.java)
        startActivity(telaConta)
    }
}