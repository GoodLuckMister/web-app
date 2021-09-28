import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

import { FlexRowSpaceBetween } from '../components/FlexContainers';
import { useUIStore } from '../contexts/UIContext';
import { useActiveMenuNavigation, useUser } from '../hooks';
import { Routes } from '../routes';
import { AvailableSidebars } from '../types/global';
import { PrimaryButton } from './Button';
import Tab from './Tab';

interface IMenu {
    style?: React.CSSProperties;
    tabs: { label: string; link: string }[];
}

const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return isMobile ? children : null;
};

const Menu: React.FC<IMenu> = ({ tabs, style }) => {
    const history = useHistory();
    const uiStore = useUIStore();
    const active = useActiveMenuNavigation();
    const user = useUser();
    const onStartClick = () => {
        if (user) {
            uiStore.setSidebar(AvailableSidebars.ApplyForm);
        } else {
            history.push(Routes.authentication.link);
        }
    };
    return (
        <>
            <Mobile>
                <div style={style}>
                    <FlexRowSpaceBetween>
                        {tabs.map((tab, index) => (
                            <Tab
                                key={index}
                                active={active?.label === tab.label}
                                text={tab.label}
                                link={tab.link}
                            />
                        ))}
                        <PrimaryButton
                            style={{ width: 100, marginLeft: 10 }}
                            onClick={onStartClick}>
                            Apply as TopiPro
                        </PrimaryButton>
                    </FlexRowSpaceBetween>
                </div>
            </Mobile>
            <Desktop>
                <div style={style}>
                    <FlexRowSpaceBetween>
                        {tabs.map((tab, index) => (
                            <Tab
                                key={index}
                                active={active?.label === tab.label}
                                text={tab.label}
                                link={tab.link}
                            />
                        ))}
                        <PrimaryButton
                            style={{ width: 156, marginLeft: 15 }}
                            onClick={onStartClick}>
                            Apply as TopiPro
                        </PrimaryButton>
                    </FlexRowSpaceBetween>
                </div>
            </Desktop>
        </>
    );
};
export default Menu;
