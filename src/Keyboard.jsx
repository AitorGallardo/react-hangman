const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
export const Keyboard = () => {
  const handleClick = (key)=>{
    console.log('HAS CLICKED ===>',key);
  }
  return (
    <div className='keyboard'>
      {alphabet.map((character,index) => (
        <div key={index} className='keyboard-character' onClick={()=>handleClick(character)}>{character}</div>
      ))}
    </div>
  );
};
