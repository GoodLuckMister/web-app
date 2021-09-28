import styled from '@emotion/styled';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import {
    FlexColumnCenter,
    LargeText,
    LinkPretender,
    SubLargeText,
    Tooltip,
    WelcomeText
} from '../../../components';
import { useWindowSize } from '../../../hooks';
import ActionLinks from './ActionLinks';

const Link = styled(LinkPretender)`
    font-size: 1.4em;
    font-weight: 600;
`;
interface IWelcome {
    style?: React.CSSProperties;
}

const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return isMobile ? children : null;
};
const Welcome: React.FC<IWelcome> = ({ style }) => {
    const [width] = useWindowSize();
    return (
        <>
            <Mobile>
                <div style={{ width: '480px' }}>
                    <WelcomeText>Welcome to</WelcomeText>
                    <LargeText>
                        Top<span className="i">i</span>Pro
                    </LargeText>
                    <SubLargeText>
                        Top-Ipro ( independent professionals ) is a social recommendation engine
                        that empowers customers to choose the best remote{' '}
                        <Tooltip multiline={true} id="ipro" />
                        <Link
                            data-for="ipro"
                            data-tip="iPros - Independent Professionals <br /> people who work as contractors, consultants, freelancers, entrepreneurs, and more">
                            iPros
                        </Link>{' '}
                        in main categories.
                        <br />
                        <br />
                        We use a unique conceptual technology to create a{' '}
                        <Tooltip multiline={true} id="spoq" />
                        <Link
                            data-tip="SPOQ index<br /> Social Proof Of Quality refers to social presence 
and all types of customers reviews, recommendations 
and shared experiences"
                            data-for="spoq">
                            SPOQ index
                        </Link>{' '}
                        for each iPro / freelancer.
                        <br />
                        <br />
                        The usage Is free of charge to customers and Independent Professionals
                    </SubLargeText>

                    <ActionLinks />
                </div>
            </Mobile>
            <Desktop>
                <div style={{ display: 'flex', flexDirection: 'column', ...style }}>
                    <FlexColumnCenter
                        style={{ width: width / 4, margin: `0px ${width / 9}px 20px 100px` }}>
                        <WelcomeText>Welcome to</WelcomeText>
                        <LargeText>
                            Top<span className="i">i</span>Pro
                        </LargeText>
                        <SubLargeText
                            style={{ whiteSpace: 'pre-wrap', marginTop: 20, fontSize: '1.125em' }}>
                            Top-Ipro ( independent professionals ) is a social recommendation engine
                            that empowers customers to choose the best remote{' '}
                            <Tooltip multiline={true} id="ipro" />
                            <Link
                                data-for="ipro"
                                data-tip="iPros - Independent Professionals <br /> people who work as contractors, consultants, freelancers, entrepreneurs, and more">
                                iPros
                            </Link>{' '}
                            in main categories.
                            <br />
                            <br />
                            We use a unique conceptual technology to create a{' '}
                            <Tooltip multiline={true} id="spoq" />
                            <Link
                                data-tip="SPOQ index<br /> Social Proof Of Quality refers to social presence 
and all types of customers reviews, recommendations 
and shared experiences"
                                data-for="spoq">
                                SPOQ index
                            </Link>{' '}
                            for each iPro / freelancer.
                            <br />
                            <br />
                            The usage Is free of charge to customers and Independent Professionals
                        </SubLargeText>
                    </FlexColumnCenter>
                    <ActionLinks style={{ marginTop: 'auto', marginLeft: 100 }} />
                </div>
            </Desktop>
        </>
    );
};
export default Welcome;
