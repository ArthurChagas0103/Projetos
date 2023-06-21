package com.example.listaprogramacao

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class MainActivity : AppCompatActivity() {

    private lateinit var meuReciclador: RecyclerView
    private lateinit var meuArray : ArrayList<Languages>
    lateinit var imagId : Array<Int>
    lateinit var texto : Array<String>

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        imagId = arrayOf(R.drawable.c, R.drawable.assembly, R.drawable.clojure, R.drawable.csharp, R.drawable.java, R.drawable.javascript, R.drawable.julia, R.drawable.kotlin, R.drawable.visual, R.drawable.php, R.drawable.lua, R.drawable.pascal, R.drawable.r, R.drawable.python, R.drawable.node, R.drawable.typescript, R.drawable.swift, R.drawable.react, R.drawable.scala, R.drawable.egua)
        texto = arrayOf("C", "Assembly", "Clojure", "C#", "Java", "Javascript", "Julia", "Kotlin", "Visual Basic", "PHP", "Lua", "Pascal", "R", "Python", "Node", "Typescript", "Swift", "React", "Scala", "Egua")

        meuReciclador = findViewById(R.id.reciclador)
        meuReciclador.layoutManager = LinearLayoutManager(this)
        meuReciclador.setHasFixedSize(true)

        meuArray = arrayListOf<Languages>()

        getDataLinguagens()
    }

    private fun getDataLinguagens() {
        for(i in imagId.indices){
            val news = Languages(imagId[i], texto[i])
            meuArray.add(news)
        }

        meuReciclador.adapter = Adaptador(meuArray)
    }
}