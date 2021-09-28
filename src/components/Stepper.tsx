import styled from '@emotion/styled';
import React from 'react';

import { colors } from '../themes/colors';
import { StepperLink } from '.';
import { FlexRow, FlexRowSpaceBetween } from './FlexContainers';

const Line = styled.div`
    height: 1px;
    margin: 0 0 18px 1px;
    border: solid 2px #dcd7d7;
`;
const ColoredLine = styled.div`
    height: 10px;
    background-image: linear-gradient(to left, ${colors.pinkPurple}, ${colors.fuchsia} 0%);
    cursor: pointer;
`;
interface IStepper {
    titles: string[];
    activeIndex?: number;
    width?: number;
}

export const Stepper: React.FC<IStepper> = ({ width = 935, titles, activeIndex = 0 }) => {
    const activeWidth = (width + 5) / titles.length;
    const arr = new Array(activeIndex + 1).fill('');
    return (
        <>
            <Line style={{ width }} />
            <FlexRow style={{ marginTop: '-26px' }}>
                {arr.map((_, index) => (
                    <ColoredLine
                        key={index}
                        style={{
                            width: activeWidth,
                            borderTopLeftRadius: index === 0 ? 5 : 0,
                            borderBottomLeftRadius: index === 0 ? 5 : 0,
                            borderTopRightRadius: index === arr.length - 1 ? 5 : 0,
                            borderBottomRightRadius: index === arr.length - 1 ? 5 : 0
                        }}
                    />
                ))}
            </FlexRow>
            <FlexRowSpaceBetween style={{ width, marginTop: 18, marginLeft: 26 }}>
                {titles.map((title, index) => (
                    <StepperLink key={title} active={activeIndex >= index}>
                        {title}
                    </StepperLink>
                ))}
            </FlexRowSpaceBetween>
        </>
    );
};
