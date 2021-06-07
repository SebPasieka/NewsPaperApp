import React from 'react';
import {act, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainContent from './mainContent';
import SandboxApi from './sandboxApi';

describe('<MainContent/>', () => {

    it('renders searchbar and article list', async () => {
        jest.spyOn(SandboxApi, 'fetchArticles').mockResolvedValue([])

        await act(() => {
            render(<MainContent/>);
        });

        const searchbar = screen.getByTestId('searchbar');
        const articlelist = screen.getByTestId('articlelist');

        expect(searchbar).toBeInTheDocument();
        expect(articlelist).toBeInTheDocument();
    })

    it('loads the initial documents from backend', async () => {

        // mocking the result ensures that we do not rely on making an actual call
        jest.spyOn(SandboxApi, 'fetchArticles').mockResolvedValue([])

        // internally the component is using promises ... we have to wait for the changes to take place
        // see more at https://testing-library.com/docs/dom-testing-library/api-async/
       await act(() => {
            render(<MainContent/>);
        });

        expect(SandboxApi.fetchArticles).toHaveBeenCalled();
    })

})