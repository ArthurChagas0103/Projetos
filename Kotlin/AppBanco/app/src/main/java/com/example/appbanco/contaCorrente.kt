package com.example.appbanco

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "ContaC")
class contaCorrente(
    @PrimaryKey(autoGenerate = true)
    val uid : Int?,
    @ColumnInfo(name = "Nome")
    val nome : String?,
    val cpf : String?,
    val email : String?,
    val senha : String?
)