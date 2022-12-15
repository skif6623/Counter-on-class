import { useState, useEffect, useRef } from 'react';

export function SkipEffect() {
  const [count, setCount] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current === true) {
      // console.log(isFirstRender.current);
      isFirstRender.current = false;
      return;
    }
    console.log(`Виконується useEffect - ${Date.now()}`);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <p>
        <code>useEffect </code>
      </p>
    </div>
  );
}
