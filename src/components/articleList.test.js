import {render, screen} from '@testing-library/react';
import React from 'react';
import ArticleList from './articleList';
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

    it('should render a link of an article', () => {

        const items = givenSomeLink();
        render(<ArticleList articles={items}/>)

        const articleLink = screen.getByTestId('article-link')

        expect(articleLink).toHaveAttribute('href', 'www.welt.de')
    })
});

const givenSomeLink = () => {
    return [{url: 'www.welt.de'}];
}
const givenSomeArticles = () => {
    return [{id: 'someId1'}, {id: 'someId2'}, {id: 'someId3'}];
}