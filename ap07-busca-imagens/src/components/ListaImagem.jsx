// rafce
import React from 'react'

const ListaImagem = ({photos, imgStyle}) => {
    return (
        photos.map((photo, key) => (
            <img imgStyle={imgStyle} src={photo.src.small} alt={photo.alt} />
        ))
    )
}


export default ListaImagem