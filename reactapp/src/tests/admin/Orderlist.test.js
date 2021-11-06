import React from 'react';
import { render, screen } from '@testing-library/react';
import Orderlist from '../../components/admin/Orderlist/Orderlist';
import { MemoryRouter } from 'react-router-dom';


describe('Admin Orderlist Component', () => {

    const orderList = render(<MemoryRouter><Orderlist /></MemoryRouter>);

    const adminOrderBody = screen.queryByTestId('adminOrderBody');

    test('feAdminOrderlist1', () => {
        expect(adminOrderBody).toBeTruthy();
    })

})