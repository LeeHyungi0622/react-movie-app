import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App /> component', () => {
    test('<App /> 컴포넌트가 문제없이 rendering된다.', () => {
        render( < App / > );
    });
});