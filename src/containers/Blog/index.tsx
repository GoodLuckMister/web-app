import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

import { Loader } from '../../components';
import { useBlogs } from '../../hooks';
import { Routes } from '../../routes';
import { style as scrollbarsStyle } from '../../styles/scrollbars';
import BlogCard from './BlogCard';

const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 481 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });

    return isMobile ? children : null;
};
interface BlContainer {
    check?: boolean;
}

const BlogContainer: React.FC<BlContainer> = ({ check = false }) => {
    const history = useHistory();
    const blogs = useBlogs();
    return (
        <>
            <Mobile>
                <Scrollbars
                    style={{ height: '510px', width: check ? '215px' : '475px' }}
                    hideTracksWhenNotNeeded
                    renderThumbVertical={({ ...props }) => (
                        <div {...props} style={scrollbarsStyle} />
                    )}>
                    <div style={{ marginTop: '-12px' }}>
                        {blogs?.length === 0 && <Loader />}
                        {blogs.map((blog) => (
                            <BlogCard
                                key={blog.id}
                                style={{ width: 180, height: 'auto' }}
                                name={blog.name}
                                summary={blog.summary}
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
            </Mobile>
            <Desktop>
                <Scrollbars
                    style={{ height: '71vh', width: '230px' }}
                    hideTracksWhenNotNeeded
                    renderThumbVertical={({ ...props }) => (
                        <div {...props} style={scrollbarsStyle} />
                    )}>
                    <div style={{ marginTop: '-12px' }}>
                        {blogs?.length === 0 && (
                            <Loader style={{ marginTop: 300, marginLeft: 90 }} />
                        )}
                        {blogs.map((blog) => (
                            <BlogCard
                                key={blog.id}
                                style={{ width: 180, height: 'auto' }}
                                name={blog.name}
                                summary={blog.summary}
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
            </Desktop>
        </>
    );
};
export default BlogContainer;
