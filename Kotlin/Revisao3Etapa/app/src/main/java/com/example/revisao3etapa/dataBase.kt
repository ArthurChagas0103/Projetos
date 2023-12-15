package com.example.revisao3etapa

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase

@Database(entities = [cadastroLogin::class], version = 1, exportSchema = false)
abstract class dataBase : RoomDatabase(){
    abstract fun getMeuMetodoDao() : DAOLogin
    companion object{
        var INSTANCE : dataBase? = null
        fun getInstance(context: Context): dataBase
        {
            if (INSTANCE == null) {
                INSTANCE =  Room.databaseBuilder(
                    context.applicationContext,
                    dataBase::class.java,
                    "dadosLogin.db").build()
            }
            return INSTANCE !!
        }
    }
}