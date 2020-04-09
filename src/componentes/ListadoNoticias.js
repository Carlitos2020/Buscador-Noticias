import React from 'react'



const ListadoNoticias = ({ noticia }) => {
    const { urlToImage, url, title, description, source } = noticia;

    const imagen = (urlToImage) ?
        <div className="card-img-top" >
            <img src={urlToImage} alt={title} className="img-fluid" />
            <span className="card-title">{source.name}</span>
        </div>
        : null;

    return (

  
        <div className="card m-3">
            {imagen}
            <div class="card-body">
                 <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="waves-effect waves-light btn btn-danger"
                >Ver Noticia Completa</a>
            </div>
         </div>
    )
}

export default ListadoNoticias
