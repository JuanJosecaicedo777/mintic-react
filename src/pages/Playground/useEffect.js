import { useState, useEffect } from 'react';

function MensajeCambio() {
  const [nombre, setNombre] = useState('');

  // Se ejecuta cada vez que cambia "nombre"
  useEffect(() => {
    console.log('El nombre cambió:', nombre);
  }, [nombre]);

  return (
    <div>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <p>Hola, {nombre || 'visitante'}!</p>
    </div>
  );
}

export default MensajeCambio;