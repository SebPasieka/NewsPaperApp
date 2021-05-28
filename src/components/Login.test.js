import React from 'react'
import { render, screen, act } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import Login from '../components/Login'
import { Router , Route } from "react-router-dom"
import AuthService from "../Services/authService"

describe('testing login',() => {
    it('should login user when correct credentials are given', async ()=>{
        jest.spyOn(AuthService, "verify").mockImplementation(() => Promise.resolve())


       render(
            <Router history={{location: {pathname: "/login"}, listen: jest.fn(), push: jest.fn(), createHref: jest.fn()}}>
                <Login setAuth={jest.fn()}/>
            </Router>
        )

        await act( async () => {
            userEvent.click(screen.getByTestId('submit'));
        })

        expect(AuthService.verify).toHaveBeenCalled();
    })
    it('should inform user about failed login', async ()=>{
        jest.spyOn(AuthService, "verify").mockImplementation(() => Promise.reject())
        render(<Login setAuth={jest.fn()}/>);

        await act( async () => {
            userEvent.click(screen.getByTestId('submit'));
        })

        const failedMessage = screen.getByTestId('failedLoginMessage')
        expect(AuthService.verify).toHaveBeenCalled();
        expect(failedMessage).toHaveTextContent('login failed');
    })
})