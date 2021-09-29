/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

import { useMediaQuery } from 'react-responsive';

export const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });

    return isMobile ? children : null;
};
