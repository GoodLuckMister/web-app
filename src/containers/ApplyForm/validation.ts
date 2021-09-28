import { isValidURL } from '../../libs/validation';
import { Link, SocialMedia } from '../../types/api';
import { AddUserData, ApplySections, Reviewed } from './types';

interface NextRequest {
    step: ApplySections;
    userData: AddUserData;
    onlinePresence: Link[];
    socialMedia: SocialMedia[];
    reviews: Reviewed[];
}
const isPersonalDetailsValid = (userData: AddUserData) => {
    if (
        userData.country &&
        userData.name &&
        userData.email &&
        userData.language &&
        userData.phoneNumber &&
        userData.imageURL
    ) {
        return true;
    }
    return false;
};
const isOverviewValid = (category: string, type: string, description: string) => {
    if (category && type && description) return true;
    return false;
};
const isSocialMediaValid = (socialMedia: SocialMedia[]) => {
    return (
        socialMedia.length > 0 &&
        socialMedia.reduce(
            (acc, curr) =>
                curr.link && isValidURL(curr.link) && curr.numberOfFollowers !== undefined && acc,
            true
        )
    );
};
const isClientReviewsValid = (reviews: Reviewed[]) =>
    reviews.length > 0 &&
    reviews.reduce(
        (acc, curr) =>
            curr.description &&
            curr.description.length > 5 &&
            curr.source &&
            isValidURL(curr.source) &&
            acc,
        true
    );
const isOnLinePresenceValid = (links: Link[]) =>
    links.reduce(
        (acc, curr) =>
            curr.link && curr.numberOfReviews && curr.score && isValidURL(curr.link) && acc,
        true
    );
export const isNextAvailable = (req: NextRequest) => {
    switch (req.step) {
        case ApplySections.PersonalDetails:
            return isPersonalDetailsValid(req.userData);
        case ApplySections.Overview:
            return isOverviewValid(req.userData.category, req.userData.type, req.userData.overview);
        case ApplySections.OnLinePresence:
            return isOnLinePresenceValid(req.onlinePresence);
        case ApplySections.SocialMedia:
            return isSocialMediaValid(req.socialMedia);
        case ApplySections.ClientReviews:
            return isClientReviewsValid(req.reviews);
        default:
            return true;
    }
};
