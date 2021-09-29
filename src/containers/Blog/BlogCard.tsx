import styled from '@emotion/styled';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { CardBox, FlexColumn, Label, PrimaryButton, ProHeader } from '../../components';

const Wrapper = styled(FlexColumn)`
    padding: 25px 9.2px 27px 20px;
`;
interface IBlogCard {
    name: string;
    summary: string;
    onClick: () => void;
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

const BlogCard: React.FC<IBlogCard> = ({ name, summary, onClick, style }) => {
    return (
        <>
            <Mobile>
                <CardBox onClick={onClick} style={style}>
                    <Wrapper>
                        <ProHeader>{name}</ProHeader>
                        <Label style={{ fontSize: '0.8em', marginTop: 5, height: 100 }}>
                            {summary}
                        </Label>
                        <div style={{ margin: 'auto' }}>
                            <PrimaryButton onClick={onClick} style={{ fontSize: '0.8em' }}>
                                Read more
                            </PrimaryButton>
                        </div>
                    </Wrapper>
                </CardBox>
            </Mobile>
            <Desktop>
                <CardBox onClick={onClick} style={style}>
                    <Wrapper>
                        <ProHeader>{name}</ProHeader>
                        <Label style={{ fontSize: '0.8em', marginTop: 5, height: 180 }}>
                            {summary}
                        </Label>
                        <div style={{ margin: 'auto' }}>
                            <PrimaryButton onClick={onClick} style={{ fontSize: '0.8em' }}>
                                Read more
                            </PrimaryButton>
                        </div>
                    </Wrapper>
                </CardBox>
            </Desktop>
        </>
    );
};
export default BlogCard;
