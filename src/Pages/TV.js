import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
`;

const TV = () => {
    return(
        <Container data-testid="tv-page-container">
            <h1>TV page</h1>
        </Container>
    );
};

export default TV;