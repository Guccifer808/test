import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import { blogSectionData } from '@/lib/constants/blogSectionData';

const BlogList = () => {
  return (
    <>
      <section className='wrapper container wow fadeInUp' data-wow-delay='.5s'>
        <div className='row'>
          {blogSectionData.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogList;
