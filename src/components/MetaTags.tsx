
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const metaTranslations = {
  en: {
    title: 'Wordless Daily 8-Letter Word Puzzle Game Online',
    description: 'Play Wordless, the free daily word puzzle game with 3-8 letter challenges. Guess the secret word in six tries with color hints. New puzzle daily!',
    keywords: 'Wordless, Wordless Game, Wordless Online, Daily Word Puzzle, 8-Letter Word Game, 5-Letter Word Game'
  },
  fr: {
    title: 'Wordless Jeu de Puzzle de Mots Quotidien en Ligne',
    description: 'Jouez à Wordless, le jeu de puzzle de mots quotidien gratuit avec des défis de 3-8 lettres. Devinez le mot secret en six essais avec des indices colorés. Nouveau puzzle quotidien!',
    keywords: 'Wordless, Jeu Wordless, Wordless en Ligne, Puzzle de Mots Quotidien, Jeu de Mots 8 Lettres, Jeu de Mots 5 Lettres'
  },
  es: {
    title: 'Wordless Juego de Rompecabezas de Palabras Diario en Línea',
    description: 'Juega Wordless, el juego gratuito de rompecabezas de palabras diario con desafíos de 3-8 letras. Adivina la palabra secreta en seis intentos con pistas de colores. ¡Nuevo rompecabezas diario!',
    keywords: 'Wordless, Juego Wordless, Wordless en Línea, Rompecabezas de Palabras Diario, Juego de Palabras 8 Letras, Juego de Palabras 5 Letras'
  },
  it: {
    title: 'Wordless Gioco di Puzzle di Parole Quotidiano Online',
    description: 'Gioca a Wordless, il gioco gratuito di puzzle di parole quotidiano con sfide da 3-8 lettere. Indovina la parola segreta in sei tentativi con indizi colorati. Nuovo puzzle quotidiano!',
    keywords: 'Wordless, Gioco Wordless, Wordless Online, Puzzle di Parole Quotidiano, Gioco di Parole 8 Lettere, Gioco di Parole 5 Lettere'
  },
  tr: {
    title: 'Wordless Günlük Kelime Bulmaca Oyunu Online',
    description: 'Wordless oynayın, 3-8 harf zorluklarıyla ücretsiz günlük kelime bulmaca oyunu. Gizli kelimeyi altı denemede renkli ipuçlarıyla tahmin edin. Günlük yeni bulmaca!',
    keywords: 'Wordless, Wordless Oyunu, Online Wordless, Günlük Kelime Bulmacası, 8 Harfli Kelime Oyunu, 5 Harfli Kelime Oyunu'
  }
};

export const MetaTags = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const meta = metaTranslations[language];
    
    // Update title
    document.title = meta.title;
    
    // Update meta description
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', meta.description);
    }
    
    // Update meta keywords
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      keywordsMeta.setAttribute('content', meta.keywords);
    }
    
    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', meta.title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', meta.description);
    }
    
    // Update Twitter meta tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', meta.title);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', meta.description);
    }
    
    // Update canonical URL based on language
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const baseUrl = 'https://www.wordless.pro';
      const newUrl = language === 'en' ? baseUrl : `${baseUrl}/${language}`;
      canonical.setAttribute('href', newUrl);
    }
    
    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', language);
    
  }, [language]);

  return null;
};
