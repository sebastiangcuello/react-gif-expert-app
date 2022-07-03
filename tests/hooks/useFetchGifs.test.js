import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


describe('Prueba de hook useFetchGifs.js', () => { 
    
    test('debe de regresar el estado inicial.', () => { 
        
        //result => resultado del hook
        //unmount => resultado cuando el hook es desmontado
        //rerender => re reenderizar el hook
        const { result } = renderHook( () => useFetchGifs('One Punch') );

        const { images, isLoading } = result.current;

        expect( images.length ).toBe( 0 );
        expect( isLoading ).toBeTruthy();

     })

     test('debe de retornar un arreglo de imagenes y el isLoading en false.', async() => { 
        
        const { result } = renderHook( () => useFetchGifs('One Punch') );

        //Como tiene una función async, tengo que esperar a que termine
        //utilizo waitFor para que espere hasta que haya alguna imagen
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan( 0 ),
            {
                timeout: 3000
            }
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan( 0 );
        expect( isLoading ).toBeFalsy();

     })

 })