import React, { useState } from 'react';
import styles from "../../assets/styles/Home.module.css"

const choices = ['Pedra', 'Papel', 'Tesoura'];

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (user, computer) => {
    if (user === computer) return 'Empate';
    if (
      (user === 'Pedra' && computer === 'Tesoura') ||
      (user === 'Papel' && computer === 'Pedra') ||
      (user === 'Tesoura' && computer === 'Papel')
    ) {
      return 'Você ganhou!';
    }
    return 'Computador ganhou!';
  };

  const handleChoiceClick = (choice) => {
    const computerChoice = getRandomChoice();
    const winner = determineWinner(choice, computerChoice);
    setUserChoice(choice);
    setComputerChoice(computerChoice);
    setResult(winner);
  };

  return (
    <div className={styles.container}>
      <h1>Rock, Paper, Scissors</h1>
      <div className={styles.choices}>
        {choices.map((choice) => (
          <button
            key={choice}
            className={styles.choiceButton}
            onClick={() => handleChoiceClick(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
      {userChoice && computerChoice && (
        <div className={styles.result}>
          Você escolheu {userChoice}, o computador escolheu {computerChoice}. <br />
          Resultado: {result}
        </div>
      )}
    </div>
  );
};

export default App;