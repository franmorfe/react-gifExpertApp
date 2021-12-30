import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


const title = 'Esto es un título';
const url = 'https://localhost/fake_img.jpg';
const wrapper = shallow( <GifGridItem title={ title } url={ url } />);


describe('Pruebas en <GitGridItem />', () => {
    
    test('debe mostrar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    })

    test('debe tener un párrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    })

    test('debe tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    })

    test('debe tener la clase animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        expect( div.prop( 'className' ).includes( 'animate__fadeIn' ) ).toBe( true );

    })
    
    
    
    

})
