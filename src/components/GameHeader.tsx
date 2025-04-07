
import { Separator } from "@/components/ui/separator";
import { Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const GameHeader = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-teal-600 text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <Link to="/" className="flex items-center mb-4 md:mb-0">
            <div className="flex items-center">
              <Brain className="h-10 w-10 mr-3" />
              <h1 className="text-3xl font-bold">Wordless</h1>
            </div>
          </Link>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 md:mt-0">
            <Button 
              onClick={() => scrollToSection("game-section")}
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full px-8 py-2 text-lg"
            >
              Let's Play!
            </Button>
            
            <Button 
              onClick={() => scrollToSection("how-to-play")}
              variant="outline" 
              className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border-white font-semibold rounded-full px-8 py-2 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <p className="text-center md:text-left text-teal-100 mt-3 md:hidden">
          Guess the word in six attempts
        </p>
      </div>
      <Separator className="bg-teal-500 mt-4" />
    </header>
  );
};
