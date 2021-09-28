import styled from '@emotion/styled';
import { useObserver } from 'mobx-react';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
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
    ));
};
export default Categories;
