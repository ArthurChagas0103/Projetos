package com.example.exerciciorevisao

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView

class MainActivity : AppCompatActivity() {

    lateinit var valor : EditText
    lateinit var taxa : EditText
    lateinit var meses : EditText
    lateinit var resultado : TextView
    lateinit var calculo : Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        valor = findViewById(R.id.edtValorInicial)
        taxa = findViewById(R.id.edtTaxaJuros)
        meses = findViewById(R.id.edtQuantidadeMeses)
        calculo = findViewById(R.id.btnCalcular)
        resultado = findViewById(R.id.txtResultado)

        calculo.setOnClickListener { calcular() }
    }

    fun calcular(){
        var v = valor.text.toString().toInt()
        var m = meses.text.toString().toInt()
        var t = taxa.text.toString().toInt()
        var valorJuros = v * t/ 100 * m
        var r = v + valorJuros
        resultado.setText(String.format(r.toString()))
    }
}