
import React, { useState } from 'react'

const App = () => {
  const [nome, setNome] = useState(null)
  const [classe, setClasse] = useState('No class')
  const [nivel, setNivel] = useState(0) 
  const [mensagemDeErro, setMensagemDeErro] = useState(null)
  const [personagemCriado, setPersonagemCriado] = useState(null)

  const classes = {
    'Mago' : 'hat-wizard',
    'Guerreiro' : 'hand-fist',
    'Arqueiro' : 'crosshairs',
    'Curandeiro' : 'hand-holding-medical',
    'No class' : 'circle-question'
  }

  const percent = (valor) => {
    return Math.round((valor/20)*100)
  }

  return (
     <div className='container mt-2 mb-2'>
      <div className="row-justfy-content-">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h1 style={{color: '#094a79', fontWeight: 'bold', textAlign: 'center' }}>Criador  de Personagem RPG</h1>
              <div className="align-items-center border rounded mb-12">
                <div className="w-100 m-3">
                  <p className="center ">
                    Nome do Personagem
                  </p>
                  <input type="text" 
                          className="card-header text-muted"
                          value={nome}
                          onChange={(e) => setNome(e.target.value)} />
                </div>
                
                <div className="w-100 m-3">
                  <p className="center ">
                    Classe
                  </p>

                  <select value={classe} onChange={(e) => setClasse(e.target.value)} >
                    <option value="No class">-</option>
                    <option value="Mago">Mago</option>
                    <option value="Guerreiro">Guerreiro</option>
                    <option value="Arqueiro">Arqueiro</option>
                    <option value="Curandeiro">Curandeiro</option>
                  </select>
                </div>
                <div className='w-100 m-3'>
                  <p>
                    Nível:
                  </p>
                  <div className="d-flex">
                    <button 
                      onClick={nivel > 0 ? () => setNivel(nivel - 1) : () => setNivel(nivel)}  
                      className='w-25 rounded me-3'
                      style={{padding: 4}}>
                      -
                    </button>
                    <h1>
                      {nivel}
                    </h1>
                    <button 
                      onClick={nivel < 20 ? () => setNivel(nivel + 1) : () => setNivel(nivel)}
                      className='w-25 rounded ms-3'
                      style={{padding: 4}}>
                        +
                    </button>
                    <p className="m-2">(1 - 20)</p>
                  </div>
                </div>
              </div>
              <div className="align-items-center rounded mt-3 ms-5 me-5">
                <div 
                  className="align-items-center border rounded col-12">
                    <div className="text-center rounded" style={{background: 'linear-gradient(to bottom, lightcoral 25%, white 45%)', border: '2px solid indianred'}}>
                      <div className="">
                        <div className="mt-3">
                          <i className={`fa-solid fa-4x fa-${classes[classe]}`}></i>
                        </div>
                        <div className="">
                          {
                            nome ? `${nome}` :`Name`
                          }
                        </div>
                        <div className="">
                          {
                            classe ? `${classe}` : ``
                          }
                        </div>
                        <div className="">
                          {
                            nivel == 20 ? `MÁX` : nivel ? `${nivel}` : `0`
                            
                          }
                        </div>
                      </div>
                      <div className="m-3 rounded" style={{backgroundColor: '#ddd9d9'}}>
                        <div className="rounded" style={{fontSize: '11px',height: '20px', backgroundColor: '#cf5b5b', width: `${percent(nivel)}%`, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}>
                          {
                            nivel ? `${percent(nivel)}%` : ``
                          }
                        </div>
                      </div>
                      <p style={{fontSize: '10px', color: '#797979'}}>
                        {
                          nivel ? `${nivel}/20` : `0/20`
                        }
                      </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App