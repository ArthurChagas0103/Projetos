package com.example.jsonaula

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.TextView
import org.json.JSONArray
import org.json.JSONObject

class MainActivity : AppCompatActivity() {
    lateinit var dadosAlunos : TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        dadosAlunos = findViewById(R.id.txtDadosAlunos)

        val jsonData = applicationContext.resources.openRawResource(
                applicationContext.resources.getIdentifier(
                    "json", "raw", applicationContext.packageName
                )
        )
            .bufferedReader().use { it.readText() }
        val outputJsonString = JSONObject(jsonData)
        Log.d("TAG_DATA", "" + outputJsonString)

        val posts = outputJsonString.getJSONArray("dadosAlunos") as JSONArray

        for (i in 0 until posts.length()) {
            val nomej = posts.getJSONObject(i).get("nome")
            val disciplinaj = posts.getJSONObject(i).get("disciplina")
            val turmaj = posts.getJSONObject(i).get("turma")

            var dados = "\nDisciplina->$disciplinaj\nNome->$nomej\nTurma->$turmaj\n"
            var ver = dadosAlunos.text
            dadosAlunos.text = ver.toString()+dados
        }
    }
}