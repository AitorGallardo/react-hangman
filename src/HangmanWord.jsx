import { useEffect } from 'react';
import { useGetWord } from './hooks/useGetWord';

const getRandomWord = (array) => {
  const randomNumber = Math.floor(Math.random() * array.length);
  const randomWord = array.at(randomNumber);
  return randomWord;
};
export const HangmanWord = ({word}) => {
  const MAXERRORS = 7;

  return (
    <div className='word__container'>
      {word &&
        word.split('').map((character, index) => (
          <div key={index} className='word__character'>
            <div className="content">{character}</div>
            <div className="bottomLine"/>
          </div>
        ))}
    </div>
  );
};
