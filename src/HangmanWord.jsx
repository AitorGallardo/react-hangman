import { useEffect } from 'react';

const getRandomWord = (array) => {
  const randomNumber = Math.floor(Math.random() * array.length);
  const randomWord = array.at(randomNumber);
  return randomWord;
};
export const HangmanWord = () => {
  const MAXERRORS = 7;
  useEffect(() => {
    fetch('./src/assets/words.txt')
      .then((r) => r.text())
      .then((text) => {
        const allWords = text.split('\n');
        const word  = getRandomWord(allWords);
      });
  }, []);

  return <div>HangmanWord</div>;
};
