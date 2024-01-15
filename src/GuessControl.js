import React, { useState } from "react";
import Button from "./Button";

function GuessControl({ onGuess }) {
  // Create a new state variable currentGuess with setter setCurrentGuess
  // and default value of an empty string.
  const [currentGuess, setCurrentGuess] = useState("");

  // Create a handleInputChange function within the component
  // that updates the currentGuess state value when the user changes the value in the input.
  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  // Create an onSubmitGuess function that calls the onGuess prop
  // with the currentGuess value converted to a number
  // and also resets the currentGuess to an empty string when it is called.
  const onSubmitGuess = () => {
    // Since the values from an HTML input are strings by default,
    // convert to a number for the returned guess value
    // by passing in the string to the Number function.
    onGuess(Number(currentGuess));
    setCurrentGuess("");
  };

  // Return the JSX structure
  return (
    <div>
      <input type="number" value={currentGuess} onChange={handleInputChange} />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}

export default GuessControl;
