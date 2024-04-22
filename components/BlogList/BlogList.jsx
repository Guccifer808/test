import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import { blogSectionData } from '@/lib/constants/blogSectionData';
import Link from 'next/link';

const BlogList = () => {
  return (
    <>
      <section className='wrapper container wow fadeInUp' data-wow-delay='.5s'>
        {/* <div className='section-title text-center mb-60'>
            <span className='sub-title '>Наш Блог</span>
            <h2 className='title '>
              <span>Полезный</span> заголовок секции
            </h2>
          </div> */}
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
