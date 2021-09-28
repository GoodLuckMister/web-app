import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { SubLargeText } from '../../../components';
import { BlogImage } from '../../../types/blog';

interface IContent {
    texts?: string[];
    images?: BlogImage[];
    style?: React.CSSProperties;
}

const Content: React.FC<IContent> = ({ texts, images, style }) => {
    let nextAvailableText = 0;
    const data = new Array(texts?.length + images?.length).fill(null);
    images.forEach((image) => {
        data[image.position] = (
            <img src={image.url} width={'100%'} height={590} alt={'temp'} key={uuidv4()} />
        );
    });
    data.forEach((d, index) => {
        if (d === null) {
            data[index] = (
                <SubLargeText style={{ marginBottom: 30 }} key={uuidv4()}>
                    {texts[nextAvailableText]}
                </SubLargeText>
            );
            nextAvailableText++;
        }
    });
    return <div style={style}>{data}</div>;
};
export default Content;
