
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage, type Language } from '@/contexts/LanguageContext';

const languageNames = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  tr: 'Türkçe',
};

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white"
        >
          <Languages className="h-4 w-4 mr-2" />
          {languageNames[language]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-lg z-50">
        {Object.entries(languageNames).map(([lang, name]) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => handleLanguageChange(lang as Language)}
            className={`cursor-pointer hover:bg-gray-100 ${
              language === lang ? 'bg-teal-50 text-teal-700' : ''
            }`}
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
