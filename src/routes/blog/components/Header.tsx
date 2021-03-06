import styled from '@emotion/styled';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import {
    FlexBox,
    LargeText,
    LinkPretender,
    SearchBar,
    SubLargeText,
    Tooltip
} from '../../../components';
import { useWindowSize } from '../../../hooks';

const Link = styled(LinkPretender)`
    font-size: 1.2em;
    font-weight: 600;
    margin-left: 2px;
`;
interface IHeader {
    onChangeQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });

    return isMobile ? children : null;
};
const Header: React.FC<IHeader> = ({ onChangeQuery }) => {
    const [, height] = useWindowSize();
    return (
        <>
            <Mobile>
                <div style={{ textAlign: 'center', width: '475px', marginBottom: '15px' }}>
                    <LargeText>Our Blog</LargeText>
                    <div style={{ marginBottom: '10px' }}>
                        <SubLargeText>
                            We are a unique technology agency that Is specialized in promoting and
                            branding
                            <Tooltip multiline={true} id="ipro" />
                            <Link
                                data-for="ipro"
                                data-tip="iPros - Independent Professionals <br /> people who work as contractors, consultants, freelancers, entrepreneurs, and more">
                                IPro’s
                            </Link>
                        </SubLargeText>
                    </div>
                    <SearchBar onChangeQuery={onChangeQuery} />
                </div>
            </Mobile>
            <Desktop>
                <div style={{ marginTop: height > 850 ? 144 : 90 }}>
                    <LargeText>Our Blog</LargeText>
                    <FlexBox style={{ marginTop: 15 }}>
                        <SubLargeText style={{ whiteSpace: 'pre-wrap', width: 547 }}>
                            We are a unique technology agency that Is specialized in promoting and
                            branding
                            <Tooltip multiline={true} id="ipro" />
                            <Link
                                data-for="ipro"
                                data-tip="iPros - Independent Professionals <br /> people who work as contractors, consultants, freelancers, entrepreneurs, and more">
                                IPro’s
                            </Link>
                        </SubLargeText>
                        <SearchBar
                            style={{ marginLeft: 'auto', marginTop: 5 }}
                            onChangeQuery={onChangeQuery}
                        />
                    </FlexBox>
                </div>
            </Desktop>
        </>
    );
};
export default Header;
