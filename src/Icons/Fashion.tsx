import React from 'react';

import { colors } from '../themes/colors';
import { Iconed } from './lib';

export const Fashion: React.FC<Iconed> = ({ width, height, viewBox, color = colors.fuchsia }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ?? 55}
            height={height ?? 56}
            viewBox={viewBox ?? '0 0 55 56'}>
            <g fill="none" fillRule="evenodd">
                <g fillRule="nonzero">
                    <g>
                        <g transform="translate(-1528 -1034) translate(899 293) translate(629 741)">
                            <g fill="#000">
                                <path d="M52.426 27.184c-.42-4.211-3.93-7.387-8.162-7.387H42v-5.031C42 6.624 35.376 0 27.234 0S12.47 6.624 12.47 14.766v5.03h-2.265c-4.232 0-7.74 3.177-8.162 7.389C-.06 48.32.032 47.245.032 47.797.032 52.31 3.698 56 8.236 56h37.997c4.536 0 8.204-3.687 8.204-8.203 0-.595.103.64-2.01-20.613zM15.75 14.766c0-6.333 5.152-11.485 11.484-11.485 6.333 0 11.485 5.152 11.485 11.485v5.03h-3.282v-5.03c0-4.524-3.68-8.204-8.203-8.204s-8.203 3.68-8.203 8.204v5.03H15.75v-5.03zm16.406 0v5.03h-9.844v-5.03c0-2.714 2.208-4.922 4.922-4.922 2.714 0 4.922 2.208 4.922 4.922zm9.752 8.301c-.63 5.643-4.496 10.516-9.752 12.4v-.795c0-.906-.734-1.64-1.64-1.64h-6.563c-.906 0-1.64.734-1.64 1.64v.795c-5.257-1.884-9.122-6.757-9.753-12.4h29.348zM28.875 36.312v3.282h-3.281v-1.967V36.313h3.28zM46.233 52.72H8.236c-2.216 0-3.99-1.443-4.645-3.292h47.286c-.654 1.847-2.426 3.292-4.644 3.292zm-42.78-6.563L5.307 27.51c.22-2.209 1.858-3.943 3.963-4.344.353 3.67 1.832 7.196 4.226 10.03 2.322 2.748 5.415 4.744 8.816 5.715v2.323c0 .906.735 1.641 1.641 1.641h6.563c.906 0 1.64-.735 1.64-1.64V38.91c3.401-.97 6.494-2.967 8.817-5.716 2.394-2.833 3.872-6.359 4.225-10.029 2.105.401 3.742 2.135 3.963 4.343l1.855 18.647H3.453z" />
                            </g>
                            <rect
                                width="6.7"
                                height="6.5"
                                x="23.781"
                                y="34.75"
                                stroke={color}
                                strokeWidth="3.5"
                                rx="1"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};