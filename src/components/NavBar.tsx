/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import styled from '@emotion/styled';
import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../assets/img/logo.png';
import { useWindowSize } from '../hooks';
import { MainRoute, Routes } from '../routes';
import { colors } from '../themes/colors';
import { FlexRow } from './FlexContainers';
import Menu from './Menu';

const Wrapper = styled.header`
    width: 100%;
    min-height: 100px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.almostBlack};
    transition: all 0.7s ease-in;
`;
const tabs = Object.values(Routes)
    .filter((route) => route.menu)
    .map((route) => ({ label: route.label, link: route.link }));
const Navbar = () => {
    const history = useHistory();
    const [width] = useWindowSize();

    return (
        <Wrapper>
            <FlexRow style={{ margin: `12px ${width / 12}px 0px ${width / 9}px`, width: '100%' }}>
                <img
                    src={logo}
                    alt="logo"
                    onClick={() =>
                        history.push({
                            pathname: MainRoute.link
                        })
                    }
                    style={{ cursor: 'pointer' }}
                />
                <Menu style={{ marginLeft: 'auto' }} tabs={tabs} />
            </FlexRow>
        </Wrapper>
    );
};
export default Navbar;
