import React from 'react';

import { colors } from '../themes/colors';
import { getMatrixFromRGB, hexToRGB, Iconed } from './lib';

export const Filter: React.FC<Iconed> = ({ color = colors.darkBlueGrey }) => {
    const matrix = getMatrixFromRGB(hexToRGB(color));
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <defs>
                <filter id="syl0w6x31a">
                    <feColorMatrix in="SourceGraphic" values={matrix} />
                </filter>
            </defs>
            <g fill="none" fillRule="evenodd">
                <g filter="url(#syl0w6x31a)" transform="translate(-1270 -197)">
                    <g>
                        <path
                            fill="#000"
                            fillRule="nonzero"
                            d="M17.352 0H.642C.289 0 0 .288 0 .643v3.213c0 .182.077.356.213.478l6.214 5.592v7.426c0 .355.287.643.642.643.1 0 .199-.023.288-.067l3.856-1.929c.218-.108.356-.331.355-.575V9.926l6.214-5.591c.136-.122.214-.296.213-.479V.643c0-.355-.288-.643-.643-.643zm-.642 3.57l-6.214 5.591c-.136.122-.213.297-.213.48v5.386l-2.57 1.285V9.64c0-.182-.078-.356-.213-.477L1.285 3.57V1.285H16.71V3.57z"
                            transform="translate(1270 197)"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};
