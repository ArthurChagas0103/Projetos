package com.example.revisao3etapa

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query
@Dao
interface DAOLogin {

    @Insert
    fun inserir(cad : cadastroLogin)

    @Query("SELECT * FROM CadastroLogin WHERE login=(:clogin) and senha=(:senhacc)")
    fun Logar(clogin: String?, senhacc: String?): cadastroLogin?
}