import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import avatar from '../../../assets/img/avatar.png';
import { FlexRow } from '../../../components';
import { TOTAL_SPOQ_COUNT } from '../../../consts';
import { IPro } from '../../../containers/ApplyForm/types';
import { useWindowSize } from '../../../hooks';
import { urlToSocialApp } from '../../../libs/social';
import { spoqScoreToLabel } from '../../../libs/spoq';
import { style as scrollbarsStyle } from '../../../styles/scrollbars';
import { SocialNetworks } from '../../../types/global';
import ReviewsContainer from './ReviewsContainer';
import SocialIndices from './SocialIndices';
import Summery from './Summery';
import UserSentiment from './UserSentiment';
interface IUserContainer {
    ipro: IPro;
}
const UserContainer: React.FC<IUserContainer> = ({ ipro }) => {
    const [width, height] = useWindowSize();
    const box = (width - (width / 10) * 2 - 40 * 2 - 200) / 2;
    const indices: Record<SocialNetworks, number> = ipro?.socialMedia.reduce((acc, sm) => {
        const app = sm.socialNetwork || urlToSocialApp(sm.link);
        if (app === SocialNetworks.general) {
            acc[app] = acc[app] ?? 0 + parseInt(sm.numberOfFollowers as any, 10);
        } else {
            acc[app] = sm.numberOfFollowers;
        }
        return acc;
    }, {} as Record<SocialNetworks, number>);
    return (
        <div>
            <Scrollbars
                style={{
                    height: height > 900 ? '80vh' : '70vh',
                    width: width < 1500 ? '65vw' : '68vw'
                }}
                hideTracksWhenNotNeeded
                renderThumbVertical={({ ...props }) => <div {...props} style={scrollbarsStyle} />}>
                <Summery
                    name={ipro?.name}
                    score={ipro?.score}
                    mail={ipro?.email}
                    links={
                        [
                            ...(ipro?.socialMedia?.map((sm) => sm.link) ?? []),
                            ...(ipro?.onLinePresence?.map((on) => on.link) ?? [])
                        ].filter((l) => l !== '') ?? []
                    }
                    picture={ipro?.imageURL ? ipro.imageURL : avatar}
                    description={ipro?.overview}
                    spoq={{
                        score: (ipro?.spoq.score / TOTAL_SPOQ_COUNT) * 100,
                        spoq: spoqScoreToLabel(ipro?.spoq.score)
                    }}
                />
                <FlexRow style={{ marginTop: 42 }}>
                    <UserSentiment style={{ width: box }} />
                    <SocialIndices indices={indices} />
                    <ReviewsContainer reviews={ipro?.reviews ?? []} style={{ width: box }} />
                </FlexRow>
            </Scrollbars>
        </div>
    );
};
export default UserContainer;
