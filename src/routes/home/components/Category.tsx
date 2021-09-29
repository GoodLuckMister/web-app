import styled from '@emotion/styled';
import React from 'react';

import { TextDarkBlue, TextGrey } from '../../../components';
import { colors } from '../../../themes/colors';

const Box = styled.div`
    width: 216px;
    margin: 15px 15px 15px 20px;
    height: 196px;
    border-radius: 6px;
    box-shadow: 2px 2px 8px 1px rgba(21, 20, 59, 0.1);
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    &:hover {
        border: solid 1px ${colors.fuchsia};
        box-shadow: 2px 2px 8px 1px rgba(216, 22, 182, 0.09);
    }
`;
const MobileBox = styled.div`
    width: 200px;
    margin: 15px 15px 15px 20px;
    height: 196px;
    border-radius: 6px;
    box-shadow: 2px 2px 8px 1px rgba(21, 20, 59, 0.1);
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    &:hover {
        border: solid 1px ${colors.fuchsia};
        box-shadow: 2px 2px 8px 1px rgba(216, 22, 182, 0.09);
    }
`;

import { useMediaQuery } from 'react-responsive';

export const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });

    return isMobile ? children : null;
};

interface ICategory {
    text: string;
    count?: number;
    icon?: React.ReactNode;
    onClick(): void;
}

const Category: React.FC<ICategory> = ({ text, count = 424, icon, onClick }) => {
    return (
        <>
            <Mobile>
                <MobileBox onClick={onClick}>
                    <TextGrey style={{ margin: '10px 10px 28px auto' }}>{count}</TextGrey>
                    {icon}
                    <TextDarkBlue style={{ marginTop: 26 }}>{text}</TextDarkBlue>
                </MobileBox>
            </Mobile>
            <Desktop>
                <Box onClick={onClick}>
                    <TextGrey style={{ margin: '10px 10px 28px auto' }}>{count}</TextGrey>
                    {icon}
                    <TextDarkBlue style={{ marginTop: 26 }}>{text}</TextDarkBlue>
                </Box>
            </Desktop>
        </>
    );
};
export default Category;
