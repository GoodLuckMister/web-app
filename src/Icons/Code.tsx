import React from 'react';

import { getMatrixFromRGB, hexToRGB, Iconed } from './lib';

export const Code: React.FC<Iconed> = ({ width, height, viewBox, color }) => {
    const matrix = getMatrixFromRGB(hexToRGB(color));
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ?? 26}
            height={height ?? 20}
            viewBox={viewBox ?? '0 0 26 20'}>
            <defs>
                <filter id="dnxr8mnx1a">
                    <feColorMatrix in="SourceGraphic" values={matrix} />
                </filter>
            </defs>
            <g fill="none" fillRule="evenodd" opacity=".471">
                <g filter="url(#dnxr8mnx1a)" transform="translate(-769 -141)">
                    <g>
                        <path
                            fill={color}
                            fillRule="nonzero"
                            d="M24.841 9.354l-5.804-6.149c-.356-.378-.952-.395-1.33-.038-.378.356-.396.952-.039 1.33L22.863 10l-5.195 5.503c-.357.378-.339.974.039 1.33.182.172.414.257.646.257.25 0 .5-.099.684-.294l5.804-6.15c.342-.362.342-.929 0-1.292zM7.43 15.503L2.236 10 7.43 4.497c.356-.378.34-.974-.039-1.33-.378-.357-.974-.34-1.33.038L.257 9.354c-.343.363-.343.93 0 1.292l5.804 6.15c.185.196.434.294.684.294.232 0 .465-.085.646-.256.379-.357.395-.953.039-1.331zM14.072.034c-.514-.078-.995.275-1.073.789l-2.76 18.07c-.08.514.274.994.788 1.073.048.007.096.01.143.01.457 0 .858-.333.93-.799l2.76-18.07c.078-.514-.275-.994-.788-1.073z"
                            transform="translate(769 141)"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};
