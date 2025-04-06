
import { useState, useEffect } from "react";
import { Clock, RefreshCw } from "lucide-react";

interface GameControlsProps {
  wordLength: number;
  onWordLengthChange: (length: number) => void;
  onReset?: () => void;
}

export const GameControls = ({ 
  wordLength, 
  onWordLengthChange,
  onReset
}: GameControlsProps) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  
  // Format time as 00:00
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && interval) {
      clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);
  
  // Reset timer when word length changes
  useEffect(() => {
    setSeconds(0);
  }, [wordLength]);

  const handleIncrement = () => {
    if (wordLength < 8) {
      onWordLengthChange(wordLength + 1);
    }
  };

  const handleDecrement = () => {
    if (wordLength > 3) {
      onWordLengthChange(wordLength - 1);
    }
  };

  return (
    <div className="w-full flex justify-center items-center gap-4 my-4">
      {/* Word length controls */}
      <div className="flex items-center bg-indigo-50 rounded-lg overflow-hidden">
        <button 
          onClick={handleDecrement}
          disabled={wordLength <= 3}
          className="px-4 py-2 bg-indigo-100 text-indigo-600 font-bold text-lg hover:bg-indigo-200 disabled:opacity-50"
          aria-label="Decrease word length"
        >
          −
        </button>
        <div className="w-12 text-center font-bold text-xl py-2 bg-white">
          {wordLength}
        </div>
        <button 
          onClick={handleIncrement}
          disabled={wordLength >= 8}
          className="px-4 py-2 bg-indigo-100 text-indigo-600 font-bold text-lg hover:bg-indigo-200 disabled:opacity-50"
          aria-label="Increase word length"
        >
          +
        </button>
      </div>
      
      {/* Timer */}
      <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border">
        <Clock className="text-indigo-500 mr-2" size={18} />
        <span className="text-indigo-700 font-medium">
          {formatTime(seconds)}
        </span>
      </div>
      
      {/* Reset button */}
      <button 
        onClick={onReset}
        className="bg-indigo-100 text-indigo-600 p-2 rounded-full hover:bg-indigo-200"
        aria-label="Reset game"
      >
        <RefreshCw size={20} />
      </button>
    </div>
  );
};
