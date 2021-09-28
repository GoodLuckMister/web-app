import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import {
    DivLinkPretender,
    FormHeader,
    Input,
    InputWrapper,
    SubLargeText,
    TextArea
} from '../../components';
import { style as scrollbarsStyle } from '../../styles/scrollbars';
import { IReview, Reviewed } from './types';

interface IClientReviews {
    onAddReview?: () => void;
    onChange: (target: keyof IReview) => (review: Reviewed, value: string | number) => void;
    reviews: Reviewed[];
}

const ClientReviews: React.FC<IClientReviews> = ({ reviews, onChange, onAddReview }) => {
    const canAddReview = reviews[reviews.length - 1]?.description !== '';
    return (
        <div>
            <form>
                <SubLargeText style={{ fontSize: '1.125em' }}>
                    Provide links or cut & paste of users reviews about your work
                    <br />
                    (application will be approved after verification process completion)
                </SubLargeText>
                <Scrollbars
                    style={{ height: '60vh' }}
                    hideTracksWhenNotNeeded
                    renderThumbVertical={({ ...props }) => (
                        <div {...props} style={scrollbarsStyle} />
                    )}>
                    {reviews.map((review) => (
                        <div key={review.id}>
                            <InputWrapper>
                                <FormHeader>Add a review</FormHeader>
                                <TextArea
                                    style={{ height: 100, width: 908 }}
                                    onChange={(e) =>
                                        onChange('description')(review, e.target.value)
                                    }
                                    value={review.description}
                                    placeholder="Paste review"
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <FormHeader>Review source</FormHeader>
                                <Input
                                    style={{ width: 908 }}
                                    onChange={(e) => onChange('source')(review, e.target.value)}
                                    value={review.source}
                                    placeholder="Add link to review source"
                                />
                            </InputWrapper>
                        </div>
                    ))}
                    <DivLinkPretender
                        style={{ marginTop: 32, fontWeight: 'bold' }}
                        disabled={!canAddReview}
                        onClick={canAddReview ? onAddReview : null}>
                        Add review
                    </DivLinkPretender>
                </Scrollbars>
            </form>
        </div>
    );
};
export default ClientReviews;
