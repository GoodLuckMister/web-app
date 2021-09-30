import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { useMediaQuery } from 'react-responsive';

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
const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return isMobile ? children : null;
};
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
        <>
            <Mobile>
                <div style={{ marginBottom: 20 }}>
                    <Scrollbars
                        style={{
                            height: '500px',
                            width: '475px'
                        }}
                        hideTracksWhenNotNeeded
                        renderThumbVertical={({ ...props }) => (
                            <div {...props} style={scrollbarsStyle} />
                        )}>
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
                        <div style={{ marginTop: 20 }}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    marginBottom: 20
                                }}>
                                <UserSentiment style={{ marginLeft: 15 }} />
                                <SocialIndices indices={indices} />
                            </div>

                            <ReviewsContainer
                                reviews={ipro?.reviews ?? []}
                                style={{ width: 300 }}
                            />
                        </div>
                    </Scrollbars>
                </div>
            </Mobile>
            <Desktop>
                <div>
                    <Scrollbars
                        style={{
                            height: height > 900 ? '80vh' : '70vh',
                            width: width < 1500 ? '65vw' : '68vw'
                        }}
                        hideTracksWhenNotNeeded
                        renderThumbVertical={({ ...props }) => (
                            <div {...props} style={scrollbarsStyle} />
                        )}>
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
                            <ReviewsContainer
                                reviews={ipro?.reviews ?? []}
                                style={{ width: box }}
                            />
                        </FlexRow>
                    </Scrollbars>
                </div>
            </Desktop>
        </>
    );
};
export default UserContainer;
