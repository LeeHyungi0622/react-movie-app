import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../Components/Loading';

describe('<Loading /> 컴포넌트', () => {
    test('<Loading /> 컴포넌트가 문제없이 렌더링되는지 확인', () => {
        render( < Loading / > );
    });
    test('렌더링된 <Loading /> 컴포넌트의 내부에 spinner가 존재하는지 확인', () => {
        const { getByTestId } = render( < Loading / > );
        expect(getByTestId('spinner')).toBeTruthy();
        expect(getByTestId('loading-text')).toBeTruthy();
    });
});