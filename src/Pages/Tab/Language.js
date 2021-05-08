import React, { useState, useEffect } from 'react';
import { moviesApi, tvApi } from '../../Api';

const Language = ({ contents, id }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [LanguageInfo, setLanguageInfo] = useState([]);

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
            <h1>Language Tab</h1>
        </>
    )
};

export default Language;