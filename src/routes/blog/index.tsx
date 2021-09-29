import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { useMediaQuery } from 'react-responsive';
import { RouteComponentProps } from 'react-router';

import { FlexBox, FlexWrap, Loader } from '../../components';
import BlogCard from '../../containers/Blog/BlogCard';
import { useBlogs, useWindowSize } from '../../hooks';
import { style as scrollbarsStyle } from '../../styles/scrollbars';
import { Routes } from '..';
import Header from './components/Header';

const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });

    return isMobile ? children : null;
};

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
        <>
            <Header onChangeQuery={(e) => setSearchTerm(e.target.value)} />
            <Mobile>
                <div>
                    {blogs.length === 0 && (
                        <div style={{ marginLeft: '200px', marginTop: '15px' }}>
                            <Loader size={20} />
                        </div>
                    )}

                    <Scrollbars
                        style={{ height: '1000px', width: '475px' }}
                        hideTracksWhenNotNeeded
                        renderThumbVertical={({ ...props }) => (
                            <div {...props} style={scrollbarsStyle} />
                        )}>
                        <div
                            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {blogs.map((blog) => (
                                <BlogCard
                                    key={blog.id}
                                    name={blog.name}
                                    summary={blog.summary}
                                    style={{ width: '300px', height: '100%' }}
                                    onClick={() =>
                                        history.push({
                                            pathname: Routes.singleBlog.link,
                                            search: `?id=${blog.id}`,
                                            state: { id: blog.id }
                                        })
                                    }
                                />
                            ))}
                        </div>
                    </Scrollbars>
                </div>
            </Mobile>
            <Desktop>
                <div style={{ marginLeft: 15 }}>
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
            </Desktop>
        </>
    );
};
export default Blog;
