import React from 'react';
const BlogBreadcrumb = (props) => {
  return (
    <section className='breadcrumb-area breadcrumb-bg'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='breadcrumb-content'>
              <h2 className='title'>{props.title}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBreadcrumb;
