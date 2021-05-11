import React, { useState, useEffect } from 'react';
import { moviesApi, tvApi } from '../../Api';
import Overview from './Overview';
import Production from './Production';
import Country from './Country';
import Language from './Language';

const Main = ({ match: { params: { contents, id, category }} }) => {

    if(category === 'overview'){
        return (<Overview contents={contents} id={id}/>)
    } else if(category === 'production'){
        return (<Production contents={contents} id={id} />)
    } else if(category === 'country'){
        return (<Country contents={contents} id={id} />)
    } else if(category === 'language'){
        return (<Language contents={contents} id={id} />)
    }
};

export default Main;