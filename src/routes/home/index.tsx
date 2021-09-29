import styled from '@emotion/styled';
import { useObserver } from 'mobx-react';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

import { FlexBox, FlexWrap, Loader } from '../../components';
import { TermsLocalStorageKey } from '../../consts';
import { useUIStore } from '../../contexts/UIContext';
import { useCategories, useUser, useWindowSize } from '../../hooks';
import { style as scrollbarsStyle } from '../../styles/scrollbars';
import { AvailableSidebars } from '../../types/global';
import { Routes } from '..';
import Category from './components/Category';
import Welcome from './components/Welcome';
import { mapIdToIcon } from './lib';

const Wrapper = styled.div`
    margin-top: 89px;
    margin-left: -126px;
`;

const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return isMobile ? children : null;
};
const Categories: React.FC = () => {
    const [width] = useWindowSize();
    const user = useUser();
    const uiStore = useUIStore();
    const categories = useCategories();
    const history = useHistory();
    const onClick = (id: string) => {
        if (user || localStorage.getItem(TermsLocalStorageKey)) {
            history.push({
                pathname: Routes.topipros.link,
                search: `?category=${id}`,
                state: { categoryID: id }
            });
        } else {
            uiStore.setReferrerCategoryID(id);
            uiStore.setSidebar(AvailableSidebars.TermOfUse);
        }
    };
    return useObserver(() => (
        <>
            <Mobile>
                <div
                    style={{
                        textAlign: 'center',
                        width: '480px',
                        fontSize: '11px'
                    }}>
                    <Welcome />
                    <Scrollbars
                        style={{ height: '65vh', width: '100%' }}
                        hideTracksWhenNotNeeded
                        renderThumbVertical={({ ...props }) => (
                            <div {...props} style={{ ...scrollbarsStyle, display: 'flex' }} />
                        )}>
                        {categories.length === 0 && (
                            <div style={{ paddingTop: '25px', textAlign: 'center' }}>
                                <Loader size={20} />
                            </div>
                        )}
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {categories.map((category) => (
                                <Category
                                    onClick={() => onClick(category.id)}
                                    count={category.prosCount}
                                    text={category.label}
                                    key={category.id}
                                    icon={mapIdToIcon(category.id)}
                                />
                            ))}
                        </div>
                    </Scrollbars>
                </div>
                <div style={{ width: '460px', height: '50px' }}></div>
            </Mobile>
            <Desktop>
                <Wrapper>
                    <FlexBox style={{ margin: '2% 0% 0.5% 0%' }}>
                        <Welcome style={{ margin: '0px 56px 0px 56px' }} />
                        <Scrollbars
                            style={{ height: '65vh', width: width < 1550 ? '50vw' : '41vw' }}
                            hideTracksWhenNotNeeded
                            renderThumbVertical={({ ...props }) => (
                                <div {...props} style={scrollbarsStyle} />
                            )}>
                            <FlexWrap style={{ marginTop: '-10px' }}>
                                {categories.length === 0 && (
                                    <div style={{ marginLeft: 300, marginTop: 300 }}>
                                        <Loader size={25} />
                                    </div>
                                )}
                                {categories.map((category) => (
                                    <Category
                                        onClick={() => onClick(category.id)}
                                        count={category.prosCount}
                                        text={category.label}
                                        key={category.id}
                                        icon={mapIdToIcon(category.id)}
                                    />
                                ))}
                            </FlexWrap>
                        </Scrollbars>
                    </FlexBox>
                </Wrapper>
            </Desktop>
        </>
    ));
};
export default Categories;
