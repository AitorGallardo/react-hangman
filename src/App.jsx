import { HangmanDraw } from './';
import { useGetWord } from './hooks/useGetWord';
import { Keyboard } from './Keyboard';

export const App = () => {
  const { word } = useGetWord();
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
      <Keyboard/>
    </div>
  );
};
