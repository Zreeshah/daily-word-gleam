
import { useState, useEffect } from "react";
import { Keyboard } from "@/components/Keyboard";
import { GameBoard } from "@/components/GameBoard";
import { GameHeader } from "@/components/GameHeader";
import { HowToPlay } from "@/components/HowToPlay";
import { useToast } from "@/hooks/use-toast";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [targetWord, setTargetWord] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  const MAX_WORD_LENGTH = 5;
  const MAX_GUESSES = 6;

  // Generate daily word based on date
  useEffect(() => {
    // List of 5-letter words
    const wordList = [
      "AUDIO", "BLAZE", "CRATE", "DRIVE", "EVENT", "FROST", "GLOOM", "HOUND", 
      "IMAGE", "JUMBO", "KNOTS", "LEMON", "MANGO", "NOBLE", "OCEAN", "PIANO", 
      "QUICK", "RURAL", "SWEET", "TRUCK", "UNITE", "VOICE", "WATCH", "XENON", 
      "YOUTH", "ZEBRA", "APPLE", "BEACH", "CLOCK", "DRAMA", "EAGLE", "FLUTE", 
      "GLORY", "HOUSE", "IGLOO", "JEWEL", "KNIFE", "LIGHT", "MOUSE", "NIGHT"
    ];

    // Use current date as seed to pick a word
    const today = new Date();
    const dateString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
    
    // Fix: Explicitly convert Date objects to timestamps before arithmetic
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((today.getTime() - startOfYear.getTime()) / 86400000);
    
    const wordIndex = dayOfYear % wordList.length;
    
    setTargetWord(wordList[wordIndex]);
    setIsLoading(false);
  }, []);

  const handleKeyPress = (key: string) => {
    // If game is over, do nothing
    if (gameWon || gameLost) return;
    
    if (key === "ENTER") {
      // Submit guess
      if (currentGuess.length === MAX_WORD_LENGTH) {
        if (guesses.length < MAX_GUESSES) {
          // Add current guess to guesses array
          const newGuesses = [...guesses, currentGuess];
          setGuesses(newGuesses);
          setCurrentGuess("");
          
          // Check if game won
          if (currentGuess === targetWord) {
            setGameWon(true);
            toast({
              title: "Congratulations!",
              description: "You solved today's Daily Word Gleam!",
            });
          } 
          // Check if game lost (last guess used)
          else if (newGuesses.length === MAX_GUESSES) {
            setGameLost(true);
            toast({
              title: "Game Over",
              description: `The word was ${targetWord}. Try again tomorrow!`,
              variant: "destructive",
            });
          }
        }
      } else {
        toast({
          title: "Word too short",
          description: "Please enter a 5-letter word",
          variant: "destructive",
        });
      }
    } else if (key === "BACKSPACE") {
      // Remove last character from current guess
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (/^[A-Z]$/.test(key)) {
      // Add letter to current guess if not at max length
      if (currentGuess.length < MAX_WORD_LENGTH) {
        setCurrentGuess(prev => prev + key);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <GameHeader />
      
      <main className="flex-1 container max-w-md mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-8">
          {isLoading ? (
            <div className="text-center">
              <p className="text-lg font-medium text-gray-700">Loading today's word...</p>
            </div>
          ) : (
            <>
              <GameBoard 
                currentGuess={currentGuess}
                guesses={guesses}
                targetWord={targetWord}
                maxGuesses={MAX_GUESSES}
              />
              
              <Keyboard 
                onKeyPress={handleKeyPress} 
                guesses={guesses}
                targetWord={targetWord}
              />
              
              {(gameWon || gameLost) && (
                <div className="mt-6 p-4 bg-white rounded-lg shadow-md text-center">
                  <h2 className="text-xl font-bold mb-2">
                    {gameWon ? "You won!" : "Better luck tomorrow!"}
                  </h2>
                  <p className="text-lg">
                    {gameWon 
                      ? `You solved it in ${guesses.length} ${guesses.length === 1 ? 'guess' : 'guesses'}!` 
                      : `The word was ${targetWord}`}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    A new word will be available tomorrow!
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      
      <HowToPlay />
      <Footer />
    </div>
  );
};

export default Index;
