import {render, screen} from '@testing-library/react';
import React from 'react';
import ArticleList from './ArticleList';
import '@testing-library/jest-dom/extend-expect';


describe('<ArticleList/>', () => {

    it('should render a list of items received via props', () => {

        const items = givenSomeArticles();
        render(<ArticleList articles={items}/>)

        const expectedItemsLength = items.length;
        const articleEntries = screen.getAllByTestId('article-entry');

        expect(articleEntries).toHaveLength(expectedItemsLength);
    })

    it('should render -nothing found- when list of items received via props is empty', () => {

        render(<ArticleList articles={[]}/>)

        const nothingFoundMsg = screen.getByTestId('nothing-found-message');

        expect(nothingFoundMsg).toHaveTextContent('nothing found');
    })
});


const givenSomeArticles = () => {
    return [{id: 'someId1'}, {id: 'someId2'}, {id: 'someId3'}];
}