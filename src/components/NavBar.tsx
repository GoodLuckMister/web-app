/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './navbar.scss';

import styled from '@emotion/styled';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

import logo from '../assets/img/logo.png';
import { useWindowSize } from '../hooks';
import { MainRoute, Routes } from '../routes';
import { colors } from '../themes/colors';
import { FlexRow } from './FlexContainers';
import Menu from './Menu';

const Wrapper = styled.header`
    min-height: 100px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.almostBlack};
    transition: all 0.7s ease-in;
`;
const Mobiled = styled.header`
    width: 480px;
    min-height: 60px;
    box-sizing: border-box;
    padding: 15px;
    background-color: ${colors.almostBlack};
`;
const tabs = Object.values(Routes)
    .filter((route) => route.menu)
    .map((route) => ({ label: route.label, link: route.link }));

const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return isMobile ? children : null;
};
const Navbar = () => {
    const history = useHistory();
    const [width] = useWindowSize();

    return (
        <>
            <Mobile>
                <Mobiled>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src={logo}
                            alt="logo"
                            onClick={() =>
                                history.push({
                                    pathname: MainRoute.link
                                })
                            }
                            width="100px"
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <Menu
                        tabs={tabs}
                        style={{
                            fontSize: '14px'
                        }}
                    />
                </Mobiled>
            </Mobile>
            <Desktop>
                <Wrapper>
                    <FlexRow
                        className="window-nav"
                        style={{
                            margin: `12px ${width / 12}px 0px ${width / 9}px`,
                            width: '100%'
                        }}>
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
            </Desktop>
        </>
    );
};
export default Navbar;
