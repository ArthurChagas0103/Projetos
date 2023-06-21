package com.example.aularecycleview

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import androidx.recyclerview.widget.RecyclerView.Adapter

class MainActivity : AppCompatActivity() {

    private lateinit var recyclerView: RecyclerView
    private lateinit var manager: ArrayList<Carros>
    val data = arrayOf("One", "Two", "Three", "Four")
    lateinit var imgId: Array<Int>
    lateinit var texto: Array<String>

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        imgId = arrayOf(R.drawable.a, R.drawable.b, R.drawable.c, R.drawable.d, R.drawable.e, R.drawable.f, R.drawable.g, R.drawable.h)
        texto = arrayOf("Guido", "Fillmore", "Lightning McQueen", "Ramone", "Sally Carrera", "Mater", "Chick Hicks", "Flo")

        recyclerView = findViewById(R.id.reciclador)
        recyclerView.layoutManager = LinearLayoutManager(this)
        recyclerView.setHasFixedSize(true)

        manager = arrayListOf<Carros>()

        getDataCarros()
    }

    private fun getDataCarros(){
        for(i in imgId.indices){
            val news = Carros(imgId[i], texto[i])
            manager.add(news)
        }

        recyclerView.adapter = Adaptador(manager)
    }
}