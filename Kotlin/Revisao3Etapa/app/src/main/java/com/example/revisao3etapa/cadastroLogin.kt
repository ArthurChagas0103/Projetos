package com.example.revisao3etapa

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "CadastroLogin")
class cadastroLogin(
    @PrimaryKey(autoGenerate = true)
    val uid: Int?,
    val login: String?,
    val senha: String?
)