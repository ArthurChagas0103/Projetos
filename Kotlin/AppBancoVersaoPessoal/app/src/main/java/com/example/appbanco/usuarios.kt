package com.example.appbanco

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "Usuarios")
class usuarios (
    @PrimaryKey(autoGenerate = true)
    val uid : Int?,
    @ColumnInfo(name = "Nome")
    val nome : String?,
    val senha : String?
)