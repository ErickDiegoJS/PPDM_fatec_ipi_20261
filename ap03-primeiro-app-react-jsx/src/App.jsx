 import './style.css'
 export default () => {

  const estiloBotão ={marginTop: 12, paddingTop: 8, paddingBotton: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 16}

  const textoDoRotulo = 'Nome:'

  const obterTextoDoBotão = () => {
    return "Enviar"
  }

  const aoClicar = () => alert('clicou')
  return (
    <div style={{margin: 'auto', width: 768, backgroundColor: 'rgba(238, 238, 238, 1)', padding: 12, borderRadius: 8}}>
        <label className='rotulo' for="campoNome" style={{display: 'block', marginBottom:4}}>
          {textoDoRotulo}
        </label>
      <input
      id= "campoNome"
      style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}}
      type="text"></input> 
      <button style={estiloBotão} onClick={aoClicar}>{obterTextoDoBotão}</button>
    </div>
  )
}

// export default App