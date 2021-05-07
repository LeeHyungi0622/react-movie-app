import React from 'react';
import '@testing-library/jest-dom';
import { screen, render, waitFor } from '@testing-library/react';
import 'regenerator-runtime/runtime';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import Movie from '../Pages/Movie';
import TV from '../Pages/TV';
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


describe('TV 컨텐츠 관련 API 테스트', () => {
    const mock = new MockAdapter(axios, { delayResponse: 200 });
    const data = {
        backdrop_path: "/uAjMQlbPkVHmUahhCouANlHSDW2.jpg",
        first_air_date: "2019-01-11",
        genre_ids: [16, 9648, 10765, 10759, 18],
        id: 83097,
        name: "The Promised Neverland",
        origin_country: ["JP"],
        original_language: "ja",
        original_name: "約束のネバーランド",
        overview: "Surrounded by a forest and a gated entrance, the Grace Field House is inhabited by orphans happily living together as one big family, looked after by their \"Mama,\" Isabella. Although they are required to take tests daily, the children are free to spend their time as they see fit, usually playing outside, as long as they do not venture too far from the orphanage — a rule they are expected to follow no matter what. However, all good times must come to an end, as every few months, a child is adopted and sent to live with their new family... never to be heard from again.\n\nHowever, the three oldest siblings have their suspicions about what is actually happening at the orphanage, and they are about to discover the cruel fate that awaits the children living at Grace Field, including the twisted nature of their beloved Mama.",
        popularity: 82.276,
        poster_path: "/oBgRCpAbtMpk1v8wfdsIph7lPQE.jpg",
        vote_average: 9.1,
        vote_count: 618
    };

    mock
        .onGet('https://api.themoviedb.org/3/tv/top_rated')
        .reply(200, {
            data
        })
        .onGet('https://api.themoviedb.org/3/tv/popular')
        .reply(200, {
            data
        })
        .onGet('https://api.themoviedb.org/3/tv/airing_today')
        .reply(200, {
            data
        })

        beforeEach(async() => {
            render( <MemoryRouter><TV /></MemoryRouter>);
            await waitFor(() => screen.findByTestId('loading-text'));
        });

        test('초기에 Loading 컴포넌트가 화면에 로드되는지 확인', async() => {
            await waitFor(() => screen.findByTestId('loading-text'));
        });

        test('nowPlaying API method 테스트 - 데이터가 문제없이 화면에 로드되는지 확인', async() => {
            await waitFor(() => expect(screen.getAllByText('시청률 상위권 TV 프로그램')).toBeTruthy());
        });

        test('upcoming API method 테스트 - 데이터가 문제없이 화면에 로드되는지 확인', async() => {
            await waitFor(() => expect(screen.getAllByText('인기 방영중인 TV 프로그램')).toBeTruthy());
        });

        test('popular API method 테스트 - 데이터가 문제없이 화면에 로드되는지 확인', async() => {
            await waitFor(() => expect(screen.getAllByText('오늘 방송예정인 TV 프로그램')).toBeTruthy());
        });
});