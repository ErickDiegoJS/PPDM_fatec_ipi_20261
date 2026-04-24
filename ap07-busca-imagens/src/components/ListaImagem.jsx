// rafce
import React from 'react'

const ListaImagem = ({photos}) => {
    return (
        <div className="col-12">
            {
                photos.map((photo, key) => (
                    <img src={photo.src.small} alt={photo.alt} />
                ))
            }
        </div>
    )
}


export default ListaImagem