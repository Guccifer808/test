import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import { blogSectionData } from '@/lib/constants/blogSectionData';
import Link from 'next/link';

const BlogSection = () => {
  return (
    <section className='wrapper wow fadeInUp' data-wow-delay='.5s' id='blog'>
      <div className='container pt-120 pb-60'>
        <div className='section-title text-center mb-60'>
          <span className='sub-title '>Полезная информация и статьи</span>
          <h2 className='title '>
            FastMoney's<span> блог</span>
          </h2>
        </div>
        <div className='row'>
          {blogSectionData.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
        <div className='d-flex justify-content-center mt-30 '>
          <Link href='/blog' className='btn'>
            Больше статей
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
