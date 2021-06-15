import React from 'react'
import Logout from "./logout"
import { render, screen, act } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import { Router } from "react-router-dom"
import 'jest-localstorage-mock'

describe('logout', () => {

    it('should redirect to login and remove the item in the localStorage after clicking the button', () => {
        let push = jest.fn();
        let history = {location: {pathname: "/"}, listen: jest.fn(), push: push, createHref: jest.fn()};
        const keyName = "credentials"
        localStorage.setItem(keyName,"testString")
        render(
            <Router history={history}>
                <Logout />
            </Router>
        )

        userEvent.click(screen.getByTestId('logoutButton'));

        expect(localStorage.getItem(keyName)).toBeNull()
        expect(push).toHaveBeenCalledWith("/login");
    })
})