import styled from '@emotion/styled';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import facebook from '../../../assets/img/social/facebook.png';
import general from '../../../assets/img/social/general.png';
import instagram from '../../../assets/img/social/instagram.png';
import linkedin from '../../../assets/img/social/linkedin.png';
import pinterest from '../../../assets/img/social/pinterest.png';
import tiktok from '../../../assets/img/social/tiktok.png';
import twitter from '../../../assets/img/social/twitter.png';
import youtube from '../../../assets/img/social/youtube.png';
import { FlexColumn, FlexRow, ImageIndex, ProHeader, Tooltip } from '../../../components';
import { Info } from '../../../Icons';
import { style as scrollbarsStyle } from '../../../styles/scrollbars';
import { colors } from '../../../themes/colors';
import { SocialIndexType } from '../../../types';
import { SocialNetworks } from '../../../types/global';

const Container = styled.div`
    height: 275px;
    padding: 35px 33px 16px 25px;
    border-radius: 6px;
    box-shadow: 2px 2px 8px 1px rgba(21, 20, 59, 0.1);
    background-color: #ffffff;
    margin-left: 40px;
`;

interface ISocialIndices {
    indices: SocialIndexType;
    style?: React.CSSProperties;
}
const images = {
    [SocialNetworks.facebook]: facebook,
    [SocialNetworks.instagram]: instagram,
    [SocialNetworks.linkedin]: linkedin,
    [SocialNetworks.twitter]: twitter,
    [SocialNetworks.pinterest]: pinterest,
    [SocialNetworks.youtube]: youtube,
    [SocialNetworks.tiktok]: tiktok,
    [SocialNetworks.general]: general
};

const SocialIndices: React.FC<ISocialIndices> = ({ indices, style }) => {
    return (
        <Container style={style}>
            <FlexRow style={{ marginBottom: 25 }}>
                <ProHeader style={{ fontSize: '1.1em', marginTop: '-5px' }}>Social index</ProHeader>
                <Tooltip multiline />
                <div
                    data-tip="Social index<br /> Refers to the Presence and Performance of each iPro ( Independent Professional ) on different social networks. 
                    ">
                    <Info style={{ marginLeft: 10, cursor: 'pointer' }} color={colors.grey} />
                </div>
            </FlexRow>
            <FlexColumn>
                <Scrollbars
                    style={{
                        height: '220px'
                    }}
                    hideTracksWhenNotNeeded
                    renderThumbVertical={({ ...props }) => (
                        <div {...props} style={scrollbarsStyle} />
                    )}>
                    {indices &&
                        Object.entries(indices).map(([label, index], key) => (
                            <ImageIndex
                                image={
                                    <img
                                        src={images[label]}
                                        width="38px"
                                        height="38px"
                                        alt={label}
                                    />
                                }
                                value={index}
                                key={key}
                                style={{ marginBottom: 20 }}
                            />
                        ))}
                </Scrollbars>
            </FlexColumn>
        </Container>
    );
};
export default SocialIndices;
