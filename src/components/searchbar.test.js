import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Searchbar from '../components/searchbar';
import '@testing-library/jest-dom/extend-expect';


describe('<Searchbar/>',  () => {

    it('allows user to input keyword', () => {

        render(<Searchbar setSearch={jest.fn()}/>)

        const searchInput = screen.getByTestId('search-input')
        fireEvent.change(searchInput, { target: { value: 'test' } })

        expect(searchInput.value).toBe('test')
    });

    it('triggers a search with the entered keyword when form is submitted', ()=>{

        // render component
        const searchHandler = jest.fn();
        render(<Searchbar setSearch={searchHandler}/>)

        // change values
        const searchInput = screen.getByTestId('search-input')
        fireEvent.change(searchInput, { target: { value: 'test' } })

        // submit form
        const searchForm = screen.getByTestId('search-form');
        fireEvent.submit(searchForm)

        // expect handler to be called
        expect(searchHandler).toHaveBeenCalledWith('test')
    })
});
