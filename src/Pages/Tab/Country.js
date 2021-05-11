import React, { useState, useEffect } from 'react';
import { moviesApi, tvApi } from '../../Api';
import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 100px 100px 100px 100px;
    grid-template-rows: 100px 100px 100px 100px;
    gap: 30px;
    place-items: center;
`;

const Figure = styled.figure`
`;

const FlagImg = styled.img`
`;

const FigCaption = styled.figcaption`
    text-align: center;
`;

const Country = ({ contents, id }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countryInfo, setCountryInfo] = useState([]);

    console.log('contents, id', contents, id);
    const getData = async() => {
        try {
            let info;
            if(contents === 'movie'){
                ({data: { production_countries: info }} =  await moviesApi.movieDetail(id));
                console.log('MOVIE INFO : ',info);
            } else {
                ({data: { production_countries: info }} = await tvApi.showDetail(id));
                const data = await tvApi.showDetail(id);
                console.log('TV INFO : ', data);
            }
            setCountryInfo(info);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    // https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/${country.iso_3166_1}.svg
    return loading ? <h1>Loading...</h1> : (
        <Grid>
            {
                countryInfo && countryInfo.length > 0 && countryInfo.map(country => 
                    (
                        <Figure>
                            <FlagImg src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/${country.iso_3166_1.toLowerCase()}.svg`} alt="country flag"/>
                            <FigCaption> {country.name} </FigCaption>
                        </Figure>
                    )
                )
            }
        </Grid>
    )
};

export default Country;