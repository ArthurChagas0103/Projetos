package com.example.retrofit

import com.google.gson.annotations.SerializedName

class CEPModel {
    @SerializedName("cep")
    var Cep : String = ""
    @SerializedName("logradouro")
    var Logradouro : String = ""
    @SerializedName("complemento")
    var Complemento : String = ""
    @SerializedName("bairro")
    var Bairro : String = ""
    @SerializedName("localidade")
    var Localidade : String = ""
    @SerializedName("uf")
    var Uf : String = ""
    @SerializedName("ibge")
    var Ibge : String = ""
    @SerializedName("ddd")
    var Ddd : String = ""
}