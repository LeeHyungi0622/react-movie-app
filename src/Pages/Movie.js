import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';
import { moviesApi } from '../Api';
import Loading from '../Components/Loading';
import PosterSection from '../Components/PosterSection';
import Poster from '../Components/Poster';

const Container = styled.div`
    padding: 30px;
`;

const Movie = () => {
    const [loading, setLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [error, setError] = useState();
    useEffect(() => {
        getData();
    },[]);

    const getData = async() => {
        try{
            const { data: {results: nowPlaying}} = await moviesApi.nowPlaying();
            setNowPlaying(nowPlaying);
        }catch(e){
                setError(e);
        } finally {
                setLoading(false);
        }
    }
    return (
        loading ? <Loading /> : (
            <Container data-testid="movie-page-container">
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
                
                <h1>Movie page</h1>
                <div data-testid="contents-list">
                    nowPlaying && nowPlaying > 0 && {nowPlaying.map(movie => (<p key={movie.id}>{movie.original_title}</p>))}
                </div>
            </Container>
        )
    );
};

export default Movie;