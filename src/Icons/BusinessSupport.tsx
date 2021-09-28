import React from 'react';

import { colors } from '../themes/colors';
import { Iconed } from './lib';

export const BusinessSupport: React.FC<Iconed> = ({
    width,
    height,
    viewBox,
    color = colors.fuchsia
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ?? 50}
            height={height ?? 58}
            viewBox={viewBox ?? '0 0 50 58'}>
            <g fill="none" fillRule="evenodd">
                <g>
                    <g>
                        <g transform="translate(-1267 -643) translate(899 125) translate(368 518)">
                            <g fill="#000" fillRule="nonzero">
                                <path d="M25 0C11.215 0 0 11.215 0 25v13.556c0 2.757 2.243 5 5 5h1.953c.688 1.94 2.54 3.333 4.714 3.333 2.757 0 5-2.243 5-5V28.333c0-2.757-2.243-5-5-5-2.173 0-4.026 1.394-4.714 3.334H5c-.584 0-1.145.101-1.667.286V25c0-11.947 9.72-21.667 21.667-21.667 11.947 0 21.667 9.72 21.667 21.667v1.953c-.522-.185-1.083-.286-1.667-.286h-1.953c-.688-1.94-2.54-3.334-4.714-3.334-2.757 0-5 2.243-5 5V41.89c0 2.757 2.243 5 5 5 .505 0 .992-.076 1.452-.216-.624 2.052-2.533 3.55-4.785 3.55h-5.287c-.688-1.94-2.54-3.334-4.713-3.334-2.757 0-5 2.243-5 5s2.243 5 5 5c2.173 0 4.025-1.394 4.713-3.333H35c4.595 0 8.333-3.739 8.333-8.334v-1.666H45c2.757 0 5-2.243 5-5V25C50 11.215 38.785 0 25 0zM10 28.333c0-.919.748-1.666 1.667-1.666s1.666.747 1.666 1.666V41.89c0 .919-.747 1.667-1.666 1.667-.92 0-1.667-.748-1.667-1.667V28.333zM5 30h1.667v10.222H5c-.919 0-1.667-.747-1.667-1.666v-6.89C3.333 30.749 4.081 30 5 30zm20 23.556c-.919 0-1.667-.748-1.667-1.667 0-.92.748-1.667 1.667-1.667s1.667.748 1.667 1.667-.748 1.667-1.667 1.667zm15-11.667c0 .919-.748 1.667-1.667 1.667s-1.666-.748-1.666-1.667V28.333c0-.919.747-1.666 1.666-1.666.92 0 1.667.747 1.667 1.666V41.89zm6.667-3.333c0 .919-.748 1.666-1.667 1.666h-1.667V30H45c.919 0 1.667.748 1.667 1.667v6.889z" />
                            </g>
                            <circle cx="24.8" cy="51.8" r="3.8" stroke={color} strokeWidth="3.5" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};
