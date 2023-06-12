import React, { useEffect, useState, useMemo } from 'react';

export default function Question() {
  const [countMeal, setCountMeal] = useState(0);
  const [isKorea, setIsKorea] = useState(false);

  const location = useMemo(() => {
    return {
      country: isKorea ? 'Korean' : 'Germany',
    };
  }, [isKorea]);

  useEffect(() => {
    console.log('useEffect 호출');
  }, [location]);

  return (
    <>
      <h2>하루에 몇끼 먹어요?</h2>
      <input type="number" value={countMeal} onChange={(e) => setCountMeal(parseInt(e.target.value))} />
      <hr />
      <h2>Where are you now?</h2>
      <p>Country : {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>let's leave</button>
    </>
  );
}
