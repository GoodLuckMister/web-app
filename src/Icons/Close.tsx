import React from 'react';

import { colors } from '../themes/colors';
import { Iconed } from './lib';

export const Close: React.FC<Iconed> = ({ color = colors.darkBlueGrey, style }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            style={style}>
            <g
                fill="none"
                fillRule="evenodd"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3">
                <path d="M0 0L15 15" transform="translate(2 2)" />
                <path d="M0 0L15 15" transform="translate(2 2) matrix(-1 0 0 1 15 0)" />
            </g>
        </svg>
    );
};
