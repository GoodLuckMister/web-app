import styled from '@emotion/styled';
import React from 'react';

import { IInput, Input } from '.';

const Styled = styled(Input)<IInput>`
    -webkit-text-security: disc !important;
`;
type ConvertRef<T, Target extends HTMLElement> = Omit<T, 'ref'> & { ref?: React.Ref<Target> };
export const PasswordInput: React.FC<ConvertRef<IInput, HTMLInputElement>> = ({
    value,
    ...props
}) => {
    return <Styled {...props} value={value} />;
};
