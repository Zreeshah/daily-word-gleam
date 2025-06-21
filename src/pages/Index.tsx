import { useState, useEffect } from "react";
import { Keyboard } from "@/components/Keyboard";
import { GameBoard } from "@/components/GameBoard";
import { GameHeader } from "@/components/GameHeader";
import { GameControls } from "@/components/GameControls";
import { HowToPlay } from "@/components/HowToPlay";
import { MetaTags } from "@/components/MetaTags";
import { useToast } from "@/hooks/use-toast";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [targetWord, setTargetWord] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [wordLength, setWordLength] = useState(5);
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const MAX_GUESSES = 6;

  const wordLists = {
    3: ["CAT", "DOG", "BUG", "HAT", "SUN", "RUN", "MAP", "CUP", "BOX", "PEN"],
    4: ["CATS", "DOGS", "JUMP", "PLAY", "CARD", "MARK", "PURE", "RAIN", "SNOW", "WILD"],
    5: ["AUDIO", "BLAZE", "CRATE", "DRIVE", "EVENT", "FROST", "GLOOM", "HOUND", 
        "IMAGE", "JUMBO", "KNOTS", "LEMON", "MANGO", "NOBLE", "OCEAN", "PIANO", 
        "QUICK", "RURAL", "SWEET", "TRUCK", "UNITE", "VOICE", "WATCH", "XENON", 
        "YOUTH", "ZEBRA", "APPLE", "BEACH", "CLOCK", "DRAMA", "EAGLE", "FLUTE", 
        "GLORY", "HOUSE", "IGLOO", "JEWEL", "KNIFE", "LIGHT", "MOUSE", "NIGHT"],
    6: ["BUTTON", "COFFEE", "DRAWER", "ENGINE", "FLIGHT", "GARDEN", "HEALTH", "ISLAND", 
        "JUNGLE", "KITCHEN", "LAPTOP", "MARKET", "NEBULA", "ORANGE", "PLANET", "QUARTZ"],
    7: ["AWESOME", "BATTERY", "COUNTRY", "DIAMOND", "ELEGANT", "FANTASY", "GRAVITY", 
        "HORIZON", "IMAGINE", "JOURNEY", "KINGDOM", "LIBERTY", "MYSTERY", "NATURAL"],
    8: ["ABSOLUTE", "BUILDING", "CHAMPION", "DINOSAUR", "ELEPHANT", "FUNCTION", "GUARDIAN", 
        "HOSPITAL", "INFINITY", "JUDGMENT", "KEYBOARD", "LANGUAGE", "MATERIAL", "NAVIGATE"]
  };

  useEffect(() => {
    generateNewTargetWord();
  }, [wordLength]);

  const generateNewTargetWord = () => {
    setIsLoading(true);
    
    const currentWordList = wordLists[wordLength as keyof typeof wordLists] || wordLists[5];
    
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    
    const wordIndex = (dayOfYear + wordLength) % currentWordList.length;
    
    setTargetWord(currentWordList[wordIndex]);
    setGuesses([]);
    setCurrentGuess("");
    setGameWon(false);
    setGameLost(false);
    setIsLoading(false);
  };

  const handleWordLengthChange = (newLength: number) => {
    if (guesses.length > 0 && !gameWon && !gameLost) {
      const isConfirmed = window.confirm(t('game.confirmChange'));
      if (!isConfirmed) return;
    }
    
    setWordLength(newLength);
    toast({
      title: t('game.wordLengthUpdated', { length: newLength }),
      description: t('game.newWordGenerated'),
    });
  };

  const handleKeyPress = (key: string) => {
    if (gameWon || gameLost) return;
    
    if (key === "ENTER") {
      if (currentGuess.length === wordLength) {
        if (guesses.length < MAX_GUESSES) {
          const newGuesses = [...guesses, currentGuess];
          setGuesses(newGuesses);
          setCurrentGuess("");
          
          if (currentGuess === targetWord) {
            setGameWon(true);
            toast({
              title: t('game.congratulations'),
              description: t('game.solved'),
            });
          } 
          else if (newGuesses.length === MAX_GUESSES) {
            setGameLost(true);
            toast({
              title: t('game.gameOver'),
              description: t('game.wordWas', { word: targetWord }),
              variant: "destructive",
            });
          }
        }
      } else {
        toast({
          title: t('game.wordTooShort'),
          description: t('game.enterWord', { length: wordLength }),
          variant: "destructive",
        });
      }
    } else if (key === "BACKSPACE") {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (/^[A-Z]$/.test(key)) {
      if (currentGuess.length < wordLength) {
        setCurrentGuess(prev => prev + key);
      }
    }
  };

  const handleReset = () => {
    if (guesses.length > 0 && !gameWon && !gameLost) {
      const isConfirmed = window.confirm(t('game.confirmReset'));
      if (!isConfirmed) return;
    }
    generateNewTargetWord();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <MetaTags />
      <GameHeader />
      
      <main className="flex-1 container max-w-md mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-6" id="game-section">
          {isLoading ? (
            <div className="text-center">
              <p className="text-lg font-medium text-gray-700">{t('game.loading')}</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-2">
                <h2 className="text-xl font-semibold text-gray-800">{t('game.dailyChallenge')}</h2>
                <p className="text-sm text-gray-600">{t('game.newPuzzle')}</p>
              </div>
              
              <GameControls 
                wordLength={wordLength}
                onWordLengthChange={handleWordLengthChange}
                onReset={handleReset}
              />
              
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
                    {gameWon ? t('game.youWon') : t('game.betterLuck')}
                  </h2>
                  <p className="text-lg">
                    {gameWon 
                      ? t('game.solvedIn', { count: guesses.length })
                      : t('game.wordWas', { word: targetWord })}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    {t('game.tryDifferent')}
                  </p>
                  <div className="mt-4 flex gap-3 justify-center">
                    <button 
                      onClick={handleReset}
                      className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
                    >
                      {t('game.playAgain')}
                    </button>
                    <button 
                      onClick={() => handleWordLengthChange(wordLength < 8 ? wordLength + 1 : 3)}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                    >
                      {t('game.try', { length: wordLength < 8 ? wordLength + 1 : 3 })}
                    </button>
                  </div>
                </div>
              )}
              
              <div className="w-full mt-6 p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{t('about.title')}</h2>
                <p className="text-gray-700 mb-3">
                  {t('about.description1')}
                </p>
                <p className="text-gray-700 mb-3">
                  {t('about.description2')}
                </p>
                <p className="text-gray-700 mb-3">
                  {t('about.description3')}
                </p>
                <p className="text-gray-700">
                  {t('about.description4')}
                </p>
              </div>
            </>
          )}
        </div>
      </main>
      
      <div id="how-to-play">
        <HowToPlay />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
