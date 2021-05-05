import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
`;

const Movie = () => {
    return (
        <Container data-testid="movie-page-container">
            <h1>Movie page</h1>
        </Container>
    );
};

export default Movie;