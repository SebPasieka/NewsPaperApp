import React from 'react'
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import Login from '../components/Login'


describe('testing login',() =>{
    it('should inform user about failed login',()=>{
        render(<Login />);

        userEvent.type(screen.getByTestId('username'), 'invaledUser');
        userEvent.type(screen.getByTestId('password'), 'invaledPassword');
        userEvent.click(screen.getByTestId('submit'));

        const failedMessage = screen.getByTestId('failedLoginMessage')
        expect(failedMessage).toHaveTextContent('login failed');
    })
})