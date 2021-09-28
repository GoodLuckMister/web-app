import { SPOQ } from '../../types';
import { Link, SocialMedia } from '../../types/api';
export enum ApplySections {
    PersonalDetails = 'Personal details',
    Overview = 'Overview',
    OnLinePresence = 'On line presence',
    SocialMedia = 'Social media',
    ClientReviews = 'Client reviews'
}
export enum SidebarSections {
    Form = 'form',
    TermOfUse = 'TermOfUse',
    Message = 'Message'
}
export const getNextSection = (current: ApplySections): ApplySections => {
    const arr = Object.entries(ApplySections);
    return arr[(arr.findIndex((s) => s[1] === current) + 1) % arr.length][1];
};
export const getIndex = (current: ApplySections): number => {
    const arr = Object.entries(ApplySections);
    return arr.findIndex((s) => s[1] === current) % arr.length;
};
export const getBackSection = (current: ApplySections): ApplySections => {
    const arr = Object.entries(ApplySections);
    return arr[(arr.findIndex((s) => s[1] === current) - 1) % arr.length][1];
};
export const getByIndex = (index: number): ApplySections => {
    const arr = Object.entries(ApplySections);
    return arr[index % arr.length][1];
};
export const isFirst = (current: ApplySections) => {
    const arr = Object.entries(ApplySections);
    return arr[0][1] === current;
};
export const isLast = (current: ApplySections) => {
    const arr = Object.entries(ApplySections);
    return arr[arr.length - 1][1] === current;
};
export interface IReview {
    description?: string;
    sentiment?: number;
    source: string;
}
export interface Reviewed extends IReview {
    id: number;
}
export interface PersonalDetails {
    id: string;
    name: string;
    country: string;
    email: string;
    language: string;
    phoneNumber: string;
    imageURL: string;
}
export interface Overview {
    category: string;
    type: string;
    overview: string;
}
export interface AddUserData extends PersonalDetails, Overview {}
export type OnChange = (target: keyof AddUserData, value: string | number) => void;
export interface CreateIProRequest extends AddUserData {
    isActive: boolean;
    socialMedia: SocialMedia[];
    onLinePresence: Link[];
    reviews: IReview[];
    spoq: {
        spoq: SPOQ;
        score: number;
    };
    score: number;
}
export type IPro = CreateIProRequest;
export const EditableID = 8724856415;
