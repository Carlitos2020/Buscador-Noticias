import React from 'react'
import Lista from './ListadoNoticias'

const Noticias = ({noticias,loading}) => {
        
    if(loading === true) return null


    return (
        <div className="card-columns">
        
           { noticias.map((noticia)=>(
                <Lista 
                    key={noticia.url}
                    noticia={noticia}
                />
                
            ))
           }
        </div>
    )
}

export default Noticias
