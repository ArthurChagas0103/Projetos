from translate import Translator

texto = input("Digite o texto para tradução: ")

s = Translator(from_lang="english", to_lang="pt-br")

res = s.translate(texto)

print(res)