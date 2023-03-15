package com.example.atividadeavaliativa

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class HorarioFuncionamento : AppCompatActivity() {
    lateinit var voltar : Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_horario_funcionamento)

        voltar = findViewById(R.id.btnVoltar)

        voltar.setOnClickListener{ chamaTelaPrincipal() }
    }

    private fun chamaTelaPrincipal(){
        val tela = Intent(this@HorarioFuncionamento,TelaPrincipal::class.java);
        startActivity(tela);
    }
}