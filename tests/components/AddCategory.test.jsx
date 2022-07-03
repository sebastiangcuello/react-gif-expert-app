import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from '../../src/components/AddCategory';


describe('Prueba de <AddCategory />', () => { 
    
    test('debe de cambiar el valor de la caja de texto', () => { 
        
        //Renderizo el elemento de prueba
        render( <AddCategory onNewCategory={ () => {} } />)

        //Obtengo el input
        const input = screen.getByRole('textbox');

        //Disparamos el evento OnChange
        //El profe usa .input, pero yo hubiera usado el .change, que funciona tmb.
        //No entiendo bien porque usa el evento "input"
        fireEvent.input( input, { target: { value: 'Goku' } } );

        expect( input.value ).toBe('Goku');
    
     })

     test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        
        const inputValue = 'Saitama';
        //JEST FUNCION => Mock

        const onNewCategory = jest.fn();

        // TODO: ????
        render( <AddCategory onNewCategory={ onNewCategory } />)
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 );
        expect( onNewCategory ).toHaveBeenLastCalledWith( inputValue );    
    
     })

     test('no debe de llamar el onNewCategory si el input esta vacio', () => { 
  
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } />)
        
        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
        expect( onNewCategory ).not.toHaveBeenCalled();
    
     })

 });