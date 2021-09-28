import React from 'react';

import { colors } from '../themes/colors';
import { Iconed } from './lib';

export const Teachers: React.FC<Iconed> = ({ width, height, viewBox, color = colors.fuchsia }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ?? 50}
            height={height ?? 50}
            viewBox={viewBox ?? '0 0 56 50'}>
            <g fill="none" fillRule="evenodd">
                <g fillRule="nonzero">
                    <g>
                        <g>
                            <path
                                fill={color}
                                d="M36.509 30.107c-.141-.47-.722-.69-1.318-.69-.58 0-1.161.22-1.302.69l-3.029 9.87c-.016.062-.031.125-.031.156 0 .503.737.848 1.287.848.345 0 .611-.11.69-.408l.596-2.087h3.593l.597 2.087c.078.298.345.408.69.408.55 0 1.287-.361 1.287-.848 0-.047-.016-.094-.032-.156l-3.028-9.87zm-2.683 6.778l1.365-4.817 1.365 4.817h-2.73z"
                                transform="translate(-992 -356) translate(899 293) translate(93 63)"
                            />
                            <path
                                fill="#000"
                                d="M44.613 20.397h-15.01v-6.41l4.878-3.485c.385-.275.613-.719.613-1.192s-.228-.917-.613-1.192l-4.937-3.526C29.158 1.997 26.915 0 24.215 0H5.387C2.417 0 0 2.417 0 5.387v18.829c0 2.97 2.417 5.387 5.387 5.387h15.01v6.41l-4.878 3.485c-.385.275-.613.72-.613 1.192 0 .473.228.917.613 1.192l4.937 3.526C20.842 48.003 23.085 50 25.785 50h18.828C47.583 50 50 47.583 50 44.613V25.785c0-2.971-2.417-5.388-5.387-5.388zM5.387 26.673c-1.355 0-2.457-1.102-2.457-2.458V5.387c0-1.355 1.102-2.457 2.457-2.457h18.828c1.355 0 2.458 1.102 2.458 2.457 0 .474.228.918.613 1.192l3.823 2.73-3.823 2.731c-.385.275-.613.72-.613 1.192v7.165h-.888c-2.97 0-5.387 2.417-5.387 5.387v.89H5.388zm41.683 17.94c0 1.355-1.102 2.457-2.457 2.457H25.785c-1.355 0-2.458-1.102-2.458-2.457 0-.474-.228-.918-.613-1.192l-3.823-2.73 3.823-2.731c.385-.275.613-.72.613-1.192V25.785c0-1.356 1.103-2.458 2.458-2.458H44.613c1.355 0 2.457 1.102 2.457 2.458v18.828z"
                                transform="translate(-992 -356) translate(899 293) translate(93 63)"
                            />
                            <path
                                fill={color}
                                d="M19.302 13.504c.456 0 .826-.37.826-.827 0-.456-.37-.826-.826-.826h-3.675V9.845c0-.456-.37-.826-.826-.826-.456 0-.826.37-.826.826v2.006H10.3c-.455 0-.825.37-.825.826 0 .457.37.827.825.827h1.14c.181 1.744.933 3.32 2.065 4.542-.938.561-2.034.886-3.205.886-.455 0-.825.37-.825.825 0 .457.37.827.825.827 1.672 0 3.223-.523 4.501-1.412 1.279.89 2.83 1.412 4.501 1.412.456 0 .826-.37.826-.827 0-.456-.37-.825-.826-.825-1.17 0-2.266-.324-3.204-.886 1.131-1.221 1.883-2.798 2.065-4.542h1.139zm-4.501 3.51c-.904-.938-1.517-2.157-1.697-3.51h3.395c-.18 1.353-.794 2.572-1.698 3.51z"
                                transform="translate(-992 -356) translate(899 293) translate(93 63)"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};
