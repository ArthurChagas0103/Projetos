from asyncio import subprocess


import subprocess

informacoes = subprocess.check_output(["netsh", "wlan", "show", "profiles"], encoding='cp860')
print(informacoes)

wifi = input("Digite o nome do wifi: ")

nome_wifi = wifi

informacoes = subprocess.check_output(["netsh", "wlan", "show", "profiles", nome_wifi, "key", "=", "clear"], encoding='cp860')

for linha in informacoes.split('\n'):
    if "Conteúdo da Chave" in linha:
        pos = linha.find(":")
        senha = linha[pos+2:]
        print("A senha é: " + senha)
