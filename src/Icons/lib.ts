import { CSSProperties } from 'react';
export interface Iconed {
    width?: number;
    height?: number;
    viewBox?: string;
    color?: string;
    style?: CSSProperties;
}
export interface RGB {
    red: number;
    green: number;
    blue: number;
}
export const hexToRGB = (hex: string): RGB => {
    if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        throw new Error('Bad Hex');
    }
    const hexStrArray = hex.substring(1).split('');
    let fullHexString: string[] = [];
    if (hexStrArray.length === 3) {
        fullHexString = [
            hexStrArray[0],
            hexStrArray[0],
            hexStrArray[1],
            hexStrArray[1],
            hexStrArray[2],
            hexStrArray[2]
        ];
    }
    const hexString = `0x${
        fullHexString.length > 0 ? fullHexString.join('') : hexStrArray.join('')
    }`;
    const num = parseInt(hexString, 16);
    return {
        red: (num >> 16) & 255,
        green: (num >> 8) & 255,
        blue: num & 255
    };
};
export const hexToRgba = (hex: string, opacity: number) => {
    const rgb = hexToRGB(hex);
    const rgba = [...Object.values(rgb), opacity];
    return `rgba(${rgba.join(',')})`;
};
export const getMatrixFromRGB = (rgb: RGB) =>
    `0 0 0 0 ${rgb.red / 255} 0 0 0 0 ${rgb.green / 255} 0 0 0 0 ${rgb.blue / 255} 0 0 0 1 0`;
