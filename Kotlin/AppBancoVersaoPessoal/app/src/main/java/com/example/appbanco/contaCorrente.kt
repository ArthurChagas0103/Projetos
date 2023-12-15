package com.example.appbanco

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "IDED")
class contaCorrente(
    @PrimaryKey(autoGenerate = true)
    val uid : Int?,
    @ColumnInfo(name = "Nome")
    val nome : String?,
    val dataCriacao : String?,
    val desenvolvedor : String?,
    val escritoEm : String?
)