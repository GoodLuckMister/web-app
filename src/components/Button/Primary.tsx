import styled from '@emotion/styled';
import React, { ButtonHTMLAttributes } from 'react';
import Ripples from 'react-ripples';

import { colors } from '../../themes/colors';
import { inter } from '../Typography';

const Button = styled.button<{ disabled: boolean }>`
    width: 108px;
    height: 40px;
    border-radius: 4px;
    ${({ disabled }) =>
        disabled
            ? `background-color: ${colors.pinkishGrey};`
            : `background-image: linear-gradient(to bottom, ${colors.pinkPurple}, ${colors.fuchsia});`}
    border-color: transparent;
    outline: none;
    ${({ disabled }) => (disabled ? `cursor: not-allowed;` : `cursor: pointer;`)}
    ${inter};
    font-weight: 600;
`;

export const PrimaryButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    disabled,
    ...rest
}) => {
    return (
        <Ripples>
            <Button {...rest} disabled={disabled} />
        </Ripples>
    );
};
