import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

import { ActionLinkPretender, FlexRowSpaceBetween, LinkPretender } from '../../../components';
import { useUIStore } from '../../../contexts/UIContext';
import { useUser } from '../../../hooks';
import firebase from '../../../services/firebase';
import { AvailableSidebars } from '../../../types/global';
import { Routes } from '../..';

interface IActionLinks {
    style?: React.CSSProperties;
}

const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return isMobile ? children : null;
};

const ActionLinks: React.FC<IActionLinks> = ({ style }) => {
    const uiStore = useUIStore();
    const history = useHistory();
    const user = useUser();
    const onAuthClick = () => {
        if (user) {
            firebase.logout();
        } else {
            history.push(Routes.authentication.link);
        }
    };
    return (
        <>
            <Mobile>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        marginBottom: '15px'
                    }}>
                    <ActionLinkPretender
                        style={{ fontSize: '15px' }}
                        onClick={() => uiStore.setSidebar(AvailableSidebars.TermOfUse)}>
                        Terms of use
                    </ActionLinkPretender>
                    <ActionLinkPretender style={{ fontSize: '15px' }} onClick={onAuthClick}>
                        {user ? 'Logout' : 'Login'}
                    </ActionLinkPretender>
                    <LinkPretender href="mailto:business@topipro.com" style={{ fontSize: '15px' }}>
                        Contact us
                    </LinkPretender>
                </div>
            </Mobile>
            <Desktop>
                <FlexRowSpaceBetween style={{ width: 360, ...style }}>
                    <ActionLinkPretender
                        onClick={() => uiStore.setSidebar(AvailableSidebars.TermOfUse)}>
                        Terms of use
                    </ActionLinkPretender>
                    <ActionLinkPretender onClick={onAuthClick}>
                        {user ? 'Logout' : 'Login'}
                    </ActionLinkPretender>
                    <LinkPretender href="mailto:business@topipro.com" style={{ marginLeft: 5 }}>
                        Contact us
                    </LinkPretender>
                </FlexRowSpaceBetween>
            </Desktop>
        </>
    );
};
export default ActionLinks;
