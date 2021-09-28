import styled from '@emotion/styled';
import React from 'react';
import { toast } from 'react-toastify';

import {
    Badge,
    FlexBox,
    FlexColumn,
    FlexRow,
    Label,
    LinkPretender,
    ShareButton,
    TextGreyish,
    TitleBold,
    Tooltip
} from '../../../components';
import { useWindowSize } from '../../../hooks';
import { Info } from '../../../Icons';
import { colors } from '../../../themes/colors';
import { SPOQ } from '../../../types';
import { roundDecimal } from '../../../utils/number';
import SPOQScore from './SPOQScore';

interface ISummery {
    name: string;
    score: number;
    links: string[];
    picture: string;
    description: string;
    spoq: {
        spoq: SPOQ;
        score: number;
    };
    mail?: string;
}
const Container = styled(FlexBox)`
    min-height: 343px;
    padding: 40px;
    border-radius: 6px;
    box-shadow: 2px 2px 8px 1px rgba(21, 20, 59, 0.1);
    background-color: #ffffff;
`;
const Summery: React.FC<ISummery> = ({ name, score, links, picture, description, spoq, mail }) => {
    const [width] = useWindowSize();
    const onShareClick = () => {
        navigator.clipboard.writeText(window.location.href);
        toast.success('Copied! Go and spread the word!');
    };
    return (
        <Container>
            <div>
                <FlexRow>
                    <img src={picture} width={265} height={180} alt="profile" />
                    <FlexColumn
                        style={{
                            marginLeft: 30,
                            height: 180,
                            maxWidth: width < 1400 ? 200 : 'initial'
                        }}>
                        <FlexBox>
                            <TitleBold>{name}</TitleBold>
                            <ShareButton
                                style={{ marginTop: 10, marginLeft: 24 }}
                                onClick={onShareClick}
                            />
                        </FlexBox>
                        {(score === 0 || score) && (
                            <FlexBox style={{ marginTop: 5 }}>
                                <Label>Avg. score</Label>
                                <Badge value={roundDecimal(score)} style={{ marginLeft: 13 }} />
                                <Tooltip multiline />
                                <div
                                    data-tip="AVG. score<br /> Our engine & team creates an average score based on ratings & scores given to each iPro in different sites and social networks.  
                                    ">
                                    <Info
                                        style={{ marginLeft: 13, marginTop: 4, cursor: 'pointer' }}
                                        color={colors.grey}
                                    />
                                </div>
                            </FlexBox>
                        )}
                        <FlexColumn style={{ marginTop: 'auto' }}>
                            <LinkPretender href={`mailto:${mail}`}>{mail}</LinkPretender>
                            {links.map((link) => (
                                <LinkPretender
                                    key={link}
                                    style={{ marginTop: 6 }}
                                    target="_blank"
                                    href={link.includes('http') ? link : `http://${link}`}>
                                    {link}
                                </LinkPretender>
                            ))}
                        </FlexColumn>
                    </FlexColumn>
                </FlexRow>
                <TextGreyish style={{ marginTop: 25, maxWidth: '50vw', wordBreak: 'break-word' }}>
                    {description}
                </TextGreyish>
            </div>
            <div style={{ marginLeft: 'auto' }}>
                <SPOQScore style={{ marginTop: '-30px' }} score={spoq.score} spoq={spoq.spoq} />
            </div>
        </Container>
    );
};
export default Summery;
