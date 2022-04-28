import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div>
      <h1>My Counter</h1>
      <h2 data-testid="my-counter">{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Add One</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Minus One</button>
    </div>
  );
}

