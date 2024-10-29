import dayjs from 'dayjs';
import React from 'react';

const BlogCard = ({ post }: { post: any }) => {
    const formattedDate = dayjs(post.createdAt).format('YYYY-MM-DD')
    return (
        <div className='border w-96 m-4 p-4 rounded-md border-black-400'>
            <h3 className='text-lg font-bold'>{post.title}</h3>
            <div className='text-state-500 text-sm text-gray-700 flex justify-between py-2'>
                <p>Author Name: {post.author.name}</p>
                <p>Date: {formattedDate}</p>
            </div>
            <p className='text-sm'>{post.content}</p>
        </div>
    );
};

export default BlogCard;