import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Poster from '../Components/Poster';
import { MemoryRouter } from 'react-router';

describe('<Poster/> 컴포넌트', () => {
    beforeEach(() => {
        // Post component에서 Link component를 사용하고 있으므로,
        // Router를 포함하는 부모 component를 통해 렌더링 테스트 
        render(<MemoryRouter><Poster/></MemoryRouter>);
    });

    test('<Poster/> 컴포넌트 내부에 title과 year에 대한 정보가 있다.', () => {
        expect(screen.getByTestId('poster-title')).toBeInTheDocument();
        expect(screen.getByTestId('poster-year')).toBeInTheDocument();
    });
});