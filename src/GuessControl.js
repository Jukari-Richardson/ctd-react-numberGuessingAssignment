import React, { useState } from "react";
import React, { useState } from "react";
import Button from "./Button";

function GuessControl({ onGuess }) {
  // State for the user's guess
  const [currentGuess, setCurrentGuess] = useState("");

  // Updates the state with the user's input
  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  // Submits the guess to the parent component
  const onSubmitGuess = () => {
    // Convert the currentGuess to a number
    const guess = Number(currentGuess);

    // Invoke the onGuess prop with the guess
    onGuess(guess);

    // Reset the currentGuess to an empty string
    setCurrentGuess("");
  };

  return (
    <div>
      {/* Input for the user's guess */}
      <input type="number" value={currentGuess} onChange={handleInputChange} />

      {/* Button to submit the guess */}
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}

export default GuessControl;
