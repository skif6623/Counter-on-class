import { useEffect, useRef, useState } from 'react';

export function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  let intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );

    return () => clearInterval(intervalId.current);
  }, []);

  return <div>{time}</div>;
}
