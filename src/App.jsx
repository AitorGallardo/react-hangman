import { HangmanDraw } from './HangmanDraw';

export const App = () => {
  return (
    <div style={{maxWidth: "800px", display:"flex", flexDirection:"column",margin:"0 auto",alignItems:"center"}}>
      <HangmanDraw />
    </div>
  );
};
