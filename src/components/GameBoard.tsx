
interface GameBoardProps {
  currentGuess: string;
  guesses: string[];
  targetWord: string;
  maxGuesses: number;
}

export const GameBoard = ({ currentGuess, guesses, targetWord, maxGuesses }: GameBoardProps) => {
  const wordLength = targetWord.length;
  
  const getLetterStatus = (letter: string, index: number, word: string) => {
    if (letter === targetWord[index]) {
      return "correct"; // Letter is correct and in right position
    } else if (targetWord.includes(letter)) {
      return "present"; // Letter is in the word but wrong position
    } else {
      return "absent"; // Letter not in word
    }
  };

  // Create array of empty rows to fill the board
  const rows = Array(maxGuesses).fill("");

  return (
    <div className="grid grid-rows-6 gap-2 w-full max-w-sm mx-auto" aria-label="Game board">
      {rows.map((_, rowIndex) => (
        <div 
          key={rowIndex} 
          className={`grid gap-2`}
          style={{
            gridTemplateColumns: `repeat(${wordLength}, minmax(0, 1fr))`
          }}
        >
          {Array(wordLength).fill("").map((_, colIndex) => {
            // Determine the letter to display (from completed guesses or current guess)
            let letter = "";
            let status = "";
            
            if (rowIndex < guesses.length) {
              // This row is a completed guess
              letter = guesses[rowIndex][colIndex] || "";
              status = getLetterStatus(letter, colIndex, guesses[rowIndex]);
            } else if (rowIndex === guesses.length) {
              // This row is the current guess
              letter = currentGuess[colIndex] || "";
              status = "tbd"; // To be determined
            }
            
            return (
              <div 
                key={colIndex}
                className={`
                  flex items-center justify-center
                  w-full aspect-square text-xl font-bold rounded
                  border-2 transition-all duration-300
                  ${letter ? "border-gray-400" : "border-gray-300"}
                  ${status === "correct" ? "bg-green-500 text-white border-green-500" : 
                    status === "present" ? "bg-yellow-500 text-white border-yellow-500" : 
                    status === "absent" ? "bg-gray-500 text-white border-gray-500" : 
                    "bg-white text-gray-800"}
                `}
              >
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
