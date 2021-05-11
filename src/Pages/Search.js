import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { moviesApi, tvApi } from '../Api';
import PosterSection from '../Components/PosterSection';
import Poster from '../Components/Poster';
import Message from '../Components/Message';
import Loading from '../Components/Loading';

const Container = styled.div`
    padding: 20px;
`
const Form = styled.form``;
const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`;

const Search = () => {
    const [movieInfo, setMovieInfo] = useState([]);
    const [tvInfo, setTvInfo] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateTerm = useCallback((e) => {
        const {target: { value }} = e;
        setSearchTerm(value);
    }, [searchTerm]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchTerm !== ""){
            searchByTerm();
        }
    };

    const searchByTerm = async() => {
        setLoading(true);
        try {
            const { data: { results: movieResults} } = await moviesApi.search(searchTerm);
            const { data: { results: tvResults} } = await tvApi.search(searchTerm);
            setMovieInfo(movieResults);
            setTvInfo(tvResults);
        } catch(error){
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container data-testid="search-page-container">
            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="Search Movie or TV shows..."
                    value={searchTerm}
                    onChange={updateTerm}
                />
            </Form>
            {
                loading ? <Loading /> : (
                    <>
                        {movieInfo &&  movieInfo.length > 0 && (
                            <PosterSection title="영화 컨텐츠 검색결과">
                                {movieInfo.map(movie => (
                                    <Poster
                                        key={movie.id}
                                        id={movie.id}
                                        imageUrl={movie.poster_path}
                                        title={movie.original_title}
                                        rating={movie.vote_average}
                                        year={movie.release_date && movie.release_date.substring(0, 4)}
                                        isMovie={true}
                                    />
                                ))}
                            </PosterSection>
                        )}
                        {tvInfo &&  tvInfo.length > 0 && (
                            <PosterSection title="TV 컨텐츠 검색결과">
                                {tvInfo.map(tv => (
                                    <Poster
                                        key={tv.id}
                                        id={tv.id}
                                        imageUrl={tv.poster_path}
                                        title={tv.name}
                                        rating={tv.vote_average}
                                        year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                                        isMovie={false}
                                    />
                                ))}
                            </PosterSection>
                        )}
                        {error && <Message text={error} color="#e74c3c" />}
                        {movieInfo && tvInfo && 
                        movieInfo.length === 0 && tvInfo.length === 0 && (
                            <Message text="Nothing found" color="#95a5a6"/>
                        )}
                    </>
                )
            }
        </Container>
    );
};

export default Search;