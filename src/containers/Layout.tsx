import React from 'react';

import { useWindowSize } from '../hooks';

const Layout: React.FC = ({ children }) => {
    const [width] = useWindowSize();
    return <div style={{ margin: `50px ${width / 12}px 0px ${width / 10}px` }}>{children}</div>;
};
export default Layout;
