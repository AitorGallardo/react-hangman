import { HangmanDraw, HangmanWord} from './';
import { useGetWord } from './hooks/useGetWord';
import { Keyboard } from './Keyboard';

export const App = () => {
  const { word } = useGetWord();
  const checkSelectedCharacter = (character)=>{
    const occurrences = word.split('').map((e,index)=> e===character ? index : '').filter(String); 
    console.log('OCURRENCES',occurrences);
  }
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
      <HangmanWord word={word}/>
      <Keyboard selectedCharacter={checkSelectedCharacter}/>
    </div>
  );
};
