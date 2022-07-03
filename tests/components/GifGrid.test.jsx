import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

//Generar un mock de
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas de <GifGrid/>', () => { 
    
    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente.', () => { 
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category = { category }/> )    
        expect( screen.getByText( 'Cargando...') );
        expect( screen.getByText( category ) );

     })

     test('debe de mostrar items cuando se cargan las imagenes useFetchGifs ', () => { 
        
        const gifs = [ 
            {
                id: 'ABC',
                title: 'Batman',
                url: 'https://localhost/batman.jpg'
            },
            {
                id: 'ABC2',
                title: 'Robin',
                url: 'https://localhost/robin.jpg'
            } 
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid category = { category }/> )    

        expect( screen.getAllByRole('img').length ).toBe(2);

      })

 });

 GifGrid.propTypes = {
    category: PropTypes.string.isRequired
 }