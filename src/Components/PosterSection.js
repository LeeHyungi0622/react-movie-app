import React,{ useState } from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`

`;

const Title = styled.h2`
    font-size: 17px;
    font-weight: bold;
`;

const GridChildren = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 125px);
    grid-gap: 30px;
    margin-top: 14px;
    
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