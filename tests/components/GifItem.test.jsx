import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas de <GifItem />', () => { 
    
    const title = 'Goku';    
    const url = 'https://one-punch.com/Goku';    

    test('should de hacer match con el snapshot', () => { 
        
        const { container } = render( <GifItem title = { title } url = { url } /> );
        expect( container ).toMatchSnapshot();

    })

    test('debe de mostrar la imagen con el URl y el ALT indicado', () => { 
        
        render( <GifItem title = { title } url = { url } />); 
        //screen.debug();

        // Podemos testear campo a campo
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );

        //O podemos testear desestructurar

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
        
     });

     test('debe de mostrar el titulo en el componente', () => { 
        
        render( <GifItem title = { title } url = { url }/>);
        expect( screen.getByText( title )).toBeTruthy();

      });

 });