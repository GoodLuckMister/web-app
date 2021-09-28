import styled from '@emotion/styled';
import qs from 'qs';
import React, { useEffect, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { RouteComponentProps } from 'react-router';

import { FlexBox } from '../../components';
import { useBlogs } from '../../hooks';
import { style as scrollbarsStyle } from '../../styles/scrollbars';
import Content from './components/Content';
import Header from './components/Header';

const Wrapper = styled.div``;

const SingleBlog: React.FC<RouteComponentProps> = ({ location }) => {
    const [id, setID] = useState<string>((location.state as any)?.id);
    useEffect(() => {
        const _id = (location?.state as any)?.id;
        if (_id !== id) {
            setID(_id);
        }
    }, [location.state, id]);
    const [idHash, setIDHash] = React.useState<string>(
        qs.parse(location.hash, { ignoreQueryPrefix: true })['#/singleBlog?id'] as string
    );
    useEffect(() => {
        const _id = qs.parse(location.hash, { ignoreQueryPrefix: true })[
            '#/singleBlog?id'
        ] as string;
        if (_id !== idHash) {
            setIDHash(_id);
        }
    }, [location, idHash]);
    const blog = useBlogs()?.find((b) => b.id === id || b.id === idHash);
    if (!blog) return null;
    return (
        <Wrapper>
            <Header name={blog.name} author={blog.author} date={blog.date} />
            <FlexBox style={{ marginTop: 60 }}>
                <Scrollbars
                    style={{ height: '75vh', width: '85vw' }}
                    hideTracksWhenNotNeeded
                    renderThumbVertical={({ ...props }) => (
                        <div {...props} style={scrollbarsStyle} />
                    )}>
                    <Content texts={blog.texts} images={blog.images} />
                </Scrollbars>
            </FlexBox>
        </Wrapper>
    );
};
export default SingleBlog;
