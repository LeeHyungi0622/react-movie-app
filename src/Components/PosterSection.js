import React,{ useState } from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`

`;

const Title = styled.h2`

`;

const GridChildren = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 125px);
    grid-gap: 25px;
`;

const PosterSection = ({ title, children }) => {

    return(
        <SectionContainer>
            <Title data-testid="section-title">{ title }</Title>
            <GridChildren>
                { children }
            </GridChildren>
        </SectionContainer>
    )
}

export default PosterSection;