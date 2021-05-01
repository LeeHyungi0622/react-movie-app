import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App /> component', () => {
    beforeEach(() => {
        render(<App />);
    });
    test('<App /> 컴포넌트가 문제없이 rendering된다.',() => {
        render(<App/>);
    });
    test('렌더링된 <App />컴포넌트의 header에 Movie 메뉴가 존재한다.', () => {
        const movieLinkEl = screen.getByText("Movie");
        expect(movieLinkEl).toBeInTheDocument;
    });
    test('렌더링된 <App />컴포넌트의 header에 TV 메뉴가 존재한다.', () => {
        const tvLinkEl = screen.getByText("TV");
        expect(tvLinkEl).toBeInTheDocument;
    });
    test('렌더링된 <App />컴포넌트의 header에 Search 메뉴가 존재한다.', () => {
        const searchLinkEl = screen.getByText("Search");
        expect(searchLinkEl).toBeInTheDocument;
    });
});