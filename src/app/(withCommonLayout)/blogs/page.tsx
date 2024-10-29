import React from 'react';
import BlogCard from './component/BlogCard';


const Posts = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-5xl my-4 pb-4'>Posts</h1>
            <hr />
            <BlogCard />
        </div>
    );
};

export default Posts;