//https://reactjs.org/docs/strict-mode.html

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    //NO COLOCAR FUNCIONES DENTRO DE UN FUNCTIONAL COMPONENT, PORQUE SE EJECUTARÍA CADA VEZ QUE CAMBIA DE ESTADO...

    //El primer parametro es el callback, es decir la función que quiero ejecutar
    //El 2do parametro es una lista de las dependencias que se tienen que cumplir para que se ejecute el callback
    //Sí dejo el array de dependencias VACIO [], entonces se ejecuta UNA SOLA VEZ el callback.

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
        
            <h3>{ category }</h3>
            {/* <LoadingMessage isLoading = { isLoading }/> */}
            {
              isLoading && ( <h2> Cargando... </h2> )
            }
            
            <div className="card-grid">
            {     
                images.map( ( image ) => (
                     <GifItem 
                        key= { image.id }
                        { ...image }   //para envíar todas las properties
                     />
                ))      
            }
            </div>

        </>
    )
}
