import React, { useRef, useEffect } from 'react';
import styled,{css} from 'styled-components';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';


const fontOutline = css`
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;

const BackdropContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    width: 80%;
    height: 250px;
    background-image: url(${(props) => props.backdrop});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    filter: blur(4px);
`;

const Container = styled.div`
    position: relative;
    width: 80%;
    height: 250px;
    margin: 0 auto;
`;

const Article = styled.article`
    position: relative;
    display: flex;
    justify-content: center;
    z-index: 10;
    width: 100%;
    height: 250px;
    overflow: hidden;
`;


const Poster = styled.img`
    height: 250px;
    box-shadow: 0 0 20px white;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 150px;
`;

const Title = styled.h2`
    ${fontOutline};
    font-size: 35px;
    color: white;
`;

const Rating = styled.span`
    ${fontOutline};
    display: block;
    font-size: 20px;
    color: white;
    padding: 15px;
`;

const DetailButton = styled(Link)`
    ${fontOutline};
    width: 150px;
    padding: 10px;
    text-align: center;
    border: solid 1px white; 
`;


const MovieSlider = ({ popular, isMovie }) => {
    const carouselRef = useRef(null);
    const currentTimeout = useRef(null);

    const onChange = (currentItem, _) => {
        if (currentItem.index === popular.length - 1){
            currentTimeout.current = setTimeout(() => {carouselRef.current.goTo(0)},2000); 
        } 
    }

    useEffect(() => {
        return () => {
            clearTimeout(currentTimeout.current);
        }
    },[])

    return (
        <> 
        <Carousel enableAutoPlay ref={carouselRef} autoPlaySpeed={2500} onChange={onChange}>
            { popular && popular.length>0 && popular.map( contents => {
            const { backdrop_path, poster_path, original_title, vote_average, id, original_name } = contents;
            return(
                <Container key={id}>
                    <BackdropContainer backdrop={`https://image.tmdb.org/t/p/original${backdrop_path}`}></BackdropContainer>
                    <Article>
                        <Poster src={`https://image.tmdb.org/t/p/w300${poster_path}`}/>
                        <Info>
                            <Title>{isMovie ? original_title : original_name}</Title>
                            <Rating>🌟 {vote_average} / 10</Rating>
                            <DetailButton to={ isMovie ? `/movie/${id}/overview` : `/tv/${id}/overview`}>Detail 페이지</DetailButton>
                        </Info>
                    </Article>
                </Container> 
             )
            })}
        </Carousel>
        </>
    );
};

export default MovieSlider;


/* 



*/