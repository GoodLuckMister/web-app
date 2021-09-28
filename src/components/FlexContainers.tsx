import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const flexRowCSS = css`
    display: flex;
    align-items: center;
`;

export const flexColumnCSS = css`
    display: flex;
    flex-direction: column;
`;

export const FlexBox = styled.div`
    display: flex;
`;

export const FlexRow = styled.div`
    ${flexRowCSS}
`;
export const FlexRowLeft = styled.div`
    ${flexRowCSS}
    margin-left: auto;
`;

export const FlexRowEnd = styled.div`
    justify-content: flex-end;
    ${flexRowCSS}
`;

export const FlexColumn = styled.div`
    ${flexColumnCSS}
`;
export const FlexColumnCenter = styled.div`
    ${flexColumnCSS}
    justify-content: center;
`;
export const FlexWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const FlexRowSpaceBetween = styled.div`
    ${flexRowCSS}
    justify-content: space-between;
`;
export const FlexRowItemsCentered = styled.div`
    ${flexRowCSS}
    align-items: center;
`;
