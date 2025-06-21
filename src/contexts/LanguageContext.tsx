
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fr' | 'es' | 'it' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'header.title': 'Wordless',
    'header.subtitle': 'Guess the word in six attempts',
    'header.letsPlay': "Let's Play!",
    'header.learnMore': 'Learn More',
    
    // Game
    'game.dailyChallenge': 'Daily Challenge',
    'game.newPuzzle': 'A new Wordless puzzle every day!',
    'game.loading': "Loading today's word...",
    'game.wordTooShort': 'Word too short',
    'game.enterWord': 'Please enter a {length}-letter word',
    'game.congratulations': 'Congratulations!',
    'game.solved': 'You solved today\'s Wordless puzzle!',
    'game.gameOver': 'Game Over',
    'game.wordWas': 'The word was {word}. Try again with a different word length!',
    'game.youWon': 'You won!',
    'game.betterLuck': 'Better luck next time!',
    'game.solvedIn': 'You solved it in {count} {count, plural, one {guess} other {guesses}}!',
    'game.tryDifferent': 'Try a different word length for more challenges!',
    'game.playAgain': 'Play Again',
    'game.try': 'Try {length} Letters',
    'game.confirmChange': 'Changing word length will reset your current game. Continue?',
    'game.confirmReset': 'Are you sure you want to restart the game?',
    'game.wordLengthUpdated': 'Word length updated to {length}',
    'game.newWordGenerated': 'A new word has been generated for you.',
    
    // About section
    'about.title': 'About Wordless Online',
    'about.description1': 'Wordless is a fun daily word puzzle game inspired by the classic word-guessing format. Each day, a new word is selected for you to guess.',
    'about.description2': 'You can choose word lengths from 3 to 8 letters to match your skill level. You have six attempts to guess the word. After each guess, the color of the tiles will change to show how close your guess was to the word.',
    'about.description3': 'Green tiles indicate correct letters in the right position, yellow tiles show letters that are in the word but in the wrong position, and gray tiles represent letters that aren\'t in the word at all.',
    'about.description4': 'Challenge your friends to see who can solve the puzzle in fewer attempts and less time!',
    
    // How to Play
    'howToPlay.title': 'How to Play Wordless',
    'howToPlay.gameRules': 'Game Rules',
    'howToPlay.rule1': 'Guess the five-letter word in six attempts or fewer.',
    'howToPlay.rule2': 'Each guess must be a valid five-letter word.',
    'howToPlay.rule3': 'After each guess, the color of the tiles will change to show how close your guess was.',
    'howToPlay.rule4': 'A new word is available each day!',
    'howToPlay.tileColors': 'Tile Colors',
    'howToPlay.green': 'Green: The letter is correct and in the right position.',
    'howToPlay.yellow': 'Yellow: The letter is in the word but in the wrong position.',
    'howToPlay.gray': 'Gray: The letter is not in the word.',
    'howToPlay.tips': 'Tips & Strategies',
    'howToPlay.tip1.title': 'Start with vowel-rich words',
    'howToPlay.tip1.desc': 'Words like "AUDIO," "ADIEU," or "OUIJA" can help identify vowels early.',
    'howToPlay.tip2.title': 'Look for common consonants',
    'howToPlay.tip2.desc': 'After vowels, try words with common consonants like S, T, R, N, and L.',
    'howToPlay.tip3.title': 'Use process of elimination',
    'howToPlay.tip3.desc': 'Pay attention to gray tiles to eliminate letters from future guesses.',
    'howToPlay.tip4.title': 'Consider letter positions',
    'howToPlay.tip4.desc': 'Yellow tiles show which letters need to be repositioned in your next guesses.',
    'howToPlay.what': 'What is Wordless?',
    'howToPlay.whatDesc1': 'Wordless is an addictive daily word puzzle game where players have six attempts to guess a five-letter word. After each guess, the tiles change color to show how close you are to the solution.',
    'howToPlay.whatDesc2': 'The game offers a fresh challenge every day with a new word to discover. It\'s a perfect brain exercise that combines vocabulary skills with deductive reasoning. Challenge yourself daily to maintain your word-guessing streak!',
    'howToPlay.faq': 'Frequently Asked Questions',
    'howToPlay.faq1.q': 'When does the daily word reset?',
    'howToPlay.faq1.a': 'The word resets at midnight in your local time zone.',
    'howToPlay.faq2.q': 'Can I play more than once per day?',
    'howToPlay.faq2.a': 'You can play as many times as you want, but the word only changes once per day.',
    'howToPlay.faq3.q': 'Are all five-letter words accepted as guesses?',
    'howToPlay.faq3.a': 'All valid five-letter words in English are accepted as guesses.',
    'howToPlay.faq4.q': 'How do I know if I\'ve used all my attempts?',
    'howToPlay.faq4.a': 'You have six rows on the game board. Once all six are filled, the game is over.',
  },
  fr: {
    // Header
    'header.title': 'Wordless',
    'header.subtitle': 'Devinez le mot en six tentatives',
    'header.letsPlay': 'Jouons !',
    'header.learnMore': 'En savoir plus',
    
    // Game
    'game.dailyChallenge': 'Défi quotidien',
    'game.newPuzzle': 'Un nouveau puzzle Wordless chaque jour !',
    'game.loading': 'Chargement du mot du jour...',
    'game.wordTooShort': 'Mot trop court',
    'game.enterWord': 'Veuillez entrer un mot de {length} lettres',
    'game.congratulations': 'Félicitations !',
    'game.solved': 'Vous avez résolu le puzzle Wordless d\'aujourd\'hui !',
    'game.gameOver': 'Jeu terminé',
    'game.wordWas': 'Le mot était {word}. Essayez avec une autre longueur de mot !',
    'game.youWon': 'Vous avez gagné !',
    'game.betterLuck': 'Meilleure chance la prochaine fois !',
    'game.solvedIn': 'Vous l\'avez résolu en {count} {count, plural, one {tentative} other {tentatives}} !',
    'game.tryDifferent': 'Essayez une longueur de mot différente pour plus de défis !',
    'game.playAgain': 'Rejouer',
    'game.try': 'Essayer {length} lettres',
    'game.confirmChange': 'Changer la longueur du mot réinitialisera votre jeu actuel. Continuer ?',
    'game.confirmReset': 'Êtes-vous sûr de vouloir redémarrer le jeu ?',
    'game.wordLengthUpdated': 'Longueur de mot mise à jour à {length}',
    'game.newWordGenerated': 'Un nouveau mot a été généré pour vous.',
    
    // About section
    'about.title': 'À propos de Wordless en ligne',
    'about.description1': 'Wordless est un jeu de puzzle de mots quotidien amusant inspiré du format classique de devinette de mots. Chaque jour, un nouveau mot est sélectionné pour que vous le deviniez.',
    'about.description2': 'Vous pouvez choisir des longueurs de mots de 3 à 8 lettres pour correspondre à votre niveau de compétence. Vous avez six tentatives pour deviner le mot. Après chaque supposition, la couleur des tuiles changera pour montrer à quel point votre supposition était proche du mot.',
    'about.description3': 'Les tuiles vertes indiquent des lettres correctes à la bonne position, les tuiles jaunes montrent des lettres qui sont dans le mot mais à la mauvaise position, et les tuiles grises représentent des lettres qui ne sont pas du tout dans le mot.',
    'about.description4': 'Défiez vos amis pour voir qui peut résoudre le puzzle en moins de tentatives et moins de temps !',
    
    // How to Play
    'howToPlay.title': 'Comment jouer à Wordless',
    'howToPlay.gameRules': 'Règles du jeu',
    'howToPlay.rule1': 'Devinez le mot de cinq lettres en six tentatives ou moins.',
    'howToPlay.rule2': 'Chaque supposition doit être un mot valide de cinq lettres.',
    'howToPlay.rule3': 'Après chaque supposition, la couleur des tuiles changera pour montrer à quel point votre supposition était proche.',
    'howToPlay.rule4': 'Un nouveau mot est disponible chaque jour !',
    'howToPlay.tileColors': 'Couleurs des tuiles',
    'howToPlay.green': 'Vert : La lettre est correcte et à la bonne position.',
    'howToPlay.yellow': 'Jaune : La lettre est dans le mot mais à la mauvaise position.',
    'howToPlay.gray': 'Gris : La lettre n\'est pas dans le mot.',
    'howToPlay.tips': 'Conseils et stratégies',
    'howToPlay.tip1.title': 'Commencez par des mots riches en voyelles',
    'howToPlay.tip1.desc': 'Des mots comme "AUDIO", "ADIEU" ou "OUIJA" peuvent aider à identifier les voyelles tôt.',
    'howToPlay.tip2.title': 'Cherchez les consonnes communes',
    'howToPlay.tip2.desc': 'Après les voyelles, essayez des mots avec des consonnes communes comme S, T, R, N et L.',
    'howToPlay.tip3.title': 'Utilisez le processus d\'élimination',
    'howToPlay.tip3.desc': 'Faites attention aux tuiles grises pour éliminer les lettres des futures suppositions.',
    'howToPlay.tip4.title': 'Considérez les positions des lettres',
    'howToPlay.tip4.desc': 'Les tuiles jaunes montrent quelles lettres doivent être repositionnées dans vos prochaines suppositions.',
    'howToPlay.what': 'Qu\'est-ce que Wordless ?',
    'howToPlay.whatDesc1': 'Wordless est un jeu de puzzle de mots quotidien addictif où les joueurs ont six tentatives pour deviner un mot de cinq lettres. Après chaque supposition, les tuiles changent de couleur pour montrer à quel point vous êtes proche de la solution.',
    'howToPlay.whatDesc2': 'Le jeu offre un nouveau défi chaque jour avec un nouveau mot à découvrir. C\'est un exercice cérébral parfait qui combine les compétences de vocabulaire avec le raisonnement déductif. Défiez-vous quotidiennement pour maintenir votre série de devinettes de mots !',
    'howToPlay.faq': 'Questions fréquemment posées',
    'howToPlay.faq1.q': 'Quand le mot quotidien se réinitialise-t-il ?',
    'howToPlay.faq1.a': 'Le mot se réinitialise à minuit dans votre fuseau horaire local.',
    'howToPlay.faq2.q': 'Puis-je jouer plus d\'une fois par jour ?',
    'howToPlay.faq2.a': 'Vous pouvez jouer autant de fois que vous le souhaitez, mais le mot ne change qu\'une fois par jour.',
    'howToPlay.faq3.q': 'Tous les mots de cinq lettres sont-ils acceptés comme suppositions ?',
    'howToPlay.faq3.a': 'Tous les mots valides de cinq lettres en anglais sont acceptés comme suppositions.',
    'howToPlay.faq4.q': 'Comment savoir si j\'ai utilisé toutes mes tentatives ?',
    'howToPlay.faq4.a': 'Vous avez six rangées sur le plateau de jeu. Une fois que les six sont remplies, le jeu est terminé.',
  },
  es: {
    // Header
    'header.title': 'Wordless',
    'header.subtitle': 'Adivina la palabra en seis intentos',
    'header.letsPlay': '¡Juguemos!',
    'header.learnMore': 'Aprende más',
    
    // Game
    'game.dailyChallenge': 'Desafío diario',
    'game.newPuzzle': '¡Un nuevo rompecabezas Wordless cada día!',
    'game.loading': 'Cargando la palabra de hoy...',
    'game.wordTooShort': 'Palabra muy corta',
    'game.enterWord': 'Por favor ingresa una palabra de {length} letras',
    'game.congratulations': '¡Felicitaciones!',
    'game.solved': '¡Resolviste el rompecabezas Wordless de hoy!',
    'game.gameOver': 'Juego terminado',
    'game.wordWas': 'La palabra era {word}. ¡Intenta con una longitud de palabra diferente!',
    'game.youWon': '¡Ganaste!',
    'game.betterLuck': '¡Mejor suerte la próxima vez!',
    'game.solvedIn': '¡Lo resolviste en {count} {count, plural, one {intento} other {intentos}}!',
    'game.tryDifferent': '¡Prueba una longitud de palabra diferente para más desafíos!',
    'game.playAgain': 'Jugar de nuevo',
    'game.try': 'Probar {length} letras',
    'game.confirmChange': 'Cambiar la longitud de la palabra reiniciará tu juego actual. ¿Continuar?',
    'game.confirmReset': '¿Estás seguro de que quieres reiniciar el juego?',
    'game.wordLengthUpdated': 'Longitud de palabra actualizada a {length}',
    'game.newWordGenerated': 'Se ha generado una nueva palabra para ti.',
    
    // About section
    'about.title': 'Acerca de Wordless en línea',
    'about.description1': 'Wordless es un divertido juego de rompecabezas de palabras diario inspirado en el formato clásico de adivinanza de palabras. Cada día, se selecciona una nueva palabra para que adivines.',
    'about.description2': 'Puedes elegir longitudes de palabras de 3 a 8 letras para que coincida con tu nivel de habilidad. Tienes seis intentos para adivinar la palabra. Después de cada suposición, el color de las fichas cambiará para mostrar qué tan cerca estuvo tu suposición de la palabra.',
    'about.description3': 'Las fichas verdes indican letras correctas en la posición correcta, las fichas amarillas muestran letras que están en la palabra pero en la posición incorrecta, y las fichas grises representan letras que no están en la palabra en absoluto.',
    'about.description4': '¡Desafía a tus amigos para ver quién puede resolver el rompecabezas en menos intentos y menos tiempo!',
    
    // How to Play
    'howToPlay.title': 'Cómo jugar Wordless',
    'howToPlay.gameRules': 'Reglas del juego',
    'howToPlay.rule1': 'Adivina la palabra de cinco letras en seis intentos o menos.',
    'howToPlay.rule2': 'Cada suposición debe ser una palabra válida de cinco letras.',
    'howToPlay.rule3': 'Después de cada suposición, el color de las fichas cambiará para mostrar qué tan cerca estuvo tu suposición.',
    'howToPlay.rule4': '¡Una nueva palabra está disponible cada día!',
    'howToPlay.tileColors': 'Colores de fichas',
    'howToPlay.green': 'Verde: La letra es correcta y está en la posición correcta.',
    'howToPlay.yellow': 'Amarillo: La letra está en la palabra pero en la posición incorrecta.',
    'howToPlay.gray': 'Gris: La letra no está en la palabra.',
    'howToPlay.tips': 'Consejos y estrategias',
    'howToPlay.tip1.title': 'Comienza con palabras ricas en vocales',
    'howToPlay.tip1.desc': 'Palabras como "AUDIO", "ADIEU" o "OUIJA" pueden ayudar a identificar vocales temprano.',
    'howToPlay.tip2.title': 'Busca consonantes comunes',
    'howToPlay.tip2.desc': 'Después de las vocales, prueba palabras con consonantes comunes como S, T, R, N y L.',
    'howToPlay.tip3.title': 'Usa el proceso de eliminación',
    'howToPlay.tip3.desc': 'Presta atención a las fichas grises para eliminar letras de futuras suposiciones.',
    'howToPlay.tip4.title': 'Considera las posiciones de las letras',
    'howToPlay.tip4.desc': 'Las fichas amarillas muestran qué letras necesitan ser reposicionadas en tus próximas suposiciones.',
    'howToPlay.what': '¿Qué es Wordless?',
    'howToPlay.whatDesc1': 'Wordless es un adictivo juego de rompecabezas de palabras diario donde los jugadores tienen seis intentos para adivinar una palabra de cinco letras. Después de cada suposición, las fichas cambian de color para mostrar qué tan cerca estás de la solución.',
    'howToPlay.whatDesc2': 'El juego ofrece un nuevo desafío cada día con una nueva palabra para descubrir. Es un ejercicio cerebral perfecto que combina habilidades de vocabulario con razonamiento deductivo. ¡Desafíate diariamente para mantener tu racha de adivinanza de palabras!',
    'howToPlay.faq': 'Preguntas frecuentes',
    'howToPlay.faq1.q': '¿Cuándo se reinicia la palabra diaria?',
    'howToPlay.faq1.a': 'La palabra se reinicia a medianoche en tu zona horaria local.',
    'howToPlay.faq2.q': '¿Puedo jugar más de una vez por día?',
    'howToPlay.faq2.a': 'Puedes jugar tantas veces como quieras, pero la palabra solo cambia una vez por día.',
    'howToPlay.faq3.q': '¿Se aceptan todas las palabras de cinco letras como suposiciones?',
    'howToPlay.faq3.a': 'Todas las palabras válidas de cinco letras en inglés se aceptan como suposiciones.',
    'howToPlay.faq4.q': '¿Cómo sé si he usado todos mis intentos?',
    'howToPlay.faq4.a': 'Tienes seis filas en el tablero de juego. Una vez que las seis estén llenas, el juego habrá terminado.',
  },
  it: {
    // Header
    'header.title': 'Wordless',
    'header.subtitle': 'Indovina la parola in sei tentativi',
    'header.letsPlay': 'Giochiamo!',
    'header.learnMore': 'Scopri di più',
    
    // Game
    'game.dailyChallenge': 'Sfida quotidiana',
    'game.newPuzzle': 'Un nuovo puzzle Wordless ogni giorno!',
    'game.loading': 'Caricamento della parola di oggi...',
    'game.wordTooShort': 'Parola troppo corta',
    'game.enterWord': 'Per favore inserisci una parola di {length} lettere',
    'game.congratulations': 'Congratulazioni!',
    'game.solved': 'Hai risolto il puzzle Wordless di oggi!',
    'game.gameOver': 'Gioco finito',
    'game.wordWas': 'La parola era {word}. Prova con una lunghezza di parola diversa!',
    'game.youWon': 'Hai vinto!',
    'game.betterLuck': 'Miglior fortuna la prossima volta!',
    'game.solvedIn': 'L\'hai risolto in {count} {count, plural, one {tentativo} other {tentativi}}!',
    'game.tryDifferent': 'Prova una lunghezza di parola diversa per più sfide!',
    'game.playAgain': 'Gioca di nuovo',
    'game.try': 'Prova {length} lettere',
    'game.confirmChange': 'Cambiare la lunghezza della parola resetterà il tuo gioco attuale. Continuare?',
    'game.confirmReset': 'Sei sicuro di voler riavviare il gioco?',
    'game.wordLengthUpdated': 'Lunghezza della parola aggiornata a {length}',
    'game.newWordGenerated': 'È stata generata una nuova parola per te.',
    
    // About section
    'about.title': 'Informazioni su Wordless online',
    'about.description1': 'Wordless è un divertente gioco di puzzle di parole quotidiano ispirato al formato classico di indovinare le parole. Ogni giorno, viene selezionata una nuova parola da indovinare.',
    'about.description2': 'Puoi scegliere lunghezze di parole da 3 a 8 lettere per adattarsi al tuo livello di abilità. Hai sei tentativi per indovinare la parola. Dopo ogni tentativo, il colore delle tessere cambierà per mostrare quanto il tuo tentativo si avvicinava alla parola.',
    'about.description3': 'Le tessere verdi indicano lettere corrette nella posizione giusta, le tessere gialle mostrano lettere che sono nella parola ma nella posizione sbagliata, e le tessere grigie rappresentano lettere che non sono affatto nella parola.',
    'about.description4': 'Sfida i tuoi amici per vedere chi può risolvere il puzzle in meno tentativi e meno tempo!',
    
    // How to Play
    'howToPlay.title': 'Come giocare a Wordless',
    'howToPlay.gameRules': 'Regole del gioco',
    'howToPlay.rule1': 'Indovina la parola di cinque lettere in sei tentativi o meno.',
    'howToPlay.rule2': 'Ogni tentativo deve essere una parola valida di cinque lettere.',
    'howToPlay.rule3': 'Dopo ogni tentativo, il colore delle tessere cambierà per mostrare quanto il tuo tentativo si avvicinava.',
    'howToPlay.rule4': 'Una nuova parola è disponibile ogni giorno!',
    'howToPlay.tileColors': 'Colori delle tessere',
    'howToPlay.green': 'Verde: La lettera è corretta e nella posizione giusta.',
    'howToPlay.yellow': 'Giallo: La lettera è nella parola ma nella posizione sbagliata.',
    'howToPlay.gray': 'Grigio: La lettera non è nella parola.',
    'howToPlay.tips': 'Suggerimenti e strategie',
    'howToPlay.tip1.title': 'Inizia con parole ricche di vocali',
    'howToPlay.tip1.desc': 'Parole come "AUDIO", "ADIEU" o "OUIJA" possono aiutare a identificare le vocali presto.',
    'howToPlay.tip2.title': 'Cerca consonanti comuni',
    'howToPlay.tip2.desc': 'Dopo le vocali, prova parole con consonanti comuni come S, T, R, N e L.',
    'howToPlay.tip3.title': 'Usa il processo di eliminazione',
    'howToPlay.tip3.desc': 'Fai attenzione alle tessere grigie per eliminare lettere dai futuri tentativi.',
    'howToPlay.tip4.title': 'Considera le posizioni delle lettere',
    'howToPlay.tip4.desc': 'Le tessere gialle mostrano quali lettere devono essere riposizionate nei tuoi prossimi tentativi.',
    'howToPlay.what': 'Cos\'è Wordless?',
    'howToPlay.whatDesc1': 'Wordless è un gioco di puzzle di parole quotidiano avvincente dove i giocatori hanno sei tentativi per indovinare una parola di cinque lettere. Dopo ogni tentativo, le tessere cambiano colore per mostrare quanto sei vicino alla soluzione.',
    'howToPlay.whatDesc2': 'Il gioco offre una nuova sfida ogni giorno con una nuova parola da scoprire. È un perfetto esercizio per il cervello che combina abilità di vocabolario con ragionamento deduttivo. Sfidati quotidianamente per mantenere la tua serie di indovinelli di parole!',
    'howToPlay.faq': 'Domande frequenti',
    'howToPlay.faq1.q': 'Quando si resetta la parola quotidiana?',
    'howToPlay.faq1.a': 'La parola si resetta a mezzanotte nel tuo fuso orario locale.',
    'howToPlay.faq2.q': 'Posso giocare più di una volta al giorno?',
    'howToPlay.faq2.a': 'Puoi giocare quante volte vuoi, ma la parola cambia solo una volta al giorno.',
    'howToPlay.faq3.q': 'Tutte le parole di cinque lettere sono accettate come tentativi?',
    'howToPlay.faq3.a': 'Tutte le parole valide di cinque lettere in inglese sono accettate come tentativi.',
    'howToPlay.faq4.q': 'Come faccio a sapere se ho usato tutti i miei tentativi?',
    'howToPlay.faq4.a': 'Hai sei righe sul tabellone di gioco. Una volta che tutte e sei sono riempite, il gioco è finito.',
  },
  tr: {
    // Header
    'header.title': 'Wordless',
    'header.subtitle': 'Kelimeyi altı denemede tahmin et',
    'header.letsPlay': 'Hadi Oynayalım!',
    'header.learnMore': 'Daha Fazla Öğren',
    
    // Game
    'game.dailyChallenge': 'Günlük Meydan Okuma',
    'game.newPuzzle': 'Her gün yeni bir Wordless bulmacası!',
    'game.loading': 'Bugünün kelimesi yükleniyor...',
    'game.wordTooShort': 'Kelime çok kısa',
    'game.enterWord': 'Lütfen {length} harfli bir kelime girin',
    'game.congratulations': 'Tebrikler!',
    'game.solved': 'Bugünün Wordless bulmacasını çözdünüz!',
    'game.gameOver': 'Oyun Bitti',
    'game.wordWas': 'Kelime {word} idi. Farklı kelime uzunluğu ile tekrar deneyin!',
    'game.youWon': 'Kazandınız!',
    'game.betterLuck': 'Bir dahaki sefere daha iyi şanslar!',
    'game.solvedIn': '{count} {count, plural, one {denemede} other {denemede}} çözdünüz!',
    'game.tryDifferent': 'Daha fazla meydan okuma için farklı kelime uzunluğu deneyin!',
    'game.playAgain': 'Tekrar Oyna',
    'game.try': '{length} Harf Dene',
    'game.confirmChange': 'Kelime uzunluğunu değiştirmek mevcut oyununuzu sıfırlayacak. Devam et?',
    'game.confirmReset': 'Oyunu yeniden başlatmak istediğinizden emin misiniz?',
    'game.wordLengthUpdated': 'Kelime uzunluğu {length} olarak güncellendi',
    'game.newWordGenerated': 'Sizin için yeni bir kelime oluşturuldu.',
    
    // About section
    'about.title': 'Wordless Online Hakkında',
    'about.description1': 'Wordless, klasik kelime tahmin formatından ilham alan eğlenceli günlük kelime bulmaca oyunudur. Her gün tahmin etmeniz için yeni bir kelime seçilir.',
    'about.description2': 'Beceri seviyenize uygun olacak şekilde 3 ila 8 harf uzunluğunda kelimeler seçebilirsiniz. Kelimeyi tahmin etmek için altı denemeniz var. Her tahminden sonra, karoların rengi tahmininizin kelimeye ne kadar yakın olduğunu gösterecek şekilde değişecektir.',
    'about.description3': 'Yeşil karolar doğru konumdaki doğru harfleri, sarı karolar kelimede bulunan ancak yanlış konumdaki harfleri, gri karolar ise kelimede hiç bulunmayan harfleri temsil eder.',
    'about.description4': 'Arkadaşlarınıza meydan okuyun ve kim bulmacayı daha az denemede ve daha az zamanda çözebilir görün!',
    
    // How to Play
    'howToPlay.title': 'Wordless Nasıl Oynanır',
    'howToPlay.gameRules': 'Oyun Kuralları',
    'howToPlay.rule1': 'Beş harfli kelimeyi altı deneme veya daha azında tahmin edin.',
    'howToPlay.rule2': 'Her tahmin geçerli beş harfli bir kelime olmalıdır.',
    'howToPlay.rule3': 'Her tahminden sonra, karoların rengi tahmininizin ne kadar yakın olduğunu gösterecek şekilde değişecektir.',
    'howToPlay.rule4': 'Her gün yeni bir kelime mevcut!',
    'howToPlay.tileColors': 'Karo Renkleri',
    'howToPlay.green': 'Yeşil: Harf doğru ve doğru konumda.',
    'howToPlay.yellow': 'Sarı: Harf kelimede var ama yanlış konumda.',
    'howToPlay.gray': 'Gri: Harf kelimede yok.',
    'howToPlay.tips': 'İpuçları ve Stratejiler',
    'howToPlay.tip1.title': 'Sesli harf açısından zengin kelimelerle başlayın',
    'howToPlay.tip1.desc': '"AUDIO", "ADIEU" veya "OUIJA" gibi kelimeler erken sesli harfleri belirlemeye yardımcı olabilir.',
    'howToPlay.tip2.title': 'Yaygın sessiz harfleri arayın',
    'howToPlay.tip2.desc': 'Sesli harflerden sonra, S, T, R, N ve L gibi yaygın sessiz harflerle kelimeler deneyin.',
    'howToPlay.tip3.title': 'Eleme sürecini kullanın',
    'howToPlay.tip3.desc': 'Gelecekteki tahminlerden harfleri elemek için gri karolara dikkat edin.',
    'howToPlay.tip4.title': 'Harf pozisyonlarını düşünün',
    'howToPlay.tip4.desc': 'Sarı karolar, bir sonraki tahminlerinizde hangi harflerin yeniden konumlandırılması gerektiğini gösterir.',
    'howToPlay.what': 'Wordless Nedir?',
    'howToPlay.whatDesc1': 'Wordless, oyuncuların beş harfli bir kelimeyi tahmin etmek için altı denemesi olan bağımlılık yapan günlük kelime bulmaca oyunudur. Her tahminden sonra, karolar çözüme ne kadar yakın olduğunuzu göstermek için renk değiştirir.',
    'howToPlay.whatDesc2': 'Oyun her gün keşfedilecek yeni bir kelime ile taze bir meydan okuma sunar. Kelime bilgisi becerilerini tümdengelimli akıl yürütme ile birleştiren mükemmel bir beyin egzersizidir. Kelime tahmin serinizi sürdürmek için kendinize günlük meydan okuyun!',
    'howToPlay.faq': 'Sıkça Sorulan Sorular',
    'howToPlay.faq1.q': 'Günlük kelime ne zaman sıfırlanır?',
    'howToPlay.faq1.a': 'Kelime yerel saat diliminizde gece yarısında sıfırlanır.',
    'howToPlay.faq2.q': 'Günde birden fazla oynayabilir miyim?',
    'howToPlay.faq2.a': 'İstediğiniz kadar oynayabilirsiniz, ancak kelime günde sadece bir kez değişir.',
    'howToPlay.faq3.q': 'Tüm beş harfli kelimeler tahmin olarak kabul ediliyor mu?',
    'howToPlay.faq3.a': 'İngilizcedeki tüm geçerli beş harfli kelimeler tahmin olarak kabul edilir.',
    'howToPlay.faq4.q': 'Tüm denemelerimi kullandığımı nasıl anlarım?',
    'howToPlay.faq4.a': 'Oyun tahtasında altı satırınız var. Altısı da doldurulduğunda, oyun biter.',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Auto-detect browser language on first load
  useEffect(() => {
    const detectLanguage = () => {
      const browserLang = navigator.language.toLowerCase();
      
      if (browserLang.startsWith('fr')) return 'fr';
      if (browserLang.startsWith('es')) return 'es';
      if (browserLang.startsWith('it')) return 'it';
      if (browserLang.startsWith('tr')) return 'tr';
      return 'en';
    };

    const savedLanguage = localStorage.getItem('wordless-language') as Language;
    if (savedLanguage && ['en', 'fr', 'es', 'it', 'tr'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      const detectedLanguage = detectLanguage();
      setLanguage(detectedLanguage);
      localStorage.setItem('wordless-language', detectedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('wordless-language', lang);
  };

  const t = (key: string, params?: Record<string, any>) => {
    let translation = translations[language][key] || translations.en[key] || key;
    
    // Simple parameter replacement
    if (params) {
      Object.entries(params).forEach(([paramKey, value]) => {
        translation = translation.replace(new RegExp(`{${paramKey}}`, 'g'), value);
      });
    }
    
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
