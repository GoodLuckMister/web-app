import styled from '@emotion/styled';

import { colors } from '../themes/colors';

export const CardBox = styled.div`
    width: 331px;
    height: 370px;
    border-radius: 6px;
    margin: 15px 15px 15px 20px;
    box-shadow: 2px 2px 8px 1px rgba(21, 20, 59, 0.1);
    background-color: #ffffff;
    cursor: pointer;
    &:hover {
        border: solid 1px ${colors.fuchsia};
        box-shadow: 2px 2px 8px 1px rgba(216, 22, 182, 0.09);
    }
`;
