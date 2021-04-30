import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Searchbar from '../components/Searchbar';
import '@testing-library/jest-dom/extend-expect';


describe('<Searchbar/>',  () => {

    it('allows user to input keyword', () => {
        const setSearch = jest.fn((value) => {})
        const { queryByPlaceholderText } = render(<Searchbar setSearch={setSearch}/>)
        const searchInput = queryByPlaceholderText('search')

        fireEvent.change(searchInput, { target: { value: 'test' } })

        expect(searchInput.value).toBe('test')
    });

    it('triggers a search with the entered keyword when form is submitted', ()=>{})
});
