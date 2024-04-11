import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import { blogSectionData } from '@/lib/constants/blogSectionData';
import Link from 'next/link';

const BlogSection = () => {
  return (
    <section className='wrapper wow fadeInUp ' data-wow-delay='.8s' id='blog'>
      <div className='container pt-120 pb-60'>
        <div className='section-title text-center mb-60'>
          <span className='sub-title '>Наш Блог</span>
          <h2 className='title '>
            <span>Полезный</span> заголовок секции
          </h2>
        </div>
        <div className='row'>
          {blogSectionData.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
        <div className='d-flex justify-content-center mt-30 '>
          <Link
            // href='/blog'
            href='/'
            className='btn-blog'
          >
            Больше статей
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
