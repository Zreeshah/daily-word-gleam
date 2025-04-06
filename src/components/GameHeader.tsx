
import { Separator } from "@/components/ui/separator";

export const GameHeader = () => {
  return (
    <header className="bg-teal-600 text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center">Daily Word Gleam</h1>
        <p className="text-center text-teal-100 mt-1">
          Guess the five-letter word in six attempts
        </p>
      </div>
      <Separator className="bg-teal-500 mt-4" />
    </header>
  );
};
