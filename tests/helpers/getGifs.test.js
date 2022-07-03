import { getGifs } from '../../src/helpers/getGifs';


describe('Prueba de getGifs.js', () => { 
    
    test('debe de retornar un array', async () => { 
        
        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBeGreaterThan( 0 );

        expect( gifs[0] ).toEqual( {
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        });
     })
 });