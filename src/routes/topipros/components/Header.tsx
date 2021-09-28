import { useObserver } from 'mobx-react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
    Breadcrumbs,
    Chip,
    FilterButton,
    FlexBox,
    FlexRow,
    SearchBar,
    SearchButton,
    TitleBold
} from '../../../components';
import { useUIStore } from '../../../contexts/UIContext';
import { AvailableSidebars } from '../../../types/global';
import { MainRoute } from '../..';
interface IHeader {
    category?: string;
    onChangeQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filters: string[];
    onFilterRemove: (filter: string) => void;
}
const Header: React.FC<IHeader> = ({ category, onChangeQuery, filters, onFilterRemove }) => {
    const [showSearch, setShowSearch] = useState(false);
    const uiStore = useUIStore();
    const history = useHistory();
    return useObserver(() => (
        <div>
            <Breadcrumbs title="Back" onClick={() => history.push(MainRoute.link)} />
            <FlexBox style={{ marginTop: 15 }}>
                <TitleBold>{`Top ${category}`}</TitleBold>
                <FlexBox style={{ marginLeft: 'auto' }}>
                    <FlexRow>
                        {filters.map((filter) => (
                            <Chip
                                text={filter}
                                onClick={() => onFilterRemove(filter)}
                                key={filter}
                            />
                        ))}
                    </FlexRow>
                    {!showSearch && (
                        <SearchButton
                            style={{ marginRight: 10 }}
                            onClick={() => setShowSearch(!showSearch)}
                        />
                    )}
                    {showSearch && (
                        <SearchBar
                            style={{ marginTop: 2, marginRight: 5 }}
                            onChangeQuery={onChangeQuery}
                        />
                    )}
                    <FilterButton
                        style={{ marginRight: 10 }}
                        onClick={() => uiStore.setSidebar(AvailableSidebars.FilterPros)}
                        active={filters.length > 0}
                    />
                </FlexBox>
            </FlexBox>
        </div>
    ));
};
export default Header;
