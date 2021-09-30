import React from 'react';
import { useMediaQuery } from 'react-responsive';

import {
    Badge,
    CardBox,
    CardBoxMobile,
    FlexBox,
    KeyValueColumn,
    Label,
    Picture,
    ProHeader
} from '../../../components';
import { BaseIPro } from '../../../types';
import { roundDecimal } from '../../../utils/number';

const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return isMobile ? children : null;
};

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
        <>
            <Mobile>
                <CardBoxMobile onClick={onClick}>
                    <Picture src={image} />
                    <ProHeader style={{ textAlign: 'center' }}>{name}</ProHeader>
                    <Label style={{ textAlign: 'center' }}>{type}</Label>
                    <FlexBox style={{ justifyContent: 'space-evenly', marginTop: 10 }}>
                        <KeyValueColumn label={'SPOQ'} value={spoq} />
                        <KeyValueColumn label={'Reviews'} value={reviews} />
                        <KeyValueColumn
                            label={'Score'}
                            value={<Badge value={roundDecimal(score)} />}
                        />
                    </FlexBox>
                </CardBoxMobile>
            </Mobile>
            <Desktop>
                <CardBox onClick={onClick}>
                    <Picture src={image} />
                    <ProHeader style={{ textAlign: 'center' }}>{name}</ProHeader>
                    <Label style={{ textAlign: 'center' }}>{type}</Label>
                    <FlexBox
                        style={{ justifyContent: 'space-evenly', marginTop: 20, marginBottom: 10 }}>
                        <KeyValueColumn label={'SPOQ'} value={spoq} />
                        <KeyValueColumn label={'Reviews'} value={reviews} />
                        <KeyValueColumn
                            label={'Score'}
                            value={<Badge value={roundDecimal(score)} />}
                        />
                    </FlexBox>
                </CardBox>
            </Desktop>
        </>
    );
};
export default IPro;
