import React from 'react';

const BlogCard = ({ post }) => {
  return (
    <div className='col-sm-12 col-md-6 col-lg-4 mb-4 mb-md-0'>
      <div
        className='card text-dark card-has-bg click-col mb-4'
        style={{ backgroundImage: `url(${post.src})` }}
      >
        <img className='card-img d-none ' src={post.src} alt={post.title} />
        <div className='card-img-overlay d-flex flex-column'>
          <div className='card-body'>
            <small className='card-meta mb-2'>{post.category}</small>
            <h4 className='card-title mt-0 '>
              <a>{post.title}</a>
            </h4>
            <small className='card-date'>
              <i className='far fa-clock' /> {post.date}
            </small>
          </div>
          <div className='card-footer text-center'>
            <button className='btn-blog'>Перейти к статье</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
