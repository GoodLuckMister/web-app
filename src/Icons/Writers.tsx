import React from 'react';

import { colors } from '../themes/colors';
import { Iconed } from './lib';

export const Writers: React.FC<Iconed> = ({ width, height, viewBox, color = colors.fuchsia }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ?? 50}
            height={height ?? 50}
            viewBox={viewBox ?? '0 0 50 50'}>
            <g fill="none" fillRule="evenodd">
                <g fillRule="nonzero">
                    <g>
                        <g>
                            <path
                                fill="#000"
                                d="M48.71 15.735c-1.713-1.713-4.501-1.713-6.215 0l-4.407 4.411V8.538c0-1.174-.457-2.278-1.288-3.108l-4.143-4.143C31.827.457 30.724 0 29.55 0H4.396C1.973 0 .002 1.971.002 4.395v41.21C.002 48.03 1.973 50 4.396 50h29.297c2.423 0 4.395-1.971 4.395-4.395V32.581L48.71 21.95c1.717-1.717 1.718-4.497 0-6.215zM29.3 2.93c.276 0 .81-.048 1.287.429l4.143 4.143c.465.465.43.974.43 1.287h-5.86V2.93zm5.859 42.675c0 .808-.657 1.465-1.465 1.465H4.396c-.807 0-1.465-.657-1.465-1.465V4.395c0-.808.658-1.465 1.465-1.465H26.37v7.324c0 .809.656 1.465 1.465 1.465h7.324v11.36l-4.322 4.325-2.07 2.07c-.161.161-.283.357-.354.573l-2.072 6.215c-.176.526-.039 1.107.354 1.499.393.393.973.53 1.499.354l6.215-2.072c.215-.072.412-.193.572-.354l.178-.177v10.093zM31.873 30.51l2.071 2.072-.79.791-3.108 1.036 1.036-3.107.79-.792zm4.143 0l-2.072-2.072 7.042-7.047 2.071 2.072-7.041 7.047zm10.622-10.631l-1.51 1.511-2.072-2.072 1.51-1.511c.572-.572 1.501-.571 2.073 0 .57.57.574 1.497-.001 2.072z"
                                transform="translate(-1537 -415) translate(899 125) translate(638 290)"
                            />
                            <path
                                fill="#0C1329"
                                d="M27.834 14.648H7.326c-.809 0-1.465.656-1.465 1.465 0 .81.656 1.465 1.465 1.465h20.508c.809 0 1.465-.656 1.465-1.465s-.656-1.465-1.465-1.465zM21.974 20.508H7.326c-.809 0-1.465.656-1.465 1.465s.656 1.465 1.465 1.465h14.648c.81 0 1.465-.656 1.465-1.465 0-.81-.656-1.465-1.465-1.465zM21.974 26.367H7.326c-.809 0-1.465.656-1.465 1.465s.656 1.465 1.465 1.465h14.648c.81 0 1.465-.656 1.465-1.465s-.656-1.465-1.465-1.465zM21.974 32.227H7.326c-.809 0-1.465.655-1.465 1.464 0 .81.656 1.465 1.465 1.465h14.648c.81 0 1.465-.656 1.465-1.465s-.656-1.464-1.465-1.464z"
                                transform="translate(-1537 -415) translate(899 125) translate(638 290)"
                            />
                            <path
                                fill={color}
                                d="M27.834 41.21h-8.79c-.808 0-1.464.657-1.464 1.466 0 .809.656 1.465 1.465 1.465h8.789c.809 0 1.465-.656 1.465-1.465 0-.81-.656-1.465-1.465-1.465z"
                                transform="translate(-1537 -415) translate(899 125) translate(638 290)"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};
