import styled from '@emotion/styled';
import React from 'react';

import { colors } from '../../themes/colors';

const Button = styled.button`
    width: 21px;
    height: 21px;
    margin: 11px 0 38px 25px;
    border: solid 3px ${colors.darkBlueGrey};
`;

export const IconButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    ...props
}) => {
    return <Button {...props} />;
};
