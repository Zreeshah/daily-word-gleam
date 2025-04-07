
import { Separator } from "@/components/ui/separator";
import { Brain } from "lucide-react";

export const GameHeader = () => {
  return (
    <header className="bg-teal-600 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex items-center mb-2">
          <Brain className="h-10 w-10 mr-3" />
          <h1 className="text-3xl font-bold text-center">Wordless</h1>
        </div>
        <p className="text-center text-teal-100 mt-1">
          Guess the word in six attempts
        </p>
      </div>
      <Separator className="bg-teal-500 mt-4" />
    </header>
  );
};
