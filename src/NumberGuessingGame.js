import React, { useState } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

/**
 * Returns a random integer number from 1-100 inclusive
 */
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const MAX_ATTEMPTS = 5;

function NumberGuessingGame() {
  // Create 3 state variables and their setters
  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber());
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);

  // Create a handleGuess function
  const handleGuess = (guess) => {
    setLatestGuess(Number(guess));
    setNumberOfGuesses((prevGuesses) => prevGuesses + 1);
  };

  // Create a handleReset function
  const handleReset = () => {
    setNumberToGuess(getRandomNumber());
    setNumberOfGuesses(0);
    setLatestGuess(null);
  };

  // Check if the guess is correct or if the maximum attempts are reached
  const isCorrectGuess = latestGuess === numberToGuess;
  const isGameOver = isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

  // Return the JSX structure
  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      {/* Pass handleGuess as the onGuess prop */}
      <GuessControl onGuess={handleGuess} />
      {isGameOver && <GameOver hasWon={isCorrectGuess} onReset={handleReset} />}
      {!isGameOver && (
        <GuessMessage
          guess={latestGuess}
          numberToGuess={numberToGuess}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </div>
  );
}

export default NumberGuessingGame;
