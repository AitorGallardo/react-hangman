import { HangmanDraw, HangmanWord } from './';
import { useGetWord } from './hooks/useGetWord';
import { Keyboard } from './Keyboard';

export const App = () => {
  const MAXERRORS = 7;

  const { word, occurrences, setOccurrences } = useGetWord();

  const lookForOcurrences = (character) => {
    const guessedCharacters = word
      .split('')
      .map((e, index) => (e === character ? index : ''))
      .filter(String);
    if (guessedCharacters.length > 0) {
      setOccurrences(()=>[...occurrences, ...guessedCharacters])
    }
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <h1>{word}</h1>
      <HangmanDraw />
      <HangmanWord word={word} occurrences={occurrences} />
      <Keyboard selectedCharacter={lookForOcurrences} />
    </div>
  );
};
