import React, { useState, useEffect } from 'react';
import { moviesApi, tvApi } from '../../Api';

const Trailers = ({ contents, id }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [TrailersInfo, setTrailersInfo] = useState([]);

    const getData = async() => {
        try {
            const data = await moviesApi.movieDetail(id);
            console.log('data : ',data);
        } catch(err) {

        } finally {

        }
    }

    useEffect(() => {
        getData();
    }, [])

    return(
        <>
            <h1>Trailers Tab</h1>
        </>
    )
};

export default Trailers;