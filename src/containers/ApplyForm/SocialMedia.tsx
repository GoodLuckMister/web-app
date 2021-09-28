import React, { Fragment } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { DivLinkPretender, FormHeader, Input, InputWrapper, SubLargeText } from '../../components';
import { style as scrollbarsStyle } from '../../styles/scrollbars';
import { SocialMedia as SocialMediaType } from '../../types/api';

interface ISocialMedia {
    onAddLink?: () => void;
    onChange: (
        target: keyof SocialMediaType
    ) => (sm: SocialMediaType, value: string | number) => void;
    data: SocialMediaType[];
}
const SocialMedia: React.FC<ISocialMedia> = ({ onChange, onAddLink, data }) => {
    return (
        <div>
            <SubLargeText style={{ fontSize: '1.125em' }}>
                Please tell us about your Social Presence numbers. It will help us to evaluate your
                SPOQ Index (application will be approved after verification process completion)
            </SubLargeText>
            <Scrollbars
                style={{ height: '65vh' }}
                hideTracksWhenNotNeeded
                renderThumbVertical={({ ...props }) => <div {...props} style={scrollbarsStyle} />}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr',
                        gridColumnGap: '1em'
                    }}>
                    {data.map((media) => (
                        <Fragment key={media.id}>
                            <InputWrapper style={{ marginRight: 30 }}>
                                <FormHeader>Link</FormHeader>
                                <Input
                                    style={{ width: 550 }}
                                    value={media.link}
                                    onChange={(e) => onChange('link')(media, e.target.value)}
                                    placeholder={
                                        'Enter social media link. i.e. https://facebook.com/john.doe'
                                    }
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <FormHeader>No of followers</FormHeader>
                                <Input
                                    style={{ width: 283 }}
                                    value={media.numberOfFollowers}
                                    onChange={(e) =>
                                        onChange('numberOfFollowers')(media, e.target.value)
                                    }
                                    placeholder="How many followers do you have?"
                                    type="number"
                                />
                            </InputWrapper>
                        </Fragment>
                    ))}
                </div>
                <DivLinkPretender onClick={onAddLink} style={{ marginTop: 30, fontWeight: 'bold' }}>
                    Add link
                </DivLinkPretender>
            </Scrollbars>
        </div>
    );
};
export default SocialMedia;
