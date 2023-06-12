import React, { useEffect, useState, useCallback } from 'react';

export default function UseCallback1() {
  const [num, setNum] = useState(0);
  const [text, setText] = useState('');

  const handleClick = useCallback(() => {
    setText(`You wrote  : ${num}`);
  }, [num])

  useEffect(() => {
    console.log('handleClick has been changed');
  }, [handleClick]);

  return (
    <>
      <input type="number" value={num} onChange={(e) => setNum(parseInt(e.target.value))} />
      <button onClick={handleClick}>Call a Func</button>
      <p>{text}</p>
    </>
  );
}
