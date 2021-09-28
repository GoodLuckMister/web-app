import styled from '@emotion/styled';
import React from 'react';

import { mapIndicatorToColor } from '../themes/colors';
import { assistant } from '.';

const Rectangle = styled.div<{ color: string }>`
    width: 51px;
    height: 24px;
    border-radius: 3px;
    ${({ color }) => `background-color: ${color};`}
    ${assistant}
    font-weight: bold;
    color: #ffffff;
    text-align: center;
`;
interface IBadge {
    value: number;
    style?: React.CSSProperties;
}

export const Badge: React.FC<IBadge> = ({ value, style }) => {
    return (
        <Rectangle style={style} color={mapIndicatorToColor(value)}>
            {value}
        </Rectangle>
    );
};
