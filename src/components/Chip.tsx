import styled from '@emotion/styled';
import React from 'react';

import { colors } from '../themes/colors';
import { CloseButton, FlexRowItemsCentered, Label } from '.';

const Wrapper = styled.div`
    height: 18px;
    border-radius: 16px;
    padding: 2px 12px 5px 14px;
    background-color: rgba(37, 42, 63, 0.07);
    margin-right: 16px;
`;
interface IChip {
    text: string;
    onClick: () => void;
    style?: React.CSSProperties;
}

export const Chip: React.FC<IChip> = ({ onClick, text, style }) => {
    return (
        <Wrapper style={style}>
            <FlexRowItemsCentered>
                <Label style={{ marginLeft: 10, marginRight: 15, fontWeight: 600 }}>{text}</Label>
                <CloseButton
                    iconStyle={{ width: 10, height: 10, color: colors.fuchsia }}
                    style={{ backgroundColor: 'transparent' }}
                    onClick={onClick}
                />
            </FlexRowItemsCentered>
        </Wrapper>
    );
};
