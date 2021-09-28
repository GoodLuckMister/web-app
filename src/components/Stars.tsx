import styled from '@emotion/styled';
import React from 'react';

import { colors } from '../themes/colors';
import { FlexBox } from '.';

interface IStars {
    value: number;
    maxValue?: number;
    style?: React.CSSProperties;
}
const Star = styled.div<{ active: boolean }>`
    margin-right: 7px;
    background: ${colors.pinkishGreyTwo};
    ${({ active }) => (active ? `background:${colors.yellowishGreen}` : null)};
    clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
    );
    height: 16px;
    width: 16px;
`;

export const Stars: React.FC<IStars> = ({ value, maxValue = 5, style }) => {
    if (value > maxValue) {
        throw `Number of active stars cannot exceed: ${maxValue}`;
    }
    const arr = Array.from(Array(maxValue).keys());
    return (
        <FlexBox style={style}>
            {arr.map((index) => (
                <Star active={index + 1 <= value} key={index} />
            ))}
        </FlexBox>
    );
};
