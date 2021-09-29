import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { useWindowSize } from '../hooks';

const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return isMobile ? children : null;
};

const Layout: React.FC = ({ children }) => {
    const [width] = useWindowSize();
    return (
        <>
            <Mobile>
                <div>{children}</div>
            </Mobile>
            <Desktop>
                <div style={{ margin: `50px ${width / 12}px 0px ${width / 10}px` }}>{children}</div>
            </Desktop>
        </>
    );
};
export default Layout;
