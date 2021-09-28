import styled from '@emotion/styled';
import React, { CSSProperties } from 'react';

import { colors } from '../../themes/colors';

export const StyledInput = styled.input<{ error?: boolean }>`
    height: 40px;
    margin: 10px 0 0;
    padding: 0px 0px 0px 15px;
    object-fit: contain;
    border-color: ${colors.form};
    border-style: solid;
    border-width: thin;
    font-size: 1em;
    outline: none;
    ${({ error }) => (error ? `border: 1px red solid;` : 'none;')}
    ${({ value }) => (value ? `background-color: #ffffff;` : 'background-color: #f2f3f7;')}
    font-family: Poppins;
    font-weight: 600;
    color: ${colors.form};
`;

export interface IInput extends React.ComponentProps<'input'> {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
    placeholder: string;
    style?: CSSProperties;
    error?: boolean;
    dataTest?: string;
}

export const Input: React.FC<IInput> = ({ error = false, ...props }) => {
    return <StyledInput error={error} {...props} />;
};
