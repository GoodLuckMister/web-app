import React from 'react';

import { colors } from '../themes/colors';
import { Iconed } from './lib';

export const Legal: React.FC<Iconed> = ({ width, height, viewBox, color = colors.fuchsia }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ?? 56}
            height={height ?? 56}
            viewBox={viewBox ?? '0 0 56 56'}>
            <g fill="none" fillRule="evenodd">
                <g>
                    <g>
                        <g transform="translate(-1262 -1034) translate(899 293) translate(363 741)">
                            <g fill="#000" fillRule="nonzero">
                                <path d="M52.719 13.234v-3.28h-20.08c-.494-1.397-1.602-2.505-2.998-3V0h-3.282v6.954c-1.396.495-2.504 1.603-2.999 3H3.281v3.28h4.102L0 30.954v.327c0 4.523 3.68 8.203 8.203 8.203h3.281c4.524 0 8.204-3.68 8.204-8.203v-.328l-7.383-17.719H23.36c.495 1.396 1.603 2.504 3 3v23.525c-3.256.663-5.815 3.262-6.423 6.537-3.809.708-6.703 4.053-6.703 8.063V56h29.532v-1.64c0-4.011-2.894-7.356-6.703-8.064-.608-3.275-3.167-5.874-6.422-6.537V16.233c1.396-.495 2.504-1.603 2.999-2.999h11.055l-7.383 17.72v.327c0 4.523 3.68 8.203 8.204 8.203h3.28c4.524 0 8.204-3.68 8.204-8.203v-.328l-7.383-17.719h4.102zM9.844 15.86l5.742 13.782H4.102l5.742-13.782zm1.64 20.344h-3.28c-2.14 0-3.963-1.372-4.64-3.282h12.56c-.677 1.91-2.5 3.282-4.64 3.282zM46.156 15.86l5.742 13.782H40.414l5.742-13.782zm1.64 20.344h-3.28c-2.14 0-3.963-1.372-4.64-3.282h12.56c-.677 1.91-2.5 3.282-4.64 3.282zM39.204 52.72H16.797c.677-1.91 2.502-3.282 4.64-3.282h13.126c2.139 0 3.963 1.372 4.64 3.282zm-6.563-6.563h-9.28c.678-1.91 2.501-3.281 4.64-3.281s3.962 1.372 4.64 3.281zM28 13.234c-.905 0-1.64-.736-1.64-1.64 0-.905.735-1.64 1.64-1.64.905 0 1.64.735 1.64 1.64 0 .904-.735 1.64-1.64 1.64z" />
                            </g>
                            <circle cx="28" cy="11.5" r="3.25" stroke={color} strokeWidth="3.5" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};
