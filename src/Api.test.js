import React from 'react';
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import 'regenerator-runtime/runtime';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import Movie from './Pages/Movie';
import { MemoryRouter } from 'react-router';

describe('Movie 컨텐츠 관련 API 테스트', () => {
    const mock = new MockAdapter(axios, { delayResponse: 200 });
    const data = {
        adult: false,
        backdrop_path: "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
        genre_ids: [14, 28, 12, 878, 53],
        id: 460465,
        original_language: "en",
        original_title: "Mortal Kombat",
        overview: "Washed-up MMA fighter Cole Young,",
        popularity: 6382.461,
        poster_path: "/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg",
        release_date: "2021-04-07",
        title: "Mortal Kombat",
        video: false,
        vote_average: 7.8,
        vote_count: 2004
    };

    mock
        .onGet('https://api.themoviedb.org/3/movie/now_playing')
        .reply(200, {
            data
        });
    test('nowPlaying API method 테스트 - 데이터가 문제없이 화면에 로드되는지 확인', async() => {

        const { findByTestId } = render( <MemoryRouter><Movie /></MemoryRouter>);

        await waitFor(() => findByTestId('loading-text')); 
        await waitFor(() => findByTestId('section-title'));
    });
});