package com.example.aulakotlin

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView

class MainActivity : AppCompatActivity() {

    lateinit var btnFuncao1 : Button
    lateinit var btnFuncao2 : Button
    lateinit var btnFuncao3 : Button
    lateinit var btnFuncao4 : Button

    lateinit var lblFuncao1 : TextView
    lateinit var lblFuncao2 : TextView
    lateinit var lblFuncao3 : TextView
    lateinit var lblFuncao4 : TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        btnFuncao1 = findViewById(R.id.btnFuncao1)
        btnFuncao2 = findViewById(R.id.btnFuncao2)
        btnFuncao3 = findViewById(R.id.btnFuncao3)
        btnFuncao4 = findViewById(R.id.btnFuncao4)

        lblFuncao1 = findViewById(R.id.lblFuncao1)
        lblFuncao2 = findViewById(R.id.lblFuncao2)
        lblFuncao3 = findViewById(R.id.lblFuncao3)
        lblFuncao4 = findViewById(R.id.lblFuncao4)

        btnFuncao1.setOnClickListener{ f1() }
        btnFuncao2.setOnClickListener{ f2() }
        btnFuncao2.setOnClickListener{ f3() }
        btnFuncao3.setOnClickListener{ f4() }
    }

    fun f1(){
        val x = 10
        val y = 20
        val r = x + y

        lblFuncao1.setText( r.toString() )
    }

    fun f2(){
        val x = 10
        val y = 20

        if(x <= 100){
            lblFuncao2.setText("x")
        }
        else{
            lblFuncao2.setText("y")
        }
    }

    fun f3(){
        val x = 600
        val y = 100

        if(x <= 100){
            lblFuncao3.setText("x")
        }
        else if(y >= 200){
            lblFuncao3.setText("y")
        }
        else{
            lblFuncao3.setText("Nenhum")
        }
    }

    fun f4(){
        var x = 0
        var y = 0

        while (x < 10){
            x += 1
            y += 1
        }

        lblFuncao4.setText("y: " +  y)
    }
}