import { SocialNetworks } from './global';

export enum SPOQ {
    Platinum = 'Platinum',
    Gold = 'Gold',
    Silver = 'Silver',
    Bronze = 'Bronze'
}
export interface BaseIPro {
    name: string;
    type: string;
    spoq: SPOQ;
    reviews: number;
    score: number;
    image: string;
}
export type SocialIndexType = Record<SocialNetworks, number>;
export enum Sentiment {
    Positive = 'Positive',
    Neutral = 'Neutral',
    Negative = 'Negative'
}

export interface Option {
    value: string;
    label: string;
}
