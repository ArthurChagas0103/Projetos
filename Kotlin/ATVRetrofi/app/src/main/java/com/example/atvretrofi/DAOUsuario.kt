package com.example.atvretrofi

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.Query

@Dao
interface DAOUsuario {
    @Insert
    fun inserir(usuarios: usuarios)
    @Delete
    fun deletar(usuarios: usuarios)

    @Query("SELECT * FROM usuarios")
    fun buscaTodos(): List<usuarios>

    @Query("SELECT * FROM usuarios WHERE nome=(:nomecc) and senha=(:senhacc)")
    fun Logar(nomecc: String?, senhacc: String?): usuarios
}