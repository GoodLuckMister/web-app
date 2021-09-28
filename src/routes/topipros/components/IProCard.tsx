import React from 'react';

import {
    Badge,
    CardBox,
    FlexBox,
    KeyValueColumn,
    Label,
    Picture,
    ProHeader
} from '../../../components';
import { BaseIPro } from '../../../types';
import { roundDecimal } from '../../../utils/number';

const IPro: React.FC<BaseIPro & { onClick: () => void }> = ({
    name,
    type,
    spoq,
    reviews,
    score,
    image,
    onClick
}) => {
    return (
        <CardBox onClick={onClick}>
            <Picture src={image} />
            <ProHeader style={{ textAlign: 'center' }}>{name}</ProHeader>
            <Label style={{ textAlign: 'center' }}>{type}</Label>
            <FlexBox style={{ justifyContent: 'space-evenly', marginTop: 20, marginBottom: 10 }}>
                <KeyValueColumn label={'SPOQ'} value={spoq} />
                <KeyValueColumn label={'Reviews'} value={reviews} />
                <KeyValueColumn label={'Score'} value={<Badge value={roundDecimal(score)} />} />
            </FlexBox>
        </CardBox>
    );
};
export default IPro;
