import React from 'react';

import { getStyledNumber } from '../utils/number';
import { FlexBox, SmallTitleBold } from '.';

interface IImageIndex {
    value: number;
    image: React.ReactNode;
    style?: React.CSSProperties;
}

export const ImageIndex: React.FC<IImageIndex> = ({ value, image, style }) => {
    return (
        <FlexBox style={style}>
            {image}
            <SmallTitleBold style={{ marginLeft: 10 }}>{getStyledNumber(value)}</SmallTitleBold>
        </FlexBox>
    );
};
