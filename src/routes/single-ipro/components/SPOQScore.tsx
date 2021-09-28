import React from 'react';

import { Gauge, Tooltip } from '../../../components';
import { SPOQ } from '../../../types';
interface ISPOQScore {
    score: number;
    spoq: SPOQ;
    style?: React.CSSProperties;
}
const SPOQScore: React.FC<ISPOQScore> = ({ spoq, score, style }) => {
    if (isNaN(score)) return null;
    return (
        <>
            <Tooltip multiline id="spoqInfoTooltip" />
            <div style={style}>
                <Gauge value={score} label={spoq} />
            </div>
        </>
    );
};
export default SPOQScore;
