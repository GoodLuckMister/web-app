import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { useHistory } from 'react-router-dom';

import { Loader } from '../../components';
import { useBlogs } from '../../hooks';
import { Routes } from '../../routes';
import { style as scrollbarsStyle } from '../../styles/scrollbars';
import BlogCard from './BlogCard';

const BlogContainer: React.FC = () => {
    const history = useHistory();
    const blogs = useBlogs();
    return (
        <Scrollbars
            style={{ height: '71vh', width: '230px' }}
            hideTracksWhenNotNeeded
            renderThumbVertical={({ ...props }) => <div {...props} style={scrollbarsStyle} />}>
            <div style={{ marginTop: '-12px' }}>
                {blogs?.length === 0 && <Loader style={{ marginTop: 300, marginLeft: 90 }} />}
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
    );
};
export default BlogContainer;
