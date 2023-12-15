package com.example.retrofit

import retrofit2.Call
import retrofit2.http.GET
import retrofit2.http.Path

interface EndPoint {
    @GET("/ws/{cep}/json/")
    fun get(@Path("cep") cep : String): Call<CEPModel>
}