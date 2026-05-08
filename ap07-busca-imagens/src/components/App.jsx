// rafce
import React from 'react'
import Busca from './Busca'
import pexelsClient from '../utils/pexelsClient.'
// import { createClient } from 'pexels'
import ListaImagem from './ListaImagem'
import PexelsLogo from './PexelsLogo'

export default class App extends React.Component {

  state = {
    photos: []
  }

  onBuscaRealizada = (termoDeBusca) => {
    pexelsClient.get('/search', {
      params: {query: termoDeBusca}
    })
    .then(result => this.setState({photos: result.data.photos}))
  } 

  // pexelsClient = null
//  onBuscaRealizada = (termoDeBusca) => {
//     console.log(termoDeBusca)
//     this.pexelsClient.photos.search({
//       query: termoDeBusca
//     })
//       .then(result => {
//         this.setState({ photos: result.photos })
//       })
//   }
  // componentDidMount() {
  //   this.pexelsClient = createClient('qiZh9wwyjrIbYVFZPPM9ebcZ4TOhaGjDLyECly79IRnkscWY1npzS3qJ')
  // }

 
  render() {
    return (
      <div className="grid justify-content-center m-auto w-9 border-round border-1 border-600">
        <div className="col-12">
        <PexelsLogo />
          <h1>Exibir imagem da Pexels!</h1>
        </div>
        <div className="col-12">
          <Busca
            onBuscaRealizada={this.onBuscaRealizada} />
        </div>
        <div className="col-12">
          <div className="grid">

            <ListaImagem photos={this.state.photos} 
            imgStyle={"col-12 md:col-6 lg:col-4 xl:col-3"}/>
          </div>
        </div>

      </div>
    )
  }
}