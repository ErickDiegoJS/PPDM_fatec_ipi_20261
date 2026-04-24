import React from 'react'

const Imagem = ({ src, alt }) => {
    return (
        <div className="col-12">
                <img src={src} alt={alt} />
        </div>
    )
}

export default Imagem