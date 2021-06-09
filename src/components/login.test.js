import React from 'react'
import { render, screen, act } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import Login from '../components/login'
import { Router , Route } from "react-router-dom"
import AuthService from "../services/authService"

describe('testing login',() => {
    it('should login user when correct credentials are given', async ()=>{
        jest.spyOn(AuthService, "verify").mockImplementation(() => Promise.resolve())


        let push = jest.fn();
        let history = {location: {pathname: "/login"}, listen: jest.fn(), push: push, createHref: jest.fn()};
        render(
            <Router history={history}>
                <Login setAuth={jest.fn()}/>
            </Router>
        )

        await act( async () => {
            userEvent.click(screen.getByTestId('submit'));
        })

        expect(AuthService.verify).toHaveBeenCalled();
        expect(push).toHaveBeenCalledWith("/");
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