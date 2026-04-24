// rcc
import React, { Component } from 'react'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default class Busca extends Component {
    state = {
        termoDeBusca: ''
    }
    onTermoAlterado = (evento) => {
        console.log(evento.target)
        this.setState({ termoDeBusca: evento.target.value })
    }

    onFormSubmit = (evento) => {
        evento.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className='flex flex-column'>
                    {/* componente de texto com icone e botão */}
                    <IconField iconPosition="left">
                        <InputIcon className="pi pi-search"></InputIcon>
                        <InputText placeholder="Search" className="w-full" onChange={this.onTermoAlterado} />
                    </IconField>
                    <Button label="Search" className="p-button-outlined mt-2" icon="pi pi-check" />
                </div>
            </form>
        )
    }
}