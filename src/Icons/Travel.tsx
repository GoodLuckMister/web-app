import React from 'react';

import { colors } from '../themes/colors';
import { Iconed } from './lib';

export const Travel: React.FC<Iconed> = ({ width, height, viewBox, color = colors.fuchsia }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ?? 56}
            height={height ?? 56}
            viewBox={viewBox ?? '0 0 56 56'}>
            <g fill="none" fillRule="evenodd">
                <g>
                    <g>
                        <g>
                            <path
                                fill="#000"
                                fillRule="nonzero"
                                d="M54.896 1.159c-1.33-1.33-3.63-1.462-6.65-.379-2.078.745-4.258 1.993-5.3 3.036l-8.373 8.372L7.013 7.86 0 14.872l22.914 8.975-7.357 7.358-10.442.611-5.007 5.007 11.332 5.468-3.175 3.175 2.323 2.323 3.17-3.17 5.474 11.327 5.006-5.006.612-10.443 7.48-7.48 8.974 22.91 7.012-7.013-4.328-27.556 8.25-8.25c1.043-1.042 2.291-3.221 3.036-5.3 1.083-3.02.952-5.32-.378-6.65zM5.874 13.645l2.28-2.28L31.7 15.063l-6.25 6.249-19.575-7.667zm38.937 34.127l-2.28 2.28-7.665-19.57 6.248-6.249 3.697 23.54zm7.37-41.071c-.627 1.75-1.665 3.483-2.266 4.084L21.643 39.058 21.032 49.5l-.853.853-3.96-8.194 2.856-2.856-2.323-2.323-2.851 2.85-8.199-3.955.852-.852 10.443-.611L45.269 6.139c.601-.601 2.334-1.638 4.085-2.266 1.988-.713 3.043-.567 3.219-.391.175.176.321 1.23-.392 3.219z"
                                transform="translate(-989 -811) translate(899 293) translate(90 518)"
                            />
                            <path
                                fill={color}
                                d="M11.646 35.854H15.646V48.854H11.646z"
                                transform="translate(-989 -811) translate(899 293) translate(90 518) rotate(45 13.646 42.354)"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};
