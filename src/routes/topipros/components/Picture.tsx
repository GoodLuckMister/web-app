import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.img`
    width: 297px;
    height: 195px;
    padding: 16px 16px 24px 18px;
`;

const Picture: React.FC<React.ComponentProps<'img'>> = ({ src }) => {
    return <Wrapper src={src} />;
};
export default Picture;
