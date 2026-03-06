import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"

const App = () => {
    const textoOK = "Já Recebi"
    const textoNOK ="Não Recebi"
    const funcaoOK = () => alert('Agradeçemos o feedback')
    const funcaoNOK = () => alert('Verificaremos')
    const componenteFeedback = (
        <Feedback 
            textoOK={textoOK}
            textoNOK={textoNOK}
            funcaoOK={funcaoOK}
            funcaoNOK={funcaoNOK}/>
    )
    // Define um elemento contenedor responsivo com largura máxima
    return <div className="container border mt-2">
        <div className="row">
            <div className="col-12">
                <i className="fa fa-hippo fa-2x p-3"></i>
            </div>
        </div>
        {/* Cria uma linha dentro do container */}
        <div className="row">
            {/* 
                Define as 12 colunas dentro de uma row 
                col-12: 12 unidades (100% da largura)
                col-sm-12: 12 unidades em telas pequenas
                col-lg-6: 6 unidades (50%) em telas grandes
                col-xxl-3: 3 unidades (25%) em telas extra-grandes
            */}
            <div className="col-sm-12 col-lg-6 col-xxl-3 border">
                <Cartao cabecalho="22/04/2026">
                    <Pedido
                        data="15/06/2024"
                        icone="alarm-clock"
                        titulo="Despertador"
                        descricao="Um despertador analogico" />
                        {componenteFeedback}
                </Cartao>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3 border">
                <Cartao cabecalho="17/04/1024">
                    <Pedido
                        data="15/06/2024"
                        icone="shirt"
                        titulo="Camisa"
                        descricao="Uma camisa preta" />
                        {componenteFeedback}
                </Cartao>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3 border">
                <Cartao cabecalho="22/04/2024">
                    <Pedido
                        data="15/06/2024"
                        icone="bowling-ball"
                        titulo="Bola de boliche"
                        descricao="Uma bola pesada" />
                        {componenteFeedback}
                </Cartao>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3 border">
                <Cartao cabecalho="31/12/2025">
                    <Pedido
                        data="15/06/2024"
                        icone="bicycle"
                        titulo="Bicicleta"
                        descricao="100% sustentavel" />
                        {componenteFeedback}
                </Cartao>
            </div>
        </div>
    </div>
}

export default App