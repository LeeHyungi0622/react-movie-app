import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
`;

const Search = () => {
    return (
        <Container data-testid="search-page-container">
            <h1>Search page</h1>
        </Container>
    );
};

export default Search;