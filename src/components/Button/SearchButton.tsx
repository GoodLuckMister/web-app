import React, { useState } from 'react';

import { Search } from '../../Icons';
import { colors } from '../../themes/colors';
import { StyledButton } from './shared';

export const SearchButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    ...props
}) => {
    const [hover, setHover] = useState(false);
    return (
        <StyledButton
            {...props}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <Search color={hover ? colors.fuchsia : colors.darkBlueGrey} />
        </StyledButton>
    );
};
