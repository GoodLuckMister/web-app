import styled from '@emotion/styled';
import React from 'react';

import { FlexRow, Pie, ProHeader, Tooltip } from '../../../components';
import { Info } from '../../../Icons';
import { colors } from '../../../themes/colors';
import { Sentiment } from '../../../types';
import { userSentimentColors } from '../utils';

const Container = styled.div`
    height: 275px;
    padding: 35px 33px 16px 25px;
    border-radius: 6px;
    box-shadow: 2px 2px 8px 1px rgba(21, 20, 59, 0.1);
    background-color: #ffffff;
`;
interface IUserSentiment {
    style?: React.CSSProperties;
}

const UserSentiment: React.FC<IUserSentiment> = ({ style }) => {
    const categoryData = [
        {
            key: Sentiment.Positive,
            color: userSentimentColors.Positive,
            data: 100
        }
    ];
    return (
        <Container style={style}>
            <FlexRow style={{ marginBottom: 16 }}>
                <ProHeader style={{ fontSize: '1.1em', marginTop: '-5px' }}>
                    User sentiment
                </ProHeader>
                <Tooltip multiline />
                <div
                    data-tip="User Sentiment<br /> Overall attitude of customers toward each iPRO ( Independent Professional). focus mainly on satisfaction & trust 
                    ">
                    <Info style={{ marginLeft: 10, cursor: 'pointer' }} color={colors.grey} />
                </div>
            </FlexRow>
            <Pie entries={categoryData} />
        </Container>
    );
};
export default UserSentiment;
