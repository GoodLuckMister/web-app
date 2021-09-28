import styled from '@emotion/styled';
import React from 'react';

import { Close } from '../../Icons';
import { colors } from '../../themes/colors';
const Button = styled.button`
    border: 0;
    padding: 0;
    background-color: white;
    outline: none;
    cursor: pointer;
    &:hover {
        background-color: ${colors.pinkishGrey};
        border-radius: 50%;
        box-shadow: 0 0 0 3px ${colors.pinkishGrey};
    }
`;
export const CloseButton: React.FC<
    React.ButtonHTMLAttributes<HTMLButtonElement> & { iconStyle?: React.CSSProperties }
> = ({ iconStyle, ...props }) => {
    return (
        <Button {...props}>
            <Close style={iconStyle} color={iconStyle?.color} />
        </Button>
    );
};
