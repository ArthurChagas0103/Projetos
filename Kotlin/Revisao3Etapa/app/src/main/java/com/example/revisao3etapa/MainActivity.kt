package com.example.revisao3etapa

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class MainActivity : AppCompatActivity() {
    lateinit var cadastrob : Button
    lateinit var cepb : Button
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        cadastrob = findViewById(R.id.btnC)
        cepb = findViewById(R.id.btnCEP)
        cadastrob.setOnClickListener { chamaTelaCad() }
        cepb.setOnClickListener { chamaTelaCEP() }
    }
   fun chamaTelaCad(){
       var intent = Intent(this,cadastro::class.java)
       startActivity(intent)
   }
   fun chamaTelaCEP(){
       var intent = Intent(this,cep::class.java)
       startActivity(intent)
   }






}