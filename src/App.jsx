import { useEffect, useState } from 'react';
import { HangmanDraw, HangmanWord, Keyboard, PopUp } from './';
import { useGetWord } from './hooks/useGetWord';

const MAXERRORS = 7;
export const App = () => {
  const [errors, setErrors] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [clickedCharacters, setClickedCharacters] = useState([]);

  const { word, occurrences, setOccurrences, updateWord } = useGetWord();

  useEffect(() => {
    if (errors.length >= 7) {
      setShowPopUp(true);
    }
  }, [errors]);

  const resetGame = () => {
    setShowPopUp(false);
    setClickedCharacters([]);
    setOccurrences([]);
    setErrors([])
    updateWord();
  };

  const lookForOcurrences = (character) => {

    setClickedCharacters([...clickedCharacters, character]);

    const guessedCharacters = word
      .split('')
      .map((e, index) => (e === character ? index : ''))
      .filter(String);

    if (guessedCharacters.length > 0) {
      setOccurrences(() => [...occurrences, ...guessedCharacters]);
    } else {
      setErrors([...errors, true]);
      console.log('ERRORS', errors);
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
      {showPopUp && <PopUp newGame={resetGame} />}
      <HangmanDraw errors={errors} />
      <HangmanWord word={word} occurrences={occurrences} />
      <Keyboard
        selectedCharacter={lookForOcurrences}
        clickedCharacters={clickedCharacters}
      />
    </div>
  );
};
