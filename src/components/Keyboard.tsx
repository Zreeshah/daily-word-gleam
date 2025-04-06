
interface KeyboardProps {
  onKeyPress: (key: string) => void;
  guesses: string[];
  targetWord: string;
}

export const Keyboard = ({ onKeyPress, guesses, targetWord }: KeyboardProps) => {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"]
  ];

  // Track which keys have been used and their status
  const keyStatus: Record<string, string> = {};
  
  // Process all guesses to determine key statuses
  guesses.forEach(guess => {
    guess.split("").forEach((letter, index) => {
      // If letter is in correct position
      if (letter === targetWord[index]) {
        keyStatus[letter] = "correct";
      } 
      // If letter is in word but not correct position and not already marked correct
      else if (targetWord.includes(letter) && keyStatus[letter] !== "correct") {
        keyStatus[letter] = "present";
      } 
      // If letter not in word and not already marked
      else if (!keyStatus[letter]) {
        keyStatus[letter] = "absent";
      }
    });
  });

  // Handle keyboard interaction
  const handleKeyClick = (key: string) => {
    onKeyPress(key);
  };

  // Handle physical keyboard events
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const key = e.key.toUpperCase();
    
    if (key === "ENTER" || key === "BACKSPACE" || /^[A-Z]$/.test(key)) {
      onKeyPress(key);
    }
  };

  return (
    <div 
      className="w-full max-w-md mx-auto" 
      onKeyDown={handleKeyDown} 
      tabIndex={0}
      aria-label="Virtual keyboard"
    >
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center mb-2 gap-1">
          {row.map((key) => {
            let buttonWidth = "w-8";
            if (key === "ENTER") buttonWidth = "w-16";
            if (key === "BACKSPACE") buttonWidth = "w-16";
            
            let buttonBg = "bg-gray-200 hover:bg-gray-300";
            if (keyStatus[key] === "correct") {
              buttonBg = "bg-green-500 text-white";
            } else if (keyStatus[key] === "present") {
              buttonBg = "bg-yellow-500 text-white";
            } else if (keyStatus[key] === "absent") {
              buttonBg = "bg-gray-500 text-white";
            }
            
            return (
              <button
                key={key}
                onClick={() => handleKeyClick(key)}
                className={`
                  ${buttonWidth} h-12 flex items-center justify-center rounded
                  font-medium text-sm ${buttonBg} transition-colors
                `}
                aria-label={key === "BACKSPACE" ? "Backspace" : key}
              >
                {key === "BACKSPACE" ? "⌫" : key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};
