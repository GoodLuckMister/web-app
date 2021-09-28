import React from 'react';
import { SVGUniqueID } from 'react-svg-unique-id';

import { colors } from '../themes/colors';
import { getMatrixFromRGB, hexToRGB, Iconed } from './lib';

export const Search: React.FC<Iconed> = ({ color = colors.darkBlueGrey, style }) => {
    const matrix = getMatrixFromRGB(hexToRGB(color));
    return (
        <SVGUniqueID>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                style={style}>
                <defs>
                    <filter id="2rn7oj08sa">
                        <feColorMatrix in="SourceGraphic" values={matrix} />
                    </filter>
                </defs>
                <g fill="none" fillRule="evenodd">
                    <g>
                        <g
                            fill="#000"
                            fillRule="nonzero"
                            filter="url(#2rn7oj08sa)"
                            transform="translate(-1233 -198) translate(1233 198)">
                            <path d="M4.97 4.096c-.26-.26-.68-.26-.94 0-.964.964-1.438 2.307-1.3 3.684.034.344.323.6.66.6.023 0 .045-.002.067-.004.366-.037.633-.363.596-.728-.098-.979.236-1.93.917-2.611.26-.26.26-.681 0-.94z" />
                            <path d="M7.603 0C3.411 0 0 3.41 0 7.603s3.41 7.604 7.603 7.604 7.604-3.411 7.604-7.604C15.207 3.411 11.796 0 7.603 0zm0 13.877c-3.459 0-6.273-2.814-6.273-6.274 0-3.459 2.814-6.273 6.273-6.273 3.46 0 6.274 2.814 6.274 6.273 0 3.46-2.814 6.274-6.274 6.274z" />
                            <path d="M17.805 16.865l-4.832-4.833c-.26-.26-.68-.26-.94 0-.26.26-.26.681 0 .94l4.832 4.833c.13.13.3.195.47.195.17 0 .34-.065.47-.195.26-.26.26-.68 0-.94z" />
                        </g>
                    </g>
                </g>
            </svg>
        </SVGUniqueID>
    );
};
