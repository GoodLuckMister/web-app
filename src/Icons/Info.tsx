import React from 'react';

import { colors } from '../themes/colors';
import { Iconed } from './lib';

export const Info: React.FC<Iconed> = ({ color = colors.darkBlueGrey, style }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            style={style}>
            <path
                fill={color}
                d="M8 0c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm-.056 10.83c-.583 0-1.058.475-1.058 1.058 0 .583.475 1.057 1.058 1.057.582 0 1.057-.474 1.057-1.057s-.475-1.057-1.057-1.057zm0-7.569c-.583 0-1.05.475-1.05 1.058v4.229c0 .583.467 1.057 1.05 1.057.582 0 1.071-.474 1.071-1.057v-4.23c0-.582-.489-1.057-1.071-1.057z"
            />
        </svg>
    );
};
