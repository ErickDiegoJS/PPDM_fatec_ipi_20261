// rafce
import React from 'react'
import Busca from './Busca'
import { CraeteClient } from 'pexels'

export default class App extends React.Component{

  pexelsClient = null

  componentDidMount(){
    this.pexelsClient = createClient('qiZh9wwyjrIbYVFZPPM9ebcZ4TOhaGjDLyECly79IRnkscWY1npzS3qJ')
  }

  onBuscaRealizada = (termoDeBusca) => {
    console.log(termoDeBusca)
  }
  render(){
    return (
      <div className="grid justify-content-center m-auto w-9 border-round border-1 border-400">
        <div className="">
          <h1>Exibir imagem de...</h1>
          <Busca 
            onBuscaRealizada={this.onBuscaRealizada} />
        </div>
      </div>
    )
  }
}