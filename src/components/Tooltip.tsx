import { ClassNames } from '@emotion/react';
import React from 'react';
import ReactTooltip, { TooltipProps } from 'react-tooltip';

import { colors } from '../themes/colors';

// font-size: 20px !important;
// pointer-events: auto !important;
// &:hover {
// visibility: visible !important;
// opacity: 1 !important;

export const Tooltip: React.FC<TooltipProps> = ({ ...props }) => {
    return (
        <ClassNames>
            {({ css }) => (
                <ReactTooltip
                    effect="solid"
                    className={css`
                        width: 409px !important;
                        background: #ffffff;
                        padding: 17px 33px 8px 21px !important;
                        box-shadow: 2px 2px 8px 1px rgba(21, 20, 59, 0.1) !important;
                        border: solid 1px ${colors.pinkishGreyTwo} !important;
                        text-align: left !important;
                        opacity: 1 !important;
                    `}
                    backgroundColor={'#FFFFFF'}
                    textColor={colors.slateGrey}
                    borderColor={colors.pinkishGreyTwo}
                    {...props}
                />
            )}
        </ClassNames>
    );
};
