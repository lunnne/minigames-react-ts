import React, { useMemo, useState } from 'react';

const hardCalculate = (num: number) => {
  for (let i = 0; i < 99999999; i++) {}
  return num + 10000;
};

const easyCalculate = (num: number) => {
  return num + 1;
};

export default function Calculator() {
  const [value, setValue] = useState(1);
  const [easyValue, setEasyValue] = useState(1);

  const hardResult = useMemo(() => {
    hardCalculate(value);
  }, [value]);

  const easyResult = useMemo(() => {
    easyCalculate(easyValue);
  }, [easyValue]);

  return (
    <>
      <div>hard Calculator</div>
      <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />+ 10000 = {hardResult}
      <div>easy Calculator</div>
      <input type="number" value={easyValue} onChange={(e) => setEasyValue(parseInt(e.target.value))} />+ 10000 = {easyResult}
    </>
  );
}
