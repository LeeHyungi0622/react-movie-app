import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { tvApi } from '../Api';
import PosterSection from '../Components/PosterSection';
import Poster from '../Components/Poster';
import TVSlider from '../Components/CarouselSlider';
import Loading from '../Components/Loading';

const Container = styled.div`
    padding: 20px;
`;

const TV = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [topRatedShow, setTopRatedShow] = useState([]);
    const [popularShow, setPopularShow] = useState([]);
    const [airingToday, setAiringToday] = useState([]);
    
    const getData = async() => {
        try {
            const {data: { results: topRatedShow }} = await tvApi.topRated();
            const {data: { results: popularShow }}= await tvApi.popular();
            const {data: { results: airingToday }} = await tvApi.airingToday();
    
            setTopRatedShow(topRatedShow);
            setPopularShow(popularShow);
            setAiringToday(airingToday);
            setLoading(false);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return(
           loading ? <Loading/> : (    
            <Container data-testid="tv-page-container">
                {
                    <TVSlider popular={popularShow} isMovie={false}/>
                }
                { 
                    topRatedShow && topRatedShow.length > 0 && (
                        <PosterSection title="시청률 상위권 TV 프로그램">
                            {
                                topRatedShow.map((tv) => {

                                    return (
                                        <Poster 
                                        key={tv.id}
                                        id={tv.id}
                                        imageUrl={tv.poster_path}
                                        title={tv.original_name}
                                        rating={tv.vote_average}
                                        year={tv.first_air_date.substring(0, 4)}
                                        isMovie={false}/>
                                    )
                                })
                            }
                        </PosterSection>
                    )  
                }
                { 
                    popularShow && popularShow.length > 0 && (
                        <PosterSection title="인기 방영중인 TV 프로그램">
                            {
                                popularShow.map((tv) => {

                                    return (
                                        <Poster 
                                        key={tv.id}
                                        id={tv.id}
                                        imageUrl={tv.poster_path}
                                        title={tv.original_name}
                                        rating={tv.vote_average}
                                        year={tv.first_air_date.substring(0, 4)}
                                        isMovie={false}/>
                                    )
                                })
                            }
                        </PosterSection>
                    )  
                }
                { 
                    airingToday && airingToday.length > 0 && (
                        <PosterSection title="오늘 방송예정인 TV 프로그램">
                            {
                                airingToday.map((tv) => {

                                    return (
                                        <Poster 
                                        key={tv.id}
                                        id={tv.id}
                                        imageUrl={tv.poster_path}
                                        title={tv.original_name}
                                        rating={tv.vote_average}
                                        year={tv.first_air_date.substring(0, 4)}
                                        isMovie={false}/>
                                    )
                                })
                            }
                        </PosterSection>
                    )  
                }
            </Container>
        )
    );
};

export default TV;