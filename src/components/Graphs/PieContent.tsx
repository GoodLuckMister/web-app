import React from 'react';

import { colors } from '../../themes/colors';

interface IPieContent {
    value: number | string;
    label?: string;
    unit?: string;
    diameter?: number;
    onDetails?: React.MouseEventHandler;
}

export const PieContent: React.FC<IPieContent> = ({
    value,
    label,
    unit,
    diameter = 256,
    onDetails
}) => {
    const proportion = diameter / 256;

    const fontStyle: React.CSSProperties = {
        fontFamily: 'Assistant',
        fontWeight: 'bold',
        textAnchor: 'middle'
    };

    const valueStyle: React.CSSProperties = {
        ...fontStyle,
        fontSize: 40 * proportion,
        fill: 'white'
    };

    const valueElement = (
        <text style={valueStyle}>
            <tspan>{value}</tspan>
            {unit && <tspan style={{ fontSize: 24 * proportion }}>{unit}</tspan>}
        </text>
    );

    const labelStyle: React.CSSProperties = {
        ...fontStyle,
        fontSize: 16 * proportion,
        fill: 'blue'
    };

    const labelElement = (
        <text style={labelStyle} y={25 * proportion}>
            <tspan>{label}</tspan>
        </text>
    );

    const detailsStyle: React.CSSProperties = {
        ...fontStyle,
        fontSize: 14 * proportion,
        fontWeight: 600,
        textAlign: 'center',
        fill: colors.fuchsia,
        cursor: 'pointer'
    };

    const detailsButtonElement = (
        <g>
            <rect
                width={82 * proportion}
                height={25 * proportion}
                fill="none"
                stroke={colors.fuchsia}
                y={55 * proportion}
                x={-41 * proportion}
                ry={20 * proportion}
                rx={10 * proportion}
            />
            {onDetails && (
                <text style={detailsStyle} y={71 * proportion} onClick={onDetails}>
                    <tspan>Details</tspan>
                </text>
            )}
        </g>
    );

    return (
        <g>
            {valueElement}
            {labelElement}
            {onDetails && detailsButtonElement}
        </g>
    );
};
