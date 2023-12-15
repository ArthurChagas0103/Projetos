package com.example.retrofit

import retrofit2.Call
import retrofit2.http.GET
import retrofit2.http.Part

interface EndPoint {
    @GET("/ws/{cep}/json/")
    fun get(@Part("cep") cep : String): Call<CEPModel>
}