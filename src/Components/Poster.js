import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types'; 

const PosterImage = styled.img`
    content: url(${(props) => props.bgImage});
    height: 180px;
    width: 150px;
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

const Poster = ({ id, imageUrl, title, rating, year, isMovie }) => {

    return(
        <Link to={ isMovie ? `/movie/${id}/overview` : `/tv/${id}/overview`}>
            <PosterContainer data-testid="poster_container">                
                <PosterImage bgImage={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : '/img/noimage.png'} />
                <Rating>{`🌟 ${rating} / 10`}</Rating>
                <PosterCaption>
                    <Title data-testid="poster-title">
                        { title }
                    </Title>
                    <Year data-testid="poster-year">
                        { year }
                    </Year>
                </PosterCaption>
            </PosterContainer>
        </Link>
    );
};

Poster.propTypes = {
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    year: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    isMovie: PropTypes.bool
};

export default Poster;