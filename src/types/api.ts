import { SPOQ } from '.';
import { SocialNetworks } from './global';

export type UUID = string;
export interface CoreCategory {
    id: UUID;
    label: string;
    types: string[];
}
export interface Category extends CoreCategory {
    prosCount?: number;
}
export interface Review {
    name: string;
    role: string;
    review: string;
}
export interface CoreIPro {
    id: UUID;
    fullName: string;
    type: string;
    spoq: SPOQ;
    numberOfReviews: number;
    score: number;
    imagePath: string;
}
export interface Link {
    id: number;
    link: string;
    score: number;
    numberOfReviews: number;
}

export interface SocialMedia {
    id: number;
    link: string;
    numberOfFollowers: number;
    socialNetwork: SocialNetworks;
}
