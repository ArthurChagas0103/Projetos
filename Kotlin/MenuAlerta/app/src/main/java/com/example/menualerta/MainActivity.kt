package com.example.menualerta

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

    fun chamaAlertaAdd() {
        val builder: AlertDialog.Builder = AlertDialog.Builder(this)

        builder.setTitle("Caixa de Opcoes")
        builder.setMessage("Escolha uma das opcoes")
        builder.setPositiveButton("SIM", DialogInterface.OnClickListener { dialogInterface, i ->
            //Toast.makeText(this, "Clicou em NAO", Toast.LENGTH_LONG).show()

            var tela2 = Intent(this,MainActivity2::class.java)
            startActivity(tela2)
        })
        builder.setNegativeButton("NAO", DialogInterface.OnClickListener { dialogInterface, i ->
            Toast.makeText(this, "Clicou em NAO", Toast.LENGTH_LONG).show()
        })

        var caixa: AlertDialog? = null

        caixa = builder.create()
        caixa?.show()
    }

    fun chamaAlertaUpdate() {
        val builder: AlertDialog.Builder = AlertDialog.Builder(this)

        builder.setTitle("Caixa de Opcoes")
        builder.setMessage("Escolha uma das opcoes")
        builder.setPositiveButton("COM CERTEZA SIM", DialogInterface.OnClickListener { dialogInterface, i ->
            //Toast.makeText(this, "Clicou em COM CERTEZA SIM", Toast.LENGTH_LONG).show()

            var tela3 = Intent(this,MainActivity3::class.java)
            startActivity(tela3)
        })
        builder.setNegativeButton("COM CERTEZA NAO", DialogInterface.OnClickListener { dialogInterface, i ->
            Toast.makeText(this, "Clicou em COM CERTEZA NAO", Toast.LENGTH_LONG).show()
        })

        var caixa: AlertDialog? = null

        caixa = builder.create()
        caixa?.show()
    }

    fun chamaAlertaDelete() {
        val builder: AlertDialog.Builder = AlertDialog.Builder(this)

        builder.setTitle("Caixa de Opcoes")
        builder.setMessage("Escolha uma das opcoes")
        builder.setPositiveButton("ABSOLUTAMENTE SIM", DialogInterface.OnClickListener { dialogInterface, i ->
            //Toast.makeText(this, "Clicou em ABSOLUTAMENTE SIM", Toast.LENGTH_LONG).show()

            var tela4 = Intent(this,MainActivity4::class.java)
            startActivity(tela4)
        })
        builder.setNegativeButton("ABSOLUTAMENTE NAO", DialogInterface.OnClickListener { dialogInterface, i ->
            Toast.makeText(this, "Clicou em ABSOLUTAMENTE NAO", Toast.LENGTH_LONG).show()
        })

        var caixa: AlertDialog? = null

        caixa = builder.create()
        caixa?.show()
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        return when(item.itemId) {
            R.id.itemAdd -> {
                println("Adicionar")
                //Toast.makeText(this, "Menu ADICIONAR clicado", Toast.LENGTH_SHORT).show()
                chamaAlertaAdd()
                true
            }

            R.id.itemUp -> {
                println("Alterar")
                //Toast.makeText(this, "Menu ALTERAR clicado", Toast.LENGTH_SHORT).show()
                chamaAlertaUpdate()
                true
            }

            R.id.itemDel -> {
                println("Excluir")
                //Toast.makeText(this, "Menu EXCLUIR clicado", Toast.LENGTH_SHORT).show()
                chamaAlertaDelete()
                true
            }

            else -> {
                super.onOptionsItemSelected(item)
            }
        }
    }
}