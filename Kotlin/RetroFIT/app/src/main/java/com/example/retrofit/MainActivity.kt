package com.example.retrofit

import android.annotation.SuppressLint
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import retrofit2.Call
import retrofit2.Response
import javax.security.auth.callback.Callback

class MainActivity : AppCompatActivity() {
    @SuppressLint("MissingInflatedId")

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val etCEP = findViewById<EditText>(R.id.edtCep)
        val btConsultar = findViewById<Button>(R.id.btnConsultar)

        btConsultar?.setOnClickListener{
            val cep = etCEP.text.toString()

            if()
        }
    }

    fun buscarEndereco(cep: String) {
        val retrofitClient = RetrofitUtils.getRetrofitInstance("https://viacep.com.br/")

        val endpoint = retrofitClient.create(EndPoint::class.java)

        endpoint.get(cep).enqueue(object : retrofit2.Callback<CEPModel> {
            override fun onFailure(call: Call<CEPModel>, t: Throwable) {
                Toast.makeText(baseContext, t.message, Toast.LENGTH_LONG).show()
            }

            override fun onResponse(call: Call<CEPModel>, response: Response<CEPModel>) {
                val tvResultado = findViewById<TextView>(R.id.tvResultado)
                val cepModel = response.body()

                if (cepModel != null) {
                    tvResultado?.text = "Logradouro: ${cepModel?.logradouro} \n" +
                            "Bairro: ${cepModel?.bairro} \n" +
                            "Cidade: ${cepModel?.localidade} \n" +
                            "UF: ${cepModel?.uf} \n"
                } else {
                    Toast.makeText(
                        baseContext,
                        "Não foi encontrado um endereço para esse CEP",
                        Toast.LENGTH_SHORT
                    ).show()
                }
            }
        })
    }
}