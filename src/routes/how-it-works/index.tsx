import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { useHistory } from 'react-router-dom';

import { FlexColumnCenter, LargeText, PrimaryButton, SubLargeText } from '../../components';
import { useUIStore } from '../../contexts/UIContext';
import { useUser, useWindowSize } from '../../hooks';
import { style as scrollbarsStyle } from '../../styles/scrollbars';
import { AvailableSidebars } from '../../types/global';
import { Routes } from '..';

interface IHowItWorks {
    style?: React.CSSProperties;
}

const HowItWorks: React.FC<IHowItWorks> = ({ style }) => {
    const [, height] = useWindowSize();
    const history = useHistory();
    const uiStore = useUIStore();
    const user = useUser();
    const onStartClick = () => {
        if (user) {
            uiStore.setSidebar(AvailableSidebars.ApplyForm);
        } else {
            history.push(Routes.authentication.link);
        }
    };
    return (
        <div style={{ marginTop: height < 850 ? 80 : 120, ...style }}>
            <Scrollbars
                style={{ height: '70vh', width: '50vw' }}
                hideTracksWhenNotNeeded
                renderThumbVertical={({ ...props }) => <div {...props} style={scrollbarsStyle} />}>
                <FlexColumnCenter>
                    <LargeText>How it works?</LargeText>
                    <SubLargeText style={{ whiteSpace: 'pre-wrap' }}>
                        How do we create the top team of independent professionals ( iPros)?
                        <br />
                        <br />
                        We use a unique conceptual technology to create a SPOQ index for each
                        service provider.
                        <br />
                        <b>SPOQ – Social Proof Of Quality</b> refers to social presence and all
                        types of people’s reviews, recommendations, shared experiences and post
                        purchase feedback.
                        <br />
                        <br />
                        Our engine builds a <b>SPOQ Index dashboard</b> for each Independent
                        Professionals (IPRO) and allows you to follow the top list of{' '}
                        <b>Best IPROs</b> according to their SPOQ performance
                        <br />
                        Our engine checks service provider’s SPOQ performance on a regular basis and
                        provides you with a list of the best iPros of each category .
                    </SubLargeText>
                </FlexColumnCenter>
                <PrimaryButton
                    style={{ width: 156, marginTop: 20, marginBottom: 20 }}
                    onClick={onStartClick}>
                    Apply here
                </PrimaryButton>
            </Scrollbars>
        </div>
    );
};
export default HowItWorks;
