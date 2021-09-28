import React from 'react';

import { colors } from '../themes/colors';
import { Iconed } from './lib';

export const Chevron: React.FC<Iconed> = ({ color = colors.fuchsia, style }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="12"
            viewBox="0 0 7 12"
            style={style}>
            <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <g stroke={color} strokeWidth="2">
                    <g>
                        <path
                            d="M5 6L0 11 5 16"
                            transform="translate(-239 -154) translate(240 149)"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};
