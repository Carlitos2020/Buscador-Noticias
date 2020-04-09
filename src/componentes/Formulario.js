import React from 'react'
import useSelect from '../hooks/useSelect'

const Formulario = ({ guardarCategoria }) => {

    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnología' },
    ]

    // utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    const categoriaEscogida = e => {
        e.preventDefault();
        guardarCategoria(categoria);
    }


    return (
        <div className="row bg-dark m-5 p-3" >
            <div className="col-12 col-m8 offset-md-2">
                <form onSubmit={categoriaEscogida} className> 

                    {/* useSelect */}
                    <SelectNoticias />

                    <input 
                    type="submit" 
                    className="btn btn-danger d-inline ml-3"
                    />

                </form>
            </div>
        </div>
    )
}

export default Formulario
