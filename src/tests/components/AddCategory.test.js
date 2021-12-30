import React from 'react';
// import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory'


describe('Pruebas en <AddCategory />', () => {
    
    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    })
    
    test('debe mostrar el componente correctamente', async() => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });

        const props = wrapper.props();

        expect( props.children.props.value ).toBe( value );

    })

    test('no debe postear la información con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    })

    test('debe llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo';

        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} })
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        expect( wrapper.props().children.props.value ).toBe( '' );

    })
    
})
