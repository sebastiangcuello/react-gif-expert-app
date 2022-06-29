//https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76
//https://es.reactjs.org/docs/faq-structure.html
//https://developers.giphy.com/docs/api/endpoint/#search

import { useState } from "react";
import { AddCategory, GifGrid } from './components'; //Esto por defecto busca el INDEX

export const GifExpertApp = () => {
  // IMPORTANTE => NO CONDICIONAR LOS HOOKS, NO PONERLOS DENTRO DE UN IF
  const [ categories, setCategories ] = useState([ 'One Punch' ]);

  const onAddCategory = ( newCategory ) => {

    if ( categories.includes(newCategory) ) return;

    // setCategories([ ...categories, newCategory ]); //=> Inserto al final
    setCategories([ newCategory, ...categories ]); // => Inserto al principio
    // setCategories( cat => [ ...cat, 'Valorant' ]); => Otra forma
  };

//   console.log(categories);

  return (
    <>
        {/* title */}
        <h1>GifExpertApp</h1>    

        {/* Input */}
        <AddCategory 
            // setCategories= { setCategories } 
            // onNewCategory= { value => onNewCategory(value) } 
            onNewCategory= { onAddCategory } 
        />

          {/* Listado de Gif */}
          { 
          //La key hay que pasarsela porque sino peta, 
          //a pesar de que dentro del componente no se este utilizando
              categories.map( ( category ) => (
                    <GifGrid 
                      key= { category } 
                      category= { category }/>
                  )) 
          }
        {/* Gif Item */}
    </>
  )
}
