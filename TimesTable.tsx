import React, { useState, useRef } from 'react';

function TimesTable() {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputEl.current;
    if (parseInt(value) === first * second) {
      setResult('right!');
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      input?.focus();
    } else {
      setResult('wrong!');
      setValue('');
      input?.focus();
    }
  };
  return (
    <>
      <h1>
        {first} X {second} = ?
      </h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputEl} type="number" value={value} placeholder="type your answer here!" onChange={(e) => setValue(e.target.value)} />
        <button>Enter!</button>
      </form>
      <p>{result}</p>
    </>
  );
}

export default TimesTable;
