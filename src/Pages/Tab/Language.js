import React, { useState, useEffect } from 'react';
import { moviesApi, tvApi } from '../../Api';
import styled from 'styled-components';

const Span = styled.span`
    font-size: 25px;
    font-weight: 500;
    display: block;
    padding: 20px;
`;


const Language = ({ contents, id }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [languageInfo, setLanguageInfo] = useState([]);

    const getData = async() => {
        try {
            let info;
            if(contents === 'movie'){
                ({data: {spoken_languages: info}} = await moviesApi.movieDetail(id));
            } else {
                ({data: {spoken_languages: info}} = await tvApi.showDetail(id));
            }
            console.log(info);
            setLanguageInfo(info);
        } catch(err) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return loading ? <h1>Loading...</h1> : (
        languageInfo && languageInfo.length > 0 && languageInfo.map(language => (
            <Span>{language.name}</Span>
        ))        
    )
};

export default Language;