import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../../components/admin/Dashboard/Dashboard';
import { MemoryRouter } from 'react-router-dom';


describe('Admin Dashboard Component', () => {

    const dashboard = render(<MemoryRouter><Dashboard /></MemoryRouter>);

    const adminDashboard = screen.queryByTestId('adminDashboard');
    const addDressButton = screen.queryByTestId('addDressButton');

    test('feAdminDashboard1', () => {
        expect(adminDashboard).toBeTruthy();
        expect(addDressButton).toBeTruthy();
    })

})