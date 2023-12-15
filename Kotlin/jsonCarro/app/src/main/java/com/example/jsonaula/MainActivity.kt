package com.example.jsonaula

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.TextView
import org.json.JSONArray
import org.json.JSONObject

class MainActivity : AppCompatActivity() {
    lateinit var dadosCarros : TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        dadosCarros = findViewById(R.id.txtDadosCarros)

        val jsonData = applicationContext.resources.openRawResource(
                applicationContext.resources.getIdentifier(
                    "json", "raw", applicationContext.packageName
                )
        )
            .bufferedReader().use { it.readText() }
        val outputJsonString = JSONObject(jsonData)
        Log.d("TAG_DATA", "" + outputJsonString)

        val posts = outputJsonString.getJSONArray("dadosCarros") as JSONArray

        for (i in 0 until posts.length()) {
            val nomej = posts.getJSONObject(i).get("nome")
            val marcaj = posts.getJSONObject(i).get("disciplina")
            val placaj = posts.getJSONObject(i).get("placa")
            val cambioj = posts.getJSONObject(i).get("cambio")

            var dados = "\nNome->$nomej\nMarca->$marcaj\nPlaca->$placaj\nCambio->$cambioj\n"
            var ver = dadosCarros.text
            dadosCarros.text = ver.toString()+dados
        }
    }
}