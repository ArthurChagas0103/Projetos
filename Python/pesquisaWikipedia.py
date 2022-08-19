from contextlib import nullcontext
from distutils.log import error
import wikipedia

materia = input("Digite o tema que gostaria de pesquisar: ")

result = wikipedia.summary(materia)

print(result)