import { useEffect, useState } from 'react';

const getRandomWord = (array) => {
  const randomNumber = Math.floor(Math.random() * array.length);
  const randomWord = array.at(randomNumber);
  return randomWord;
};

export const useGetWord = () => {
  const [word, setWord] = useState(null);

  useEffect(() => {
    fetch('./src/assets/words.txt')
      .then((r) => r.text())
      .then((text) => {
        const allWords = text.split('\n');
        const w = getRandomWord(allWords);
        setWord(w);
      });

  }, []);

  return { word };
};
