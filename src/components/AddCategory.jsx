import { useState } from 'react'

export const AddCategory = ( { onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ( { target } ) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();       
        if( inputValue.trim().length <= 1 ) return;     

        onNewCategory( inputValue );
        // setCategories( categories => [ inputValue, ...categories] );
        setInputValue('');
    }

  return (
    //NO USO FRAGMENTO EN ESTE CASO PORQUE ES 1 SOLO ELEMENTO, Y EL RESTO SON HIJOS
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar gifts"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
    
  )
}
