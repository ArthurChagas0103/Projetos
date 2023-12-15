package com.example.menu

import android.content.DialogInterface
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import android.widget.Toast
import androidx.appcompat.app.AlertDialog

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.menu_principal, menu)
        return super.onCreateOptionsMenu(menu)
    }

    fun exemplo_simples() {
        //Cria o gerador do AlertDialog
        var builder: AlertDialog.Builder = AlertDialog.Builder(this)

        //Define o título
        builder.setTitle("Titulo")

        //Define a mensagem
        builder.setMessage("Teste de Clique de Menu")

        //Define um botão como positivo
        builder.setPositiveButton("Positivo",
            DialogInterface.OnClickListener { arg0, arg1 ->
                var tela = Intent(this, MainActivity2::class.java)
                startActivity(tela)
            })

        //Define um botão como positivo
        builder.setNegativeButton("Negativo",
            DialogInterface.OnClickListener { arg0, arg1 ->
                var tela = Intent(this, MainActivity3::class.java)
                startActivity(tela)
            })

        var alerta: AlertDialog? = null

        //Cria o AlertDialog
        alerta = builder.create()

        //Exibe
        alerta?.show()
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        return when (item.itemId) {
            R.id.itemAdicionar -> {
                println("ADICIONAR")
                Toast.makeText(this, "Menu ADICIONAR clicado", Toast.LENGTH_SHORT).show()
                exemplo_simples()
                true
            }
            R.id.itemAlterar -> {
                println("ALTERAR")
                Toast.makeText(this, "Menu ALTERAR clicado", Toast.LENGTH_SHORT).show()
                exemplo_simples()
                true
            }
            R.id.itemDeletar -> {
                println("DELETAR")
                Toast.makeText(this, "Menu DELETAR clicado", Toast.LENGTH_SHORT).show()
                exemplo_simples()
                true
            }
            else -> {
                super.onOptionsItemSelected(item)
            }
        }
    }
}