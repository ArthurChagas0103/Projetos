package com.example.revisao3etapa

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import com.example.retrofit.CEPModel
import com.example.retrofit.EndPoint
import com.example.retrofit.RetrofitUtils
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class cep : AppCompatActivity() {
    lateinit var cep : EditText
    lateinit var endereco : TextView
    lateinit var consultar : Button
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cep)
        cep = findViewById(R.id.EDTcepBuscar)
        consultar = findViewById(R.id.btnBuscar)
        consultar.setOnClickListener {
            val cep = cep.text.toString()
            if (cep.isNullOrEmpty()){
                Toast.makeText(this,"Digite o CEP para fazer a CONSULTA",Toast.LENGTH_LONG).show()
            }else{
                buscarEndereco(cep)
            }
        }
    }
    fun buscarEndereco(cep:String){
        val retrofitClient = RetrofitUtils.getRetrofitInstance("https://viacep.com.br/")
        val endpoint = retrofitClient.create(EndPoint::class.java)
        endpoint.get(cep).enqueue(object : Callback<CEPModel> {
            override fun onFailure(call: Call<CEPModel>, t: Throwable) {
                Toast.makeText(baseContext,t.message,Toast.LENGTH_LONG).show()
            }
            override fun onResponse(call: Call<CEPModel>, response: Response<CEPModel>) {
                var  endereco = findViewById<TextView>(R.id.txtCEP)
                val cepModel = response.body()
                if (cepModel != null) {
                    endereco?.text = "Logradouro: ${cepModel?.Logradouro}\n" +
                            "Bairro: ${cepModel?.Bairro}\n" +
                            "Cidade: ${cepModel?.Localidade}\n " +
                            "Uf: ${cepModel?.Uf}"
                } else {
                    Toast.makeText(baseContext, "Nao foi possivel encontrar ", Toast.LENGTH_LONG).show()
                }
            }
        })
    }
}