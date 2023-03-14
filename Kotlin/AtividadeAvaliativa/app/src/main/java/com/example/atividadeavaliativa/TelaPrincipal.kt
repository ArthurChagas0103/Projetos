package com.example.atividadeavaliativa

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast

class TelaPrincipal : AppCompatActivity() {
    lateinit var sobrenos : Button
    lateinit var horario : Button
    lateinit var localizacao : Button
    lateinit var deslogar : Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_tela_principal)

        sobrenos = findViewById(R.id.btnSobre)
        horario = findViewById(R.id.btnHorario)
        localizacao = findViewById(R.id.btnLocalizacao)
        deslogar = findViewById(R.id.btnDeslogar)

        deslogar.setOnClickListener{ chamaTelaInicial() }
        sobrenos.setOnClickListener{ chamaTelaSobreNos() }
    }

    private fun chamaTelaInicial(){
        val tela = Intent(this@TelaPrincipal,MainActivity::class.java);
        startActivity(tela);
    }

    private fun chamaTelaSobreNos(){
        val tela = Intent(this@TelaPrincipal,SobreNos::class.java);
        startActivity(tela);
    }
}