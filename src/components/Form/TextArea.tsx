import styled from '@emotion/styled';
import React from 'react';

import { colors } from '../../themes/colors';

const Text = styled.textarea`
    ${({ value }) => (value ? `background-color: #ffffff;` : 'background-color: #f2f3f7;')}
    font-size: 16px;
    outline: none;
    border-color: ${colors.form};
    font-family: Poppins;
    color: ${colors.form};
    font-weight: 600;
    padding-left: 15px;
    padding-top: 10px;
`;

type ITextArea = React.ComponentProps<'textarea'>;

export const TextArea: React.FC<ITextArea> = (props) => {
    return <Text {...props} />;
};
