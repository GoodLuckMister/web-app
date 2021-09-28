import { SocialNetworks } from '../types/global';

export const urlToSocialApp = (url: string) => {
    if (url.includes(SocialNetworks.facebook)) {
        return SocialNetworks.facebook;
    }
    if (url.includes(SocialNetworks.linkedin)) {
        return SocialNetworks.linkedin;
    }
    if (url.includes(SocialNetworks.instagram)) {
        return SocialNetworks.instagram;
    }
    if (url.includes(SocialNetworks.twitter)) {
        return SocialNetworks.twitter;
    }
    if (url.includes(SocialNetworks.tiktok)) {
        return SocialNetworks.tiktok;
    }
    if (url.includes(SocialNetworks.youtube)) {
        return SocialNetworks.youtube;
    }
    if (url.includes(SocialNetworks.pinterest)) {
        return SocialNetworks.pinterest;
    }
    return SocialNetworks.general;
};
