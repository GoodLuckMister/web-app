import styled from '@emotion/styled';
import React from 'react';

import { Search } from '../Icons';
import { colors } from '../themes/colors';
import { inter } from '.';

interface ISearchBar {
    onChangeQuery?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
}
const Input = styled.input`
    border-radius: 30px;
    outline: none;
    width: 250px;
    height: 10px;
    padding: 12px 21px 11px 40px;
    border: solid 1px ${colors.slateGrey};
    ${inter}
    color: ${colors.slateGrey};
    background-color: ${colors.paleLilac};
`;
const SearchInputWrapper = styled.div``;

export const SearchBar: React.FC<ISearchBar> = ({ onChangeQuery, style }) => {
    return (
        <SearchInputWrapper style={style}>
            <Search style={{ position: 'fixed', marginLeft: 15, marginTop: 7 }} />
            <Input onInput={onChangeQuery} />
        </SearchInputWrapper>
    );
};
