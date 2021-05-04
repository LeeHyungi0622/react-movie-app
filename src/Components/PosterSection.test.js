import React from 'react';
import PosterSection from './PosterSection';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Poster from './Poster';
import { MemoryRouter } from 'react-router';

describe('<PosterSection/> 컴포넌트 테스트', () => {
    let sampleMovieInfo;
    let posterSection;
    beforeEach(() => {
        sampleMovieInfo = {
            key: 1,
            id: 1,
            imageUrl: '',
            title: 'movie-title',
            rating: 'movie-rating',
            year: 2021,
            isMovie: true
        };
        posterSection = render(<MemoryRouter><PosterSection title="Now playing"><Poster {...sampleMovieInfo}/></PosterSection></MemoryRouter>);
    });

    test('<PosterSection/> 컴포넌트가 문제없이 렌더링된다.', () => {
        render(<MemoryRouter><PosterSection title="Now playing"><Poster {...sampleMovieInfo}/></PosterSection></MemoryRouter>);
    });

    test('<PosterSection/> 컴포넌트에 props를 전달해서 정상적으로 렌더링이 된다.',() => {
        const { getByTestId } = posterSection;
        expect(getByTestId('section-title')).toBeTruthy();
        const sectionTitle = screen.getByTestId('section-title');
        expect(sectionTitle).toBe('Now playing');
        expect(getByTestId('poster-title')).toBeTruthy();
        expect(getByTestId('poster-year')).toBeTruthy();
    });
});

