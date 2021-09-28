import React from 'react';

import { Label } from '../../../components';
import { IReview } from '../../../containers/ApplyForm/types';

const Review: React.FC<IReview> = ({ description }) => {
    return (
        <div>
            <Label style={{ fontSize: '0.9em', marginTop: 10 }}>{description}</Label>
            <br />
        </div>
    );
};
export default Review;
