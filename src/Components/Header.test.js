import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router';



describe('header 컴포넌트 내부의 메인 메뉴관련 테스트 코드', () => {
    let header;
    beforeEach(() => {
        header = render(<MemoryRouter><Header/></MemoryRouter>)
    });  

    test('Header 컴포넌트가 제대로 렌더링이 된다.',() => {
        render(<MemoryRouter><Header/></MemoryRouter>)
    });
    describe('메뉴 클릭시 제대로 연결된 페이지가 렌더링되는지 확인하는 테스트 코드', () => {
        test('Movie 메뉴 클릭시 Movie page component가 렌더링된다.', () => {
            const { getByTestId } = header;
            expect(getByTestId('movie-menu')).toBeTruthy();
            fireEvent.click(getByTestId('movie-menu'));
            expect(screen.findByTestId('movie-page-container')).toBeInTheDocument;
        });
        test('TV 메뉴를 클릭시 TV page component가 렌더링된다.', () => {
            const { getByTestId } = header;
            expect(getByTestId('tv-menu')).toBeTruthy();
            fireEvent.click(getByTestId('tv-menu'));
            expect(screen.findByTestId('tv-page-container')).toBeInTheDocument;
        });
        test('Search 메뉴를 클릭시 Search page component가 렌더링된다.', () => {
            const { getByTestId } = header;
            expect(getByTestId('search-menu')).toBeTruthy();
            fireEvent.click(getByTestId('search-menu'));
            expect(screen.findByTestId('search-page-container')).toBeInTheDocument;
        })
    });
});