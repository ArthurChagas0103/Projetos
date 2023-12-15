package com.example.appbanco

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.Query

@Dao
interface DAOContaCorrente {
    @Insert
    fun inserir(contaCorrente: contaCorrente)
    @Delete
    fun deletar(contaCorrente: contaCorrente)

    @Query("SELECT * FROM IDED")
    fun buscaTodos(): List<contaCorrente>

    @Query("SELECT * FROM IDED WHERE nome=(:nomecc) and desenvolvedor=(:desenvolvedorcc)")
    fun Logar(nomecc: String?, desenvolvedorcc: String?): contaCorrente
}