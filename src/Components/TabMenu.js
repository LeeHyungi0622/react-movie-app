import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled.ul`
    display: flex;
    margin-bottom: 20px;
`;

const ListItem = styled.li`
    margin-right: 20px;
    text-transform: uppercase;
    font-weight: 600;
    border: 2px solid #1abc9c;
    padding: 5px;
    background-color: ${props => (props.active ? "#1abc9c" : "transparent")};
`;

const TabMenu = ({ pathname, id }) => {
    return (
        <List data-testid="tab-menu-list">
            <ListItem active={pathname.includes('overview')}>
                <Link to={pathname.includes('movie') ? `/movie/${id}/overview` : `/tv/${id}/overview`}>Overview</Link> 
            </ListItem>
            <ListItem active={pathname.includes('production')}>
                <Link to={pathname.includes('movie') ? `/movie/${id}/production` : `/tv/${id}/production`}>Production</Link> 
            </ListItem>
            <ListItem active={pathname.includes('country')}>
                <Link to={pathname.includes('movie') ? `/movie/${id}/country` : `/tv/${id}/country`}>Country</Link> 
            </ListItem>
            <ListItem active={pathname.includes('language')}>
                <Link to={pathname.includes('movie') ? `/movie/${id}/language` : `/tv/${id}/language`}>Language</Link> 
            </ListItem>
        </List>
    )
};

export default TabMenu;