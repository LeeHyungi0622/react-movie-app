import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';
import { moviesApi } from '../Api';
import Loading from '../Components/Loading';
import PosterSection from '../Components/PosterSection';
import Poster from '../Components/Poster';
import MovieSlider from '../Components/CarouselSlider';

const Container = styled.div`
    padding: 30px;
`;

const Movie = () => {
    const [loading, setLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [popular, setPopular] = useState([]);
    const [error, setError] = useState();
    useEffect(() => {
        getData();
    },[]);

    const getData = async() => {
        try{
            const { data: {results: nowPlaying}} = await moviesApi.nowPlaying();
            const { data: {results: popular}} = await moviesApi.popular();
            const { data: {results: upcoming}} = await moviesApi.upcoming();
            setNowPlaying(nowPlaying);
            setUpcoming(upcoming);
            setPopular(popular);
        }catch(e){
                setError(e);
        } finally {
                setLoading(false);
        }
    }
    return (
        loading ? <Loading /> : (
            <Container data-testid="movie-page-container">
                {
                    <MovieSlider popular={popular} isMovie={true} />
                }
                { nowPlaying && nowPlaying.length > 0 && (
                    <PosterSection title="현재 상영중인 영화">
                        {
                            nowPlaying.map(movie => (
                                <Poster
                                    key={movie.id}
                                    id={movie.id}
                                    imageUrl={movie.poster_path}
                                    title={movie.original_title}
                                    rating={movie.vote_average}
                                    year={movie.release_date.substring(0, 4)}
                                    isMovie={true}
                                />
                            ))
                        }
                    </PosterSection>
                )}
                { popular && popular.length > 0 && (
                    <PosterSection title="흥행중인 영화">
                        {
                            popular.map(movie => (
                                <Poster
                                    key={movie.id}
                                    id={movie.id}
                                    imageUrl={movie.poster_path}
                                    title={movie.original_title}
                                    rating={movie.vote_average}
                                    year={movie.release_date.substring(0, 4)}
                                    isMovie={true}
                                />
                            ))
                        }
                    </PosterSection>
                )}
                { upcoming && upcoming.length > 0 && (
                    <PosterSection title="개봉예정인 영화">
                        {
                            upcoming.map(movie => (
                                <Poster
                                    key={movie.id}
                                    id={movie.id}
                                    imageUrl={movie.poster_path}
                                    title={movie.original_title}
                                    rating={movie.vote_average}
                                    year={movie.release_date.substring(0, 4)}
                                    isMovie={true}
                                />
                            ))
                        }
                    </PosterSection>
                )}
                { error && error}
            </Container>
        )
    );
};

export default Movie;