package com.example.appbanco

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText

class MainActivity2 : AppCompatActivity() {
    lateinit var btnGoCadastrar : Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main2)

        btnGoCadastrar = findViewById(R.id.btnGoCadastrar)
        btnGoCadastrar.setOnClickListener{ goToCadastro() }
    }

    fun goToCadastro() {
        val Tela = Intent(this@MainActivity2, MainActivity::class.java)
        startActivity(Tela)
    }
}