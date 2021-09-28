import styled from '@emotion/styled';

export const GridList = styled.div<{ num: number }>`
    display: grid;
    ${({ num }) => `grid-template-columns: repeat(${num}, 1fr);`}
    grid-gap: 10px;
`;
