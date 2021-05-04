import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PosterImage = styled.img`
    content: url("https://image.tmdb.org/t/p/w300/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg");
    height: 180px;
    border-radius: 4px;
    transition: opacity 0.1s linear;
`;

const Rating = styled.span`
    position: absolute;
    left: 10px;
    top: 10px;
    opacity: 0;
    transition: opacity 0.1s linear;
`;

const PosterContainer = styled.figure`
    display: inline-block;
    position: relative;
    &:hover {
        ${ PosterImage }{
            opacity: 0.3;
        }
        ${ Rating }{
            opacity: 1;
        }
    }
`;

const PosterCaption = styled.figcaption`
    width: 150px;
`;

const Title = styled.span`
    display: block;
`;

const Year = styled.span`
    display: block;
    color: gray;
`;

const Poster = () => {

    return(
        <Link to="#">
            <PosterContainer data-testid="poster_container">                
                <PosterImage />
                <Rating>Rating</Rating>
                <PosterCaption>
                    <Title data-testid="title">
                        Title
                    </Title>
                    <Year data-testid="year">
                        Year
                    </Year>
                </PosterCaption>
            </PosterContainer>
        </Link>
    );
};

export default Poster;