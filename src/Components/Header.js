import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    width: 50px;
    line-height: 50px;
    height: 50px;
    text-align: center;
    border-bottom: 3px solid ${(props) => (props.click ? "#FFF67F" : "transparent")} ;
`;

const SLink = styled(Link)`
    
`;

const Header = ({location: { pathname }}) => {

    return (
        <HeaderWrapper>
            <List>  
                <Item click={ pathname === '/'}><SLink to="/" data-testid="movie-menu">Movie</SLink></Item>
                <Item click={ pathname === '/tv'}><SLink to="/tv" data-testid="tv-menu">TV</SLink></Item>
                <Item click={ pathname === '/search'}><SLink to="/search" data-testid="search-menu">Search</SLink></Item>
            </List>
        </HeaderWrapper>
    );
};

export default withRouter(Header);