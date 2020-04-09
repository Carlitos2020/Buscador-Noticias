import React, {useEffect, useState } from 'react';
import Error from './componentes/Error'
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'
import Noticias from './componentes/Noticias'
import Spinner from './componentes/Spinner/Spinner'

// const url = 
function App() {

  const [categoria, guardarCategoria] = useState('')
  const [noticias, setNoticias] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  


  const appID = "4e9aba53579b4cceb286a75493c5ef2c";

  useEffect(() => {

    const ConsultarNoticias =async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${appID}`;
      setLoading(true)
      try {
        let res = await fetch(url);
        let data = await res.json();

        setNoticias(data.articles)
        setLoading(false)
    } catch (error) {
        setLoading(false) 
        setError(error)
    }
    }
    ConsultarNoticias()
    
  }, [categoria])

  const mostrar= error ?  <Error error={error} /> : <Noticias noticias={noticias} loading={loading}/>

  return (
    <div className="container">
        <Header />
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        {loading &&  <Spinner /> }
        {mostrar}
    </div >

  );
}

export default App;
