import React, { useRef } from 'react';

function EnfocarInput() {
  const inputRef = useRef(null); // Creamos la referencia al input

  const enfocarInput = () => {
    inputRef.current.focus(); // Accedemos al DOM y lo enfocamos
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Escribe algo..." />
      <button onClick={enfocarInput}>boton</button>
    </div>
  );
}

export default EnfocarInput;