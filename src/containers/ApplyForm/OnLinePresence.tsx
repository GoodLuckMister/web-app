import styled from '@emotion/styled';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { DivLinkPretender, FormHeader, Input, InputWrapper, SubLargeText } from '../../components';
import { style as scrollbarsStyle } from '../../styles/scrollbars';
import { Link } from '../../types/api';

const HR = styled.hr`
    margin-top: 30px;
    margin-right: 44px;
`;
type OnChangeLink = (target: keyof Link) => (sm: Link, value: string | number) => void;
interface IGridLinks {
    data: Link;
    onChange: OnChangeLink;
}
const GridLinks: React.FC<IGridLinks> = ({ data, onChange }) => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr',
                gridColumnGap: '1em'
            }}
            key={data.id}>
            <InputWrapper style={{ marginRight: 30 }}>
                <FormHeader>Link</FormHeader>
                <Input
                    style={{ width: 500 }}
                    onChange={(e) => onChange('link')(data, e.target.value)}
                    value={data.link}
                    placeholder="www.mypotfolio.com"
                />
            </InputWrapper>
            <InputWrapper>
                <FormHeader>Score</FormHeader>
                <Input
                    style={{ width: 115 }}
                    onChange={(e) => onChange('score')(data, e.target.value)}
                    value={data.score}
                    placeholder="12"
                    type="number"
                />
            </InputWrapper>
            <InputWrapper>
                <FormHeader># of reviews</FormHeader>
                <Input
                    style={{ width: 115 }}
                    onChange={(e) => onChange('numberOfReviews')(data, e.target.value)}
                    value={data.numberOfReviews}
                    placeholder="15"
                    type="number"
                />
            </InputWrapper>
        </div>
    );
};

interface IOnLinePresence {
    onAddLink?: () => void;
    onChange: OnChangeLink;
    onPersonalChange: OnChangeLink;
    data: Link[];
    personal: Link;
}

const OnLinePresence: React.FC<IOnLinePresence> = ({
    onAddLink,
    onChange,
    personal,
    onPersonalChange,
    data
}) => {
    return (
        <div>
            <div>
                <SubLargeText style={{ fontSize: '1.125em' }}>
                    Your personal website link
                </SubLargeText>
                <GridLinks data={personal} onChange={onPersonalChange} />
            </div>
            <HR />
            <SubLargeText style={{ fontSize: '1.125em', marginTop: 30 }}>
                Please tell us about your performance on sites such as Fiverr, Peopleperhour, Guro
                etc… It will help us evaluate you SPOQ Index (application will be approved after
                verification process completion)
            </SubLargeText>
            <Scrollbars
                style={{ height: '65vh' }}
                hideTracksWhenNotNeeded
                renderThumbVertical={({ ...props }) => <div {...props} style={scrollbarsStyle} />}>
                <div>
                    {data.map((link) => (
                        <GridLinks data={link} onChange={onChange} key={link.id} />
                    ))}
                </div>
                <DivLinkPretender onClick={onAddLink} style={{ marginTop: 30, fontWeight: 'bold' }}>
                    Add link
                </DivLinkPretender>
            </Scrollbars>
        </div>
    );
};
export default OnLinePresence;
