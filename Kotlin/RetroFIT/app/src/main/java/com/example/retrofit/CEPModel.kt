package com.example.retrofit

import com.google.gson.annotations.SerializedName

class CEPModel {
    @SerializedName("Cep")
    var cep : String = ""
    @SerializedName("Logradouro")
    var logradouro : String = ""
    @SerializedName("Complemento")
    var complemento : String = ""
    @SerializedName("Bairro")
    var bairro : String = ""
    @SerializedName("Localidade")
    var localidade : String = ""
    @SerializedName("Uf")
    var uf : String = ""
    @SerializedName("Ibge")
    var ibge : String = ""
    @SerializedName("DDD")
    var ddd : String = ""
}