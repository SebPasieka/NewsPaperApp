import React from 'react'
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import Login from '../components/Login'
import { Router , Route, StaticRouter } from "react-router-dom"
import MainContent from "../components/MainContent"


describe('testing login',() =>{
    it('should successful login',()=>{
        // TODO results error, find new solution
        /*const renderComponent = render(
            <Router history={{location: {pathname: "/login"}, listen: jest.fn(), push: jest.fn(), createHref: jest.fn()}}>
                <Login setAuth={jest.fn()}/>
                <Route path="/">
                    Hello World
                </Route>
            </Router>
        )

         */
        render(
            <StaticRouter >
                <Login setAuth={jest.fn()}/>
            </StaticRouter>
        )

        userEvent.type(screen.getByTestId('username'), 'username');
        userEvent.type(screen.getByTestId('password'), 'password');
        userEvent.click(screen.getByTestId('submit'));


    })
    it('should inform user about failed login',()=>{
        render(<Login setAuth={jest.fn()}/>);

        userEvent.type(screen.getByTestId('username'), 'invaledUser');
        userEvent.type(screen.getByTestId('password'), 'invaledPassword');
        userEvent.click(screen.getByTestId('submit'));

        const failedMessage = screen.getByTestId('failedLoginMessage')
        expect(failedMessage).toHaveTextContent('login failed');
    })
})