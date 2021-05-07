import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Components/Header';
import { MemoryRouter } from 'react-router';



describe('header 컴포넌트 내부의 메인 메뉴관련 테스트 코드', () => {
    beforeEach(() => {
        render(<MemoryRouter><Header/></MemoryRouter>)
    });  

    test('Header 컴포넌트가 제대로 렌더링이 된다.',() => {
        render(<MemoryRouter><Header/></MemoryRouter>)
    });
    
    describe('header 컴포넌트에 메뉴들이 존재하는지 확인', () => {
        test('렌더링된 <App />컴포넌트의 header에 Movie 메뉴가 존재한다.', () => {
            const movieLinkEl = screen.getByTestId("movie-menu");
            expect(movieLinkEl).toBeInTheDocument();
        });
        test('렌더링된 <App />컴포넌트의 header에 TV 메뉴가 존재한다.', () => {
            const tvLinkEl = screen.getByTestId("tv-menu");
            expect(tvLinkEl).toBeInTheDocument();
        });
        test('렌더링된 <App />컴포넌트의 header에 Search 메뉴가 존재한다.', () => {
            const searchLinkEl = screen.getByTestId("search-menu");
            expect(searchLinkEl).toBeInTheDocument();
        });
    });


    describe('메뉴 클릭시 제대로 연결된 페이지가 렌더링되는지 확인하는 테스트 코드', () => {
        test('Movie 메뉴 클릭시 Movie page component가 렌더링된다.', () => {
            expect(screen.getByTestId('movie-menu')).toBeTruthy();
            fireEvent.click(screen.getByTestId('movie-menu'));
            expect(screen.findByTestId('movie-page-container')).toBeInTheDocument;
        });
        test('TV 메뉴를 클릭시 TV page component가 렌더링된다.', () => {
            expect(screen.getByTestId('tv-menu')).toBeTruthy();
            fireEvent.click(screen.getByTestId('tv-menu'));
            expect(screen.findByTestId('tv-page-container')).toBeInTheDocument;
        });
        test('Search 메뉴를 클릭시 Search page component가 렌더링된다.', () => {
            expect(screen.getByTestId('search-menu')).toBeTruthy();
            fireEvent.click(screen.getByTestId('search-menu'));
            expect(screen.findByTestId('search-page-container')).toBeInTheDocument;
        });
    });
});