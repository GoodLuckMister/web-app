import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';

import { colors } from '../themes/colors';

interface ILoader {
    size?: number;
    color?: string;
    style?: React.CSSProperties;
}

export const Loader: React.FC<ILoader> = ({ size = 10, color = colors.fuchsia, style }) => {
    return (
        <div style={style}>
            <SyncLoader color={color} size={size} />
        </div>
    );
};
