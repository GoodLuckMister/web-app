import styled from '@emotion/styled';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { useMediaQuery } from 'react-responsive';

import {
    FlexColumnCenter,
    LargeText,
    LargeTextMobile,
    LinkPretender,
    SmallTitleBold,
    SubLargeText,
    TextLightGrey,
    Tooltip
} from '../../components';
import { useWindowSize } from '../../hooks';
import { style as scrollbarsStyle } from '../../styles/scrollbars';

const Paragraph = styled.div`
    padding-left: 10px;
    padding-right: 10px;
`;
const Link = styled(LinkPretender)`
    font-size: 1.4em;
    font-weight: 600;
`;

const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });

    return isMobile ? children : null;
};

const About: React.FC = () => {
    const [, height] = useWindowSize();
    return (
        <>
            <Mobile>
                <div
                    style={{
                        width: '480px',
                        textAlign: 'center'
                    }}>
                    <LargeTextMobile>About</LargeTextMobile>
                    <SubLargeText>
                        We are a unique technology agency that specializes in promoting and branding{' '}
                        <Tooltip multiline={true} id="ipro" />
                        <Link
                            data-for="ipro"
                            data-tip="iPros - Independent Professionals <br /> people who work as contractors, consultants, freelancers, entrepreneurs, and more">
                            iPros
                        </Link>{' '}
                    </SubLargeText>
                    <div>
                        <Paragraph>
                            <SmallTitleBold>
                                The Rise of the iPro’s – Independent Professionals
                            </SmallTitleBold>
                            <SubLargeText>
                                More and more employees are migrating toward self-employment. iPros,
                                highly skilled, independent, self-employed professionals who work
                                for themselves without employing others. This is the fastest growing
                                group In labor market. Customers and Freelancers are facing huge
                                challenges in this crowded industry: <br />
                                Ipros / Freelancers – have a minor share of voice and received low
                                attention from customers. ustomers – face difficulties to find the
                                right service providers for them.
                            </SubLargeText>
                        </Paragraph>
                        <Paragraph>
                            <SmallTitleBold>The solution – Top- iPro</SmallTitleBold>
                            <SubLargeText>
                                Top-iPro highlights and brings to the front , the upper level of{' '}
                                <b>iPro’s - independent Professionals .</b>
                            </SubLargeText>
                        </Paragraph>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <TextLightGrey>Contact: </TextLightGrey>
                            <LinkPretender
                                href="mailto:business@topipro.com"
                                style={{ marginLeft: 5, fontSize: '16px' }}>
                                business@topipro.com
                            </LinkPretender>
                        </div>
                    </div>
                </div>
            </Mobile>
            <Desktop>
                <Scrollbars
                    style={{ height: height < 850 ? '77vh' : '83vh', width: '50vw' }}
                    hideTracksWhenNotNeeded
                    renderThumbVertical={({ ...props }) => (
                        <div {...props} style={scrollbarsStyle} />
                    )}>
                    <FlexColumnCenter>
                        <LargeText>About</LargeText>
                        <SubLargeText style={{ width: 547 }}>
                            We are a unique technology agency that specializes in promoting and
                            branding <Tooltip multiline={true} id="ipro" />
                            <Link
                                data-for="ipro"
                                data-tip="iPros - Independent Professionals <br /> people who work as contractors, consultants, freelancers, entrepreneurs, and more">
                                iPros
                            </Link>{' '}
                        </SubLargeText>
                        <div>
                            <Paragraph>
                                <SmallTitleBold style={{ marginBottom: 10 }}>
                                    The Rise of the iPro’s – Independent Professionals
                                </SmallTitleBold>
                                <SubLargeText>
                                    More and more employees are migrating toward self-employment.
                                    iPros, highly skilled, independent, self-employed professionals
                                    who work for themselves without employing others. This is the
                                    fastest growing group In labor market.
                                    <br />
                                    <br />
                                    Customers and Freelancers are facing huge challenges in this
                                    crowded industry: <br />
                                    <br />
                                    Ipros / Freelancers – have a minor share of voice and received
                                    low attention from customers.
                                    <br />
                                    ustomers – face difficulties to find the right service providers
                                    for them.
                                </SubLargeText>
                            </Paragraph>
                            <Paragraph>
                                <SmallTitleBold style={{ marginBottom: 10 }}>
                                    The solution – Top- iPro
                                </SmallTitleBold>
                                <SubLargeText>
                                    Top-iPro highlights and brings to the front , the upper level of{' '}
                                    <b>iPro’s - independent Professionals .</b>
                                </SubLargeText>
                            </Paragraph>
                            <Paragraph style={{ display: 'flex' }}>
                                <TextLightGrey>Contact: </TextLightGrey>
                                <LinkPretender
                                    href="mailto:business@topipro.com"
                                    style={{ marginLeft: 5 }}>
                                    business@topipro.com
                                </LinkPretender>
                            </Paragraph>
                        </div>
                    </FlexColumnCenter>
                </Scrollbars>
            </Desktop>
        </>
    );
};
export default About;
