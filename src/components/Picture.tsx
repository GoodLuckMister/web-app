import styled from '@emotion/styled';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Wrapper = styled.img`
    width: 297px;
    height: 195px;
    padding: 16px 16px 24px 18px;
`;
const WrapperMob = styled.img`
    width: 200px;
    height: 190px;
    padding: 16px 16px 24px 18px;
`;

const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return isMobile ? children : null;
};

export const Picture: React.FC<React.ComponentProps<'img'>> = ({ src, style }) => {
    return (
        <>
            <Mobile>
                <WrapperMob src={src} style={style} />
            </Mobile>
            <Desktop>
                <Wrapper src={src} style={style} />
            </Desktop>
        </>
    );
};
