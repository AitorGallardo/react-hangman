import { useEffect, useState } from 'react';

const getRandomWord = (array) => {
  const randomNumber = Math.floor(Math.random() * array.length);
  const randomWord = array.at(randomNumber);
  return randomWord;
};
const getRandomCharacter = (word)=>{
  const randomNumber = Math.floor(Math.random() * word.length);
  const arrWord = word.split('');
  const randomChar = arrWord.at(randomNumber);
  // We check if the character is repeated in the word
  return arrWord.map((c,index)=> c===randomChar ? index : '').filter(String);
}

export const useGetWord = () => {
  const [word, setWord] = useState(null);
  const [occurrences, setOccurrences] = useState([]);

  useEffect(() => {
    fetch('./src/assets/words.txt')
      .then((r) => r.text())
      .then((text) => {
        const allWords = text.split('\n');
        const word = getRandomWord(allWords);
        const occurrenes = getRandomCharacter(word);
        setWord(word);
        setOccurrences(occurrenes)
      });

  }, []);

  return { word, occurrences};
};
