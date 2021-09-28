import React, { useState } from 'react';

import { Filter } from '../../Icons';
import { colors } from '../../themes/colors';
import { StyledButton } from './shared';

export const FilterButton: React.FC<
    React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }
> = ({ active, ...props }) => {
    const [hover, setHover] = useState(false);
    return (
        <StyledButton
            {...props}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <Filter color={hover || active ? colors.fuchsia : colors.darkBlueGrey} />
        </StyledButton>
    );
};
