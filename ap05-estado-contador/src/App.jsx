// rafce
// hook
import React, { useState } from 'react'

const App = () => {
  let [contador, setContador] = useState(0)
  return (
    <div style={{textAlign: 'center', marginTop: 50}}>
      <h1>
        Meu contador: {contador}
      </h1>
      {/* Usar ++ não funciona: contador é constante e ++ retorna valor anterior */}
      <button 
        onClick={() => setContador(contador + 1)}  
        style={{padding: 4}}>
        Inclementar
      </button>
      <button 
        onClick={() => setContador(contador - 1)}
        style={{padding: 4}}>
          Decrementar
      </button>
      <hr />
      <button
        onClick={() => setContador(contador = 0)}
        style={{padding:4}}>
        Reiniciar
      </button>
    </div>
  )
}

export default App