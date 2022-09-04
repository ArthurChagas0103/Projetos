import pywhatkit as kit

text = input("Digite o texto que gostaria de transformar em cursivo: ")

kit.text_to_handwriting(text, save_to='texto_cursivo.png')