import { getGifs } from '../../helpers/getGifs'


describe('Pruebas con getGifs Fetch', () => {
    
    test('debe retornar 10 elementos', async() => {
        
       const gifs = await getGifs('One Punch');

       expect( gifs.length ).toBe( 10 );

    })

    test('debe retornar 0 elementos si no se pasa categoría por defecto', async() => {
        
        const gifs = await getGifs('');
 
        expect( gifs.length ).toBe( 0 );
 
     })
    

})
