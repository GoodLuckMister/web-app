import { scaleLinear } from 'd3-scale';
import { arc } from 'd3-shape';
import React from 'react';

import { colors } from '../../themes/colors';

interface IGauge {
    value?: number;
    min?: number;
    max?: number;
    label?: string;
    units?: unknown[];
    style?: React.CSSProperties;
}
export const Gauge: React.FC<IGauge> = ({ value = 79, min = 0, max = 100, label, style }) => {
    const outerRadius = 130;
    const innerRadius = 120;
    const baseAngle = Math.PI * 0.8;
    const backgroundArc = arc()
        .innerRadius(innerRadius + 3)
        .outerRadius(outerRadius - 3)
        .startAngle(-baseAngle)
        .endAngle(baseAngle)
        .cornerRadius(1);
    const percentScale = scaleLinear().domain([min, max]).range([0, 1]);
    const percent = percentScale(value);
    const angleScale = scaleLinear()
        .domain([0, 1])
        .range([-1 * baseAngle, baseAngle])
        .clamp(true);
    const angle = angleScale(percent);
    const filledArc = arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle(-1 * baseAngle)
        .endAngle(angle)
        .cornerRadius(25);
    const colorScale = scaleLinear().domain([0, 1]).range(['#dcd7d7', '#9bdf10']);
    const gradientSteps = colorScale.ticks(10).map(colorScale);

    return (
        <div style={style}>
            <svg width={400} height={400}>
                <defs>
                    <linearGradient id="Gauge__gradient" gradientUnits="userSpaceOnUse">
                        {gradientSteps.map((color, index) => (
                            <stop
                                key={color}
                                stopColor={color}
                                offset={`${index / (gradientSteps.length - 1)}`}
                            />
                        ))}
                    </linearGradient>
                    <filter
                        id="dropshadow"
                        x="-40%"
                        y="-40%"
                        width="180%"
                        height="180%"
                        filterUnits="userSpaceOnUse">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                        <feOffset dx="5" dy="5" result="offsetblur" />
                        <feOffset dx="-5" dy="-5" result="offsetblur" />
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <g transform={`translate(200, 200)`}>
                    <path d={backgroundArc(null)} fill="#dcd7d7" />
                </g>
                <g transform={`translate(200, 200)`}>
                    {/* <path d={filledArc(null)} fill="url(#Gauge__gradient)" /> */}
                    <path d={filledArc(null)} fill="#9bdf10" />
                </g>

                <circle
                    fill="#dddddd"
                    cx="200"
                    cy="200"
                    r="100"
                    strokeWidth="3"
                    style={{ filter: 'url(#dropshadow)' }}></circle>
                <circle fill="#ffffff" cx="200" cy="200" r="99" strokeWidth="3"></circle>
                <g transform={`translate(${label.length > 4 ? 150 : 170}, 180)`}>
                    <text
                        fill={colors.darkBlueGrey}
                        style={{
                            fontSize: 30,
                            fontFamily: 'Assistant',
                            fontWeight: 'bold',
                            color: colors.darkBlueGrey
                        }}>
                        {label}
                    </text>
                </g>
                <g transform={`translate(162, 210)`}>
                    <text
                        fill={colors.steel}
                        style={{
                            fontSize: 14,
                            fontFamily: 'Inter',
                            color: colors.steel
                        }}>
                        SPOQ Score
                    </text>
                </g>
                <g
                    transform={`translate(190, 230)`}
                    data-for="spoqInfoTooltip"
                    style={{ cursor: 'pointer' }}>
                    <path
                        data-tip="SPOQ - Social Proof Of Quality<br /> Index combines iPro's social presence quality and customers shared experience (regarding iPro's service quality)"
                        fill={'#d8d8d8'}
                        d="M8 0c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm-.056 10.83c-.583 0-1.058.475-1.058 1.058 0 .583.475 1.057 1.058 1.057.582 0 1.057-.474 1.057-1.057s-.475-1.057-1.057-1.057zm0-7.569c-.583 0-1.05.475-1.05 1.058v4.229c0 .583.467 1.057 1.05 1.057.582 0 1.071-.474 1.071-1.057v-4.23c0-.582-.489-1.057-1.071-1.057z"
                    />
                </g>
            </svg>
        </div>
    );
};
