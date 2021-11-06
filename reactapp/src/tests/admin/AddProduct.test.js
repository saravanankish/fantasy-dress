import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AddProduct from '../../components/admin/AddProduct/AddProduct';
import { MemoryRouter } from 'react-router-dom';


describe('Admin AddProduct Component', () => {

    const addProduct = render(<MemoryRouter><AddProduct /></MemoryRouter>);

    const addDressBody = screen.queryByTestId('addDressBody');
    const dressName = screen.queryByTestId('dressName');
    const dressPrice = screen.queryByTestId('dressPrice');
    const dressDescription = screen.queryByTestId('dressDescription');
    const dressImageURL = screen.queryByTestId('dressImageURL');
    const dressQuantity = screen.queryByTestId('dressQuantity')
    const addDressButton = screen.queryByTestId('addDressButton')

    test('feAdminAddProduct1', () => {
        expect(addDressBody).toBeTruthy();
        expect(dressName).toBeTruthy();
        expect(dressPrice).toBeTruthy();
        expect(dressDescription).toBeTruthy();
        expect(dressImageURL).toBeTruthy();
        expect(dressQuantity).toBeTruthy();
        expect(addDressButton).toBeTruthy();  
        
        fireEvent.change(dressName, {target : {value : 'testDressName'}})
        expect(dressName.value).toBe('testDressName');

        fireEvent.change(dressPrice, {target : {value : '5'}})
        expect(dressPrice.value).toBe('5');

        fireEvent.change(dressDescription, {target : {value : 'Dress Description'}})
        expect(dressDescription.value).toBe('Dress Description');

        fireEvent.change(dressImageURL, {target : {value : 'dress URL'}})
        expect(dressImageURL.value).toBe('dress URL');

        fireEvent.change(dressQuantity, {target : {value : '120'}})
        expect(dressQuantity.value).toBe('120');
    })
 
})