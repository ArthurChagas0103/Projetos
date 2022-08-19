import phonenumbers
from phonenumbers import geocoder, carrier

numero = input("Digite o número de telefone(+5531989574910): ")

phoneNumer = phonenumbers.parse(numero)

Carrier = carrier.name_for_number(phoneNumer, 'pt-br')

Region = geocoder.description_for_number(phoneNumer, 'pt-br')

print('A operadora é: ' + Carrier)
print("O estado é: " + Region)