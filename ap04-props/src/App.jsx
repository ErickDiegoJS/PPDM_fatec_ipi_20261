const App = () => (
    // Define um elemento contenedor responsivo com largura máxima
    <div className="container border mt-2">
        <div className="row">
            <div className="col-12">
                <i className="fa fa-hippo fa-2x p-3"></i>
            </div>
        </div>
        {/* Cria uma linha dentro do container */}
        <div className="row">
            {/* 
                Define as colunas dentro de uma row 
                col-12: 12 unidades (100% da largura)
                col-sm-12: 12 unidades em telas pequenas
                col-lg-6: 6 unidades (50%) em telas grandes
                col-xxl-3: 3 unidades (25%) em telas extra-grandes
            */}
            <div className="col-sm-12 col-lg-6 col-xxl-3 border">
                {/* .card-header+.card-body */}
                <div className="card">
                    <div className="card-header text-muted">15/04/2025</div>
                    <div className="card-body d-flex ">

                    <div className="d-flex align-items-center">
                    <i className="fa-solid fa-alarm-clock fa-2x"></i>
                    </div>
                    <div className="flex-grow-1 border rounded p-2">
                        <h4 className="text-center">Despertador</h4>
                        <p className="text-center">Despertador analogico</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3 border">
                <div className="py-2">
                    <div className="card">
                    <div className="card-header text-muted">05/03/2025</div>
                    <div className="card-body d-flex ">

                    <div className="d-flex align-items-center">
                    <i className="fa-solid fa-shirt fa-2x"></i>
                    </div>
                    <div className="flex-grow-1 border rounded p-2">
                        <h4 className="text-center">Camiseta</h4>
                        <p className="text-center">Camiseta preta</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3 border">
                <div className="py-2"><div className="card">
                    <div className="card-header text-muted">15/04/2025</div>
                    <div className="card-body d-flex ">

                    <div className="d-flex align-items-center">
                    <i className="fa-solid fa-bowling-ball fa-2x"></i>
                    </div>
                    <div className="flex-grow-1 border rounded p-2">
                        <h4 className="text-center">Bola de Boliche</h4>
                        <p className="text-center">Bola pesada</p>
                    </div>
                    </div>
                </div></div>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3 border">
                <div className="py-2">
                    <div className="card">
                    <div className="card-header text-muted">15/04/2025</div>
                    <div className="card-body d-flex ">

                    <div className="d-flex align-items-center">
                    <i className="fa-solid fa-bicycle fa-2x"></i>
                    </div>
                    <div className="flex-grow-1 border rounded p-2">
                        <h4 className="text-center">Bicicleta</h4>
                        <p className="text-center">Uma bicicleta 18 marchas</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
)

export default App