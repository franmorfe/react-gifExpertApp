import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('debe mostrar el componente correctamente', async() => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe mostrar items cuando se cargan imágenes con useFetchGifs', () => {

        const gifs = [{
            id: 'id_fake',
            URL: 'https://localhost/url_fake',
            title: 'title_fake'
        }];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists()).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );


    })
    

})
