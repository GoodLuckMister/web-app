import React from 'react';

import { Share } from '../../Icons';
import { StyledButton } from './shared';

export const ShareButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    ...props
}) => {
    return (
        <StyledButton {...props}>
            <Share />
        </StyledButton>
    );
};
