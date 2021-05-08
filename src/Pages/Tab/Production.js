import React,{ useState, useEffect } from 'react';
import { moviesApi, tvApi } from '../../Api';
import styled from 'styled-components';

const ProductionContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 100px 100px 100px 100px;
    grid-template-rows: 100px 100px 100px 100px;
    gap: 30px;
    place-items: center;
`;

const SFigure = styled.figure`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 20px 20px;
`;

const SFigcaption = styled.figcaption`
    color: white;
    width: 50px;
    height: 50px;
`;

const SImage = styled.img`
    display: inline-block;
    height: 80%;
    width: 100%;
    vertical-align: middle;
`;

const TabLoading = styled.h2``;


const Production = ({ contents, id }) => {
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [productionCompany, setProductionCompany] = useState([]);

    const getData = async() => {
        try {
            let info;
            if(contents === 'movie'){
                ({data: { production_companies: info }} =  await moviesApi.movieDetail(id));
                console.log('MOVIE INFO : ',info);
            } else {
                ({data: { production_companies: info }} = await tvApi.showDetail(id));
                const data = await tvApi.showDetail(id);
                console.log('TV INFO : ', data);
            }
            setProductionCompany(info);
        } catch(err){
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    },[]);

    return(
        loading? <TabLoading>Loading...</TabLoading> : (
            <Grid>
            {
                productionCompany.map(company => {
                    return(
                        <>
                            <SFigure>
                                <SImage src={company.logo_path ? `https://image.tmdb.org/t/p/w200//${company.logo_path}` : '../../../img/noimage.png'}></SImage>
                                <SFigcaption>
                                    {company.name}
                                </SFigcaption>
                            </SFigure>
                        </>
                    )
                })
            }
            </Grid>
        )
    );
};

export default Production;