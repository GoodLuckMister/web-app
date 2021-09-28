import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { RouteComponentProps } from 'react-router';

import { FlexBox, FlexWrap, Loader } from '../../components';
import BlogCard from '../../containers/Blog/BlogCard';
import { useBlogs, useWindowSize } from '../../hooks';
import { style as scrollbarsStyle } from '../../styles/scrollbars';
import { Routes } from '..';
import Header from './components/Header';

const Blog: React.FC<RouteComponentProps> = ({ history }) => {
    const [, height] = useWindowSize();
    const [searchTerm, setSearchTerm] = useState('');
    const blogs = useBlogs().filter(
        (blog) =>
            blog.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            blog.summary.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            blog.author.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    return (
        <div style={{ marginLeft: 15 }}>
            <Header onChangeQuery={(e) => setSearchTerm(e.target.value)} />
            {blogs.length === 0 && (
                <div style={{ marginLeft: 500, marginTop: 300 }}>
                    <Loader size={25} />
                </div>
            )}
            <FlexBox style={{ marginTop: 60, marginLeft: '-25px' }}>
                <Scrollbars
                    style={{ height: height > 850 ? '55vh' : '45vh', width: '80vw' }}
                    hideTracksWhenNotNeeded
                    renderThumbVertical={({ ...props }) => (
                        <div {...props} style={scrollbarsStyle} />
                    )}>
                    <FlexWrap style={{ marginTop: '-10px' }}>
                        {blogs.map((blog) => (
                            <BlogCard
                                key={blog.id}
                                name={blog.name}
                                summary={blog.summary}
                                style={{ width: '375.2px', height: 306 }}
                                onClick={() =>
                                    history.push({
                                        pathname: Routes.singleBlog.link,
                                        search: `?id=${blog.id}`,
                                        state: { id: blog.id }
                                    })
                                }
                            />
                        ))}
                    </FlexWrap>
                </Scrollbars>
            </FlexBox>
        </div>
    );
};
export default Blog;
