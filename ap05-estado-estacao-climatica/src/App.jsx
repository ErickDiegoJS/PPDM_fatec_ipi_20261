// hook
import React, { useState } from 'react'

const App = () => {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [estacao, setEstacao] = useState(null)
  const [data, setData] = useState(null)
  const [icone, setIcone] = useState(null)
  const [hora, setHora] = useState(null)
  const [mensagemDeErro, setMensagemDeErro] = useState(null)

  const icones = {
    'Outono' : 'leaf',
    'Inverno' : 'snowFlake',
    'Verão' : 'sun',
    'Primavera' : 'seedling'
  }

  const obterEstacao = (dataAtual, latitude) => {
    const ano = dataAtual.getFullYear()
    const d1 = new Date(ano, 5, 21) // inicio do inverno/verão
    const d2 = new Date(ano, 8, 23) //inicion primavera/outono 
    const d3 = new Date(ano, 11, 22) //inicio do verão/inverno 
    const d4 = new Date(ano, 2, 21) // inicio do outono/primavera 
    const sul = latitude < 0
    if(dataAtual >= d1 && dataAtual < d2)
      return sul ? 'Inverno' : 'Verão'
    if(dataAtual >= d1 && dataAtual < d3)
      return sul ? 'Primavera' : 'Outono'
    if(dataAtual >= d3 || dataAtual < d4)
      return sul ? 'Verão' : 'Inverno'
    return sul ? 'Outono' : 'Primavera'

  }

  const obterLocalizaccao = () => {
    // Consultar a localização do usuario, registrando uma função callback
    window.navigator.geolocation.getCurrentPosition((position) => {
      // na função callback, obter data atual
      const dataAtual = new Date()
      // obter a estação climatica do usuario
      const estacao = obterEstacao(dataAtual, position.coords.latitude)
      // decidir qual é o icone certo 
      const icone = icones[estacao]
      // atualizar as variaveis de estado
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      setEstacao(estacao)
      setIcone(icone)
      setData(dataAtual.toLocaleDateString())
      setHora(dataAtual.toLocaleTimeString())

    }, (err) => {
      console.log(err)
      setMensagemDeErro('Tente novamente mais tarde')
    })
  }

  return (
    <div className='container mt-2'>
      <div className="row-justfy-content-">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div 
                className="d-flex align-items-center border rounded mb-12"
                style={{height: '6rem'}}>
                  <i className={`fa-solid fa-4x fa-${icone}`}></i>
                  <p className="w-75 ms-3 text-center fs-1">{estacao}</p>
              </div>
              <div>
                <p className="text-center">
                  {
                    latitude ?
                    `Cordenadas: ${latitude}, ${longitude}. Data: ${data} as ${hora}` :
                    mensagemDeErro ?
                    'É preciso permitir o acesso a localização para ver sua estação climatica' :
                    `Clique no botão para saber a sua estação` 
                  }
                </p>
              </div>
              <button 
                onClick={obterLocalizaccao}
                className="btn btn-outline-primary w-100 mt2">
                  Qual a minha estação
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App