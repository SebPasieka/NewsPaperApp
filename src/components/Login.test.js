import React from 'react'
import { render, screen, act, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import Login from '../components/Login'
import { Router , Route, StaticRouter } from "react-router-dom"
import MainContent from "../components/MainContent"
import AuthService from "../Services/authService"

describe('testing login',() =>{
    it('should login user when correct credentials are given', async ()=>{
        jest.spyOn(AuthService, "verify").mockImplementation(() => Promise.resolve())

       render(
            <Router history={{location: {pathname: "/login"}, listen: jest.fn(), push: jest.fn(), createHref: jest.fn()}}>
                <Login setAuth={jest.fn()}/>
                <Route path="/">
                    Hello World
                </Route>
            </Router>
        )

        await act( async () => {
            userEvent.type(screen.getByTestId('username'), 'username');
            userEvent.type(screen.getByTestId('password'), 'password');
            userEvent.click(screen.getByTestId('submit'));
        })

        expect(AuthService.verify).toHaveBeenCalled();
    })
    it('should inform user about failed login', async ()=>{
        jest.spyOn(AuthService, "verify").mockImplementation(() => Promise.reject())
        render(<Login setAuth={jest.fn()}/>);

        await act( async () => {
            userEvent.type(screen.getByTestId('username'), 'WrongUsername');
            userEvent.type(screen.getByTestId('password'), 'wrongPassword');
            userEvent.click(screen.getByTestId('submit'));
        })

        const failedMessage = screen.getByTestId('failedLoginMessage')
        expect(AuthService.verify).toHaveBeenCalled();
        expect(failedMessage).toHaveTextContent('login failed');
    })
})