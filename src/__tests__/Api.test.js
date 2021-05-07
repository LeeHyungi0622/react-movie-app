import React from 'react';
import '@testing-library/jest-dom';
import { screen, render, waitFor } from '@testing-library/react';
import 'regenerator-runtime/runtime';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import Movie from '../Pages/Movie';
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
        })
        .onGet('https://api.themoviedb.org/3/movie/upcoming')
        .reply(200, {
            data
        })

        beforeEach(async() => {
            render( <MemoryRouter><Movie /></MemoryRouter>);
            await waitFor(() => screen.findByTestId('loading-text'));
        });

        test('초기에 Loading 컴포넌트가 화면에 로드되는지 확인', async() => {
            await waitFor(() => screen.findByTestId('loading-text'));
        });

        test('nowPlaying API method 테스트 - 데이터가 문제없이 화면에 로드되는지 확인', async() => {
            await waitFor(() => expect(screen.getAllByText('현재 상영중인 영화')).toBeTruthy());
        });

        test('upcoming API method 테스트 - 데이터가 문제없이 화면에 로드되는지 확인', async() => {
            await waitFor(() => expect(screen.getAllByText('개봉예정인 영화')).toBeTruthy());
        });

        test('popular API method 테스트 - 데이터가 문제없이 화면에 로드되는지 확인', async() => {
            await waitFor(() => expect(screen.getAllByText('흥행중인 영화')).toBeTruthy());
        });
});