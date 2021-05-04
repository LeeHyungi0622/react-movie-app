import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Router from './Poster';
import { MemoryRouter } from 'react-router';

describe('<Poster/> 컴포넌트', () => {
    let poster;
    beforeEach(() => {
        // Post component에서 Link component를 사용하고 있으므로,
        // Router를 포함하는 부모 component를 통해 렌더링 테스트 
        poster = render(<MemoryRouter><Router/></MemoryRouter>);
    });

    test('<Poster/> 컴포넌트 내부에 title과 year에 대한 정보가 있다.', () => {
        const { getByTestId } = poster;
        expect(getByTestId('poster-title')).toBeInTheDocument();
        expect(getByTestId('poster-year')).toBeInTheDocument();
    });
});