import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Router from './Router';


describe('header 컴포넌트 내부의 메인 메뉴관련 테스트 코드', () => {
    let testId;
    beforeEach(() => {
        testId  = render(<Router />);
    });  

    test('Router 컴포넌트가 제대로 렌더링이 된다.',() => {
        render(<Router/>);
    });
    describe('메뉴 클릭시 제대로 연결된 페이지가 렌더링되는지 확인하는 테스트 코드', () => {
        test('Movie 메뉴 클릭시 Movie page component가 렌더링된다.', () => {
            const { getByTestId } = testId;
            expect(getByTestId('movie-menu')).toBeTruthy();
            fireEvent.click(getByTestId('movie-menu'));
            expect(getByTestId('movie-page-container')).toBeInTheDocument;
        });
        test('TV 메뉴를 클릭시 TV page component가 렌더링된다.', () => {
            const { getByTestId } = testId;
            expect(getByTestId('tv-menu')).toBeTruthy();
            fireEvent.click(getByTestId('tv-menu'));
            expect(getByTestId('tv-page-container')).toBeInTheDocument;
        });
        test('Search 메뉴를 클릭시 Search page component가 렌더링된다.', () => {
            const { getByTestId } = testId;
            expect(getByTestId('search-menu')).toBeTruthy();
            fireEvent.click(getByTestId('search-menu'));
            expect(getByTestId('search-page-container')).toBeInTheDocument;
        })
    });
});