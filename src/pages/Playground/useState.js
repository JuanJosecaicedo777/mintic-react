import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0); // Estado inicial: 0

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default MyComponent;