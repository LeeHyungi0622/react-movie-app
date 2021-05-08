import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import { moviesApi, tvApi } from '../../Api';

const Container = styled.div`
    width: 100%;
    font-size: 1.5rem;
    color: white;
`;

const Overview = ({ contents, id }) => {
    const [loading, setLoading] = useState(true);
    const [overviewInfo, setOverviewInfo] = useState('');
    const [error, setError] = useState(null);

    const getData = async() => {
        try {
            let info;
            if(contents === 'movie'){
                ({data: { overview: info }} = await moviesApi.movieDetail(id));
            } else {
                ({data: { overview: info}} = await tvApi.showDetail(id));
            }
            setOverviewInfo(info);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (<Container>{ overviewInfo }</Container>);
};

export default Overview;