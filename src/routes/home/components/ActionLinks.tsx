import React from 'react';
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
        <FlexRowSpaceBetween style={{ width: 360, ...style }}>
            <ActionLinkPretender onClick={() => uiStore.setSidebar(AvailableSidebars.TermOfUse)}>
                Terms of use
            </ActionLinkPretender>
            <ActionLinkPretender onClick={onAuthClick}>
                {user ? 'Logout' : 'Login'}
            </ActionLinkPretender>
            <LinkPretender href="mailto:business@topipro.com" style={{ marginLeft: 5 }}>
                Contact us
            </LinkPretender>
        </FlexRowSpaceBetween>
    );
};
export default ActionLinks;
