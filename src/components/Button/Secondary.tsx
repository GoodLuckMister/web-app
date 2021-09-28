import styled from '@emotion/styled';
import React, { ButtonHTMLAttributes } from 'react';
import Ripples from 'react-ripples';

import { colors } from '../../themes/colors';
import { inter } from '../Typography';

const Button = styled.button`
    width: 95px;
    height: 28px;
    border-radius: 4px;
    border-radius: 3.5px;
    border: solid 0.9px ${colors.fuchsia};
    background-color: transparent;
    outline: none;
    cursor: pointer;
    ${inter};
    color: ${colors.fuchsia};
    font-weight: 600;
    font-size: 0.75em;
`;

export const SecondaryButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...rest }) => {
    return (
        <Ripples>
            <Button {...rest} />
        </Ripples>
    );
};
