package com.example.aularecycleview

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class MainActivity : AppCompatActivity() {

    val data = arrayOf<String>("four", "One", "One", "One", "One")
    private  lateinit var recyclerView: RecyclerView
    private lateinit var manager: RecyclerView.LayoutManager
    private lateinit var myAdapter: RecyclerView.Adapter<*>

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        manager = LinearLayoutManager(this)

        myAdapter = ItemAdapter(data)

        //recyclerView = findViewById<RecyclerView>(R.id.reci)
    }
}