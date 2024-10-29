"use client"
import React from 'react';
import BlogCard from './component/BlogCard';
import { gql, useQuery } from '@apollo/client';

const GET_POSTS = gql`
    query allPost{
      posts {
        id
        title
        content
        author {
          name
          email
        }
      }
    }
`

const Posts = () => {
    const { loading, error, data } = useQuery(GET_POSTS);
    if (loading) {
        return <p>Loading...</p>;
    }
    console.log(data);
    return (
        <div>
            <h1 className='text-center font-bold text-5xl my-4 pb-4'>Posts</h1>
            <hr />
            <BlogCard />
        </div>
    );
};

export default Posts;