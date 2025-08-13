import type React from 'react';
import { useState } from 'react';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <button id="counter" onClick={() => setCount(count + 1)} type="button">
      {count}
    </button>
  );
};
