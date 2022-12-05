import { HangmanDraw } from './';
import { useGetWord } from './hooks/useGetWord';

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
    </div>
  );
};
