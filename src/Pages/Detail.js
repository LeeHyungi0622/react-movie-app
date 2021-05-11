import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import Filter from './Tab/Filter';
import { moviesApi, tvApi } from '../Api';
import TabMenu from '../Components/TabMenu';

const Container = styled.div`
  /* 100vh(viewport width)에서 맨위에 표시된 Navigation bar의 높이를 빼준다. */
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

// image에 흐릿한 Blur 효과를 주기 위해서 Backdrop STYLE component를 만들어준다.
const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.3;
    z-index: 0;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
`;

const Cover = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${(props) => props.bgImage});
    background-position: center center;
    background-size: cover;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 40%;
    margin-left: 30px;
`;

const Title = styled.span`
    font-size: 32px;
    margin-bottom: 10px;
    a img{
        margin-left: 15px;
        width: 50px;
        height: 25px;
    }
`;

const ItemContainer = styled.div`
    margin: 20px 0px;
`;

const Item = styled.span``;

const Year = styled.span``;

const Divider = styled.span`
    margin: 0 10px;
`;

const VideoContainer = styled.div`
    width: 100%;
    height: 80%;
    margin-top: 45px;
    iframe{
        width: 100%;
        height: 500px;
    }
`;

const Contents = styled.div`
    width: 100%;
`;

const Detail = ({ location: { pathname }, match: { params: { id }}}) => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState();
    const [error, setError] = useState(null);

    console.log(pathname, id);
    const getData = async() => {
        try{
            let info;
            if(pathname.includes('movie')){
                ({data: info} = await moviesApi.movieDetail(id));
            } else {
                ({data: info} = await tvApi.showDetail(id));
            }
            console.log('check info : ',info);
            setResult(info);
        }catch(err){
            setError(err);
        }finally{
            setLoading(false);
        }
    }; 

    useEffect(() => {
        getData();
    }, []);

    return loading ? (<h1>Loading...</h1>) : (
        <>
            <Container data-testid="detail-container">
                <Backdrop bgImage={result && result.backdrop_path && `https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
                <Content>
                    <Cover bgImage={result && result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : ``}/>
                    <Data>
                        <Title data-testid="movie-title">
                            {result && result.original_title ? result.original_title : result.original_name}
                            {result.imdb_id 
                                ?
                                <Link to={`https://www.imdb.com/title/${result.imdb_id}`}>
                                    
                                </Link> 
                                : ""
                            }
                        </Title>
                        <ItemContainer data-testid="movie-detail-info">
                            <Year>
                            {result.release_date
                            ? result.release_date.substring(0, 4)
                            : result.first_air_date.substring(0, 4)}
                            </Year>
                            <Divider>・</Divider>
                            <Item>
                            {result.runtime ? result.runtime : result.episode_run_time[0]}min
                            </Item>
                            <Divider>・</Divider>
                            <Item>
                            {result.genres &&
                                result.genres.map((genre, index) =>
                                index === result.genres.length - 1
                                    ? genre.name
                                    : `${genre.name} / `
                                )}
                            </Item>
                        </ItemContainer>
                        <TabMenu pathname={pathname} id={id} />
                        <Contents>
                            <Route path="/:contents/:id/:category" component={Filter} />
                        </Contents>
                    </Data>
                </Content>
            </Container>
        </>
    )
};

export default Detail;