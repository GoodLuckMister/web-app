import styled from '@emotion/styled';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { Message, SmallTitleBold } from '../../../components';
import { IReview } from '../../../containers/ApplyForm/types';
import { style as scrollbarsStyle } from '../../../styles/scrollbars';
import Review from './Review';

interface IReviewsContainer {
    reviews: IReview[];
    style?: React.CSSProperties;
}
const Container = styled.div`
    min-width: 200px;
    height: 290px;
    padding: 35px 7px 0px 40px;
    border-radius: 6px;
    box-shadow: 2px 2px 8px 1px rgba(21, 20, 59, 0.1);
    background-color: #ffffff;
    margin-left: 40px;
`;

const ReviewsContainer: React.FC<IReviewsContainer> = ({ reviews, style }) => {
    return (
        <Container style={style}>
            <Scrollbars
                hideTracksWhenNotNeeded
                renderThumbVertical={({ ...props }) => <div {...props} style={scrollbarsStyle} />}>
                <SmallTitleBold
                    style={{
                        fontSize: '1.1em'
                    }}>{`Reviews (${reviews.length})`}</SmallTitleBold>
                <div style={{ marginTop: 40 }}>
                    {reviews?.length === 0 && (
                        <Message style={{ fontSize: '1.5em', marginTop: 110, textAlign: 'center' }}>
                            This iPro has no reviews... yet
                        </Message>
                    )}
                    {reviews.map((review, index) => (
                        <Review {...review} key={index} />
                    ))}
                </div>
            </Scrollbars>
        </Container>
    );
};
export default ReviewsContainer;
