import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserNavbar from "../components/UserNav/UserNav";
import { MemoryRouter } from 'react-router-dom';

describe('UserNavbar Component', () => {
    
    const userNav = render(<MemoryRouter><UserNavbar /></MemoryRouter>);

    const dressCartButton = screen.queryByTestId('dressCartButton');
    const dressHomeButton = screen.queryByTestId('dressHomeButton');
    const dressOrderButton = screen.queryByTestId('dressOrderButton');
    const logoutButton = screen.queryByTestId('logoutButton');
    const userNavbar = screen.queryByTestId('userNavbar');

    test('feUserNavbar1', () => {
        expect(dressCartButton).toBeTruthy();
        expect(dressHomeButton).toBeTruthy();
        expect(dressOrderButton).toBeTruthy();
        expect(logoutButton).toBeTruthy();
        expect(userNavbar).toBeTruthy();
    });

})