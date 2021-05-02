import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
    width: 100%;
    height: 80%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SSpin = styled(Spin)`
    margin-bottom: 20px;
`;

const spinnerIcon = (
    <>
        <LoadingOutlined style={ { fontSize: 50, color: '#00b7ff' } } spin />
    </>
);

const Loading = () => {
    return(
        <SpinnerWrapper>
            <SSpin indicator={ spinnerIcon } data-testid="spinner" />
            <h1 data-testid="loading-text">Loading...</h1>
        </SpinnerWrapper>
    );
};

export default Loading;
