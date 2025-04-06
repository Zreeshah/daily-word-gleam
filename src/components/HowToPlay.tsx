
import { Separator } from "@/components/ui/separator";

export const HowToPlay = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Play Daily Word Gleam</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-teal-700 mb-3">Game Rules</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span>Guess the five-letter word in six attempts or fewer.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span>Each guess must be a valid five-letter word.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span>After each guess, the color of the tiles will change to show how close your guess was.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span>A new word is available each day!</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-teal-700 mb-3">Tile Colors</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-green-500 text-white font-bold rounded">A</div>
                <span className="text-gray-700">Green: The letter is correct and in the right position.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-yellow-500 text-white font-bold rounded">B</div>
                <span className="text-gray-700">Yellow: The letter is in the word but in the wrong position.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-500 text-white font-bold rounded">C</div>
                <span className="text-gray-700">Gray: The letter is not in the word.</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-teal-700 mb-4">Tips & Strategies</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Start with vowel-rich words</h4>
              <p className="text-gray-700">Words like "AUDIO," "ADIEU," or "OUIJA" can help identify vowels early.</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Look for common consonants</h4>
              <p className="text-gray-700">After vowels, try words with common consonants like S, T, R, N, and L.</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Use process of elimination</h4>
              <p className="text-gray-700">Pay attention to gray tiles to eliminate letters from future guesses.</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Consider letter positions</h4>
              <p className="text-gray-700">Yellow tiles show which letters need to be repositioned in your next guesses.</p>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mb-4">What is Daily Word Gleam?</h3>
          <p className="text-gray-700 mb-4">
            Daily Word Gleam is an addictive daily word puzzle game where players have six attempts to guess a five-letter word.
            After each guess, the tiles change color to show how close you are to the solution.
          </p>
          <p className="text-gray-700">
            The game offers a fresh challenge every day with a new word to discover. It's a perfect brain exercise
            that combines vocabulary skills with deductive reasoning. Challenge yourself daily to maintain your word-guessing streak!
          </p>
        </div>
        
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-teal-700 mb-4">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">When does the daily word reset?</h4>
              <p className="text-gray-700">The word resets at midnight in your local time zone.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Can I play more than once per day?</h4>
              <p className="text-gray-700">You can play as many times as you want, but the word only changes once per day.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Are all five-letter words accepted as guesses?</h4>
              <p className="text-gray-700">All valid five-letter words in English are accepted as guesses.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">How do I know if I've used all my attempts?</h4>
              <p className="text-gray-700">You have six rows on the game board. Once all six are filled, the game is over.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
