import styled from '@emotion/styled';
import React from 'react';

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

const BlogCard: React.FC<IBlogCard> = ({ name, summary, onClick, style }) => {
    return (
        <CardBox onClick={onClick} style={style}>
            <Wrapper>
                <ProHeader>{name}</ProHeader>
                <Label style={{ fontSize: '0.8em', marginTop: 5, height: 180 }}>{summary}</Label>
                <div style={{ margin: 'auto' }}>
                    <PrimaryButton onClick={onClick} style={{ fontSize: '0.8em' }}>
                        Read more
                    </PrimaryButton>
                </div>
            </Wrapper>
        </CardBox>
    );
};
export default BlogCard;
