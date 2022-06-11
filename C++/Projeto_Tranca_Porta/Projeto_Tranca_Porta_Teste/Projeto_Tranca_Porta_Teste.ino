int botaoLigar = 7;
int botaoDesligar = 8;
int led = 13;

 
void setup()
{
  pinMode(botaoLigar, INPUT_PULLUP);
  pinMode(botaoDesligar, INPUT_PULLUP);
  pinMode(led, OUTPUT);
}
 
void loop()
{
  if(digitalRead(botaoLigar) == LOW) // Se o botão for pressionado
  {
    digitalWrite(led, HIGH);  
    delay(100);  
  }    
  else{
  
    if(digitalRead(botaoDesligar) == LOW) // Se o botão for pressionado
  {
    digitalWrite(led, LOW);
    delay(100);  
  }    
  
  }
}
