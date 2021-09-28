import React from 'react';

import { LargeText, WelcomeText } from '../../../components';

const Header: React.FC = () => {
    return (
        <>
            <WelcomeText>Welcome to</WelcomeText>
            <LargeText>
                Top<span className="i">i</span>Pro
            </LargeText>
        </>
    );
};
export default Header;
