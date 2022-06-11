#include <IRremote.h> //INCLUSÃO DE BIBLIOTECA
 
int receptorPin = 2; //PINO DIGITAL UTILIZADO PELO FOTORRECEPTOR 

int trancaPin = 10;//Define ledPin no pino digital 10

long int codTecla1 = 16597183; //CÓDIGO DA TECLA 1 

long int codTecla2 = 16629823; //CÓDIGO DA TECLA 2 

IRrecv irrecv(receptorPin); //PASSA O PARÂMETRO PARA A FUNÇÃO irrecv
 
decode_results results; //VARIÁVEL QUE ARMAZENA OS RESULTADOS (SINAL IR RECEBIDO)


void setup(){
  Serial.begin(9600); //INICIALIZA A SERIAL
  irrecv.enableIRIn(); //INICIALIZA A RECEPÇÃO DE SINAIS IR
  pinMode(trancaPin , OUTPUT);//Define trancaPin (pino 10) como saída
  pinMode(receptorPin , INPUT);//Define RECV_PIN (pino 2) como entrada
}
 
void loop(){
  if (irrecv.decode(&results)) {//CAPTURA O SINAL IR
    
    if((results.value == codTecla1)){ 
        digitalWrite(trancaPin, HIGH); 
      }else{
          if((results.value == codTecla2)){ 
              digitalWrite(trancaPin, LOW); 
      }
    }
    irrecv.resume(); //AGUARDA O RECEBIMENTO DE UM NOVO SINAL IR
  }
}
