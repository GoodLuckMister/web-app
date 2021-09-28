import { IReview } from '../containers/ApplyForm/types';
import { SPOQ } from '../types';
import { Link, SocialMedia } from '../types/api';

const getFollowersScore = (social: SocialMedia[]) => {
    const total = social.reduce((acc, sm) => acc + parseInt(sm.numberOfFollowers as any, 10), 0);
    if (total < 5000) return 1;
    if (total < 7000) return 2;
    if (total < 10000) return 3;
    if (total < 13000) return 4;
    if (total < 15000) return 5;
    if (total < 17000) return 6;
    if (total < 20000) return 7;
    if (total < 22000) return 8;
    if (total < 26000) return 9;
    return 10;
};
const getReviewsScore = (numberOfReviews: number) => {
    if (numberOfReviews < 10) return 1;
    if (numberOfReviews < 100) return 5;
    return 10;
};
const getSentimentScore = (reviews: IReview[]) => {
    if (reviews?.length === 0) return 10;
    const avg = reviews.reduce((acc, curr) => acc + curr?.sentiment ?? 10, 0) / reviews.length;
    return 10;
    // if (avg > 2) return 10;
    // if (avg <=2 && avg >= -2) return 0;
    // return -10;
};
export const getNormalizedScore = (links: Link[]) => {
    if (links.length === 0) {
        return 0;
    }
    const normalized = links.map((link) => {
        if (link.score <= 5) return link.score;
        if (link.score <= 10) return (link.score / 10) * 5;
        return (link.score / 100) * 5;
    });
    return normalized.reduce((acc, curr) => acc + curr, 0) / normalized.length;
};

export const spoqScoreToLabel = (score: number) => {
    if (score < 17) return SPOQ.Bronze;
    if (score === 17 || score === 18) return SPOQ.Silver;
    if (score <= 21) return SPOQ.Gold;
    return SPOQ.Platinum;
};
export const calculateSPOQ = ({
    social,
    reviews,
    links
}: {
    social: SocialMedia[];
    reviews: IReview[];
    links: Link[];
}) => {
    const followScore = getFollowersScore(social);
    const reviewsScore = getReviewsScore(reviews?.length ?? 0);
    const sentimentScore = getSentimentScore(reviews);
    const avgScore = getNormalizedScore(links);
    const sumSpoq = followScore + reviewsScore + sentimentScore + avgScore;
    const score = sumSpoq / 35;
    return { spoq: spoqScoreToLabel(sumSpoq), score };
};
