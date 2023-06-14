package com.example.aularecycleview

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class Adaptador(var arrayCarros: ArrayList<Carros>) : RecyclerView.Adapter<Adaptador.MyViewHolder>() {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyViewHolder {
        val itemView = LayoutInflater.from(parent.context).inflate(R.layout.cartao,parent,false)
        return MyViewHolder(itemView)
    }

    override fun onBindViewHolder(holder: MyViewHolder, position: Int) {
        val itemCorrente = arrayCarros[position]
        holder.fotoCar.setImageResource(itemCorrente.idFoto)
        holder.texto.text = itemCorrente.nome
    }

    override fun getItemCount(): Int {
        return arrayCarros.size
    }

    class MyViewHolder(var view: View) : RecyclerView.ViewHolder(view){
        val fotoCar : ImageView = view.findViewById(R.id.imageView)
        val texto : TextView = view.findViewById(R.id.txtNome)
    }
}