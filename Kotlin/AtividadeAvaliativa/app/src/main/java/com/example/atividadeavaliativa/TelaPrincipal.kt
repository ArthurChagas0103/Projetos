package com.example.atividadeavaliativa

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

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
        deslogar = findViewById(R.id.btnVoltar)

        deslogar.setOnClickListener{ chamaTelaInicial() }
        sobrenos.setOnClickListener{ chamaTelaSobreNos() }
        horario.setOnClickListener{ chamaTelaHorario() }
        localizacao.setOnClickListener{ chamaTelaLocalizacao() }
    }

    private fun chamaTelaInicial(){
        val tela = Intent(this@TelaPrincipal,MainActivity::class.java);
        startActivity(tela);
    }

    private fun chamaTelaSobreNos(){
        val tela = Intent(this@TelaPrincipal,SobreNos::class.java);
        startActivity(tela);
    }

    private fun chamaTelaHorario(){
        val tela = Intent(this@TelaPrincipal,HorarioFuncionamento::class.java);
        startActivity(tela);
    }

    private fun chamaTelaLocalizacao(){
        val tela = Intent(this@TelaPrincipal,Localizacao()::class.java);
        startActivity(tela);
    }
}