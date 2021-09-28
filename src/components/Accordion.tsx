import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';

import { Chevron } from '../Icons';
import { colors } from '../themes/colors';

interface IAccordion {
    title: string | React.ReactElement;
    content: React.ReactElement | React.ReactElement[];
    extraInfoText?: string | React.ReactElement;
    initialIsOpen?: boolean;
    height?: number;
    marginTop?: number;
}

const ContentWrapper = styled.div<{ isOpen: boolean; height?: number }>`
    height: 0;
    max-height: 400px;
    background-color: #ffffff;
    ${({ isOpen, height }) =>
        isOpen &&
        css`
            animation: ${expandKeyframes(height)} 0.5s normal forwards;
        `}
}`;

const expandKeyframes = (height: number) => keyframes`
  from {
      opacity: 0;
      height: 0;
  }
  to {
    opacity: 1;
    height: ${height}px;
  }
`;

const TopBarWrapper = styled.div`
    font-family: Assistant;
    font-size: 1em;
    color: ${colors.darkBlueGrey};
    padding: 10px 16px 10px 20px;
    background-color: #ffffff;
    display: flex;
    font-weight: 600;
    max-height: 48px;
    box-sizing: border-box;
    align-items: center;
    cursor: pointer;
`;

const Title = styled.span`
    color: ${colors.darkBlueGrey};
    font-size: 1em;
    text-transform: capitalize;
`;

const ExtraInfo = styled.span`
    margin-left: auto;
`;

export const Accordion: FunctionComponent<IAccordion> = ({
    title,
    extraInfoText,
    content,
    initialIsOpen = false,
    height = 400,
    marginTop
}) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(initialIsOpen);

    const toggleAccordion = () => setIsOpen((prevIsOpen) => !prevIsOpen);
    const wrappedContent = (
        <ContentWrapper isOpen={isOpen} height={height}>
            {content}
        </ContentWrapper>
    );
    return (
        <>
            <TopBarWrapper onClick={toggleAccordion} style={{ marginTop }}>
                <Title>{title}</Title>
                {extraInfoText && <ExtraInfo>{extraInfoText}</ExtraInfo>}
                <Chevron
                    style={{
                        marginLeft: 'auto',
                        transform: isOpen ? 'rotate(90deg)' : 'rotate(270deg)',
                        transition: 'transform 0.25s linear',
                        marginTop: 3
                    }}
                    color={colors.darkBlueGreyTwo}
                />
            </TopBarWrapper>
            {isOpen && wrappedContent}
        </>
    );
};
