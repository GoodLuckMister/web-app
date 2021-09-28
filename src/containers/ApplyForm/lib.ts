import { Link, SocialMedia } from 'types/api';

export const prepSocialMedia = (socialMedia: SocialMedia[]) =>
    socialMedia
        .filter((sm) => sm.link)
        .map((sm) => ({
            ...sm,
            numberOfFollowers: isNaN(parseInt(sm.numberOfFollowers as unknown as string, 10))
                ? 1
                : parseInt(sm.numberOfFollowers as unknown as string, 10)
        }));
export const prepOnLinePresence = (links: Link[]) =>
    links
        .filter((lp) => lp.link)
        .map((lp) => ({
            ...lp,
            numberOfFollowers: isNaN(parseInt(lp.numberOfReviews as unknown as string, 10))
                ? 1
                : parseInt(lp.numberOfReviews as unknown as string, 10)
        }));
