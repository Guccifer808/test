import React from 'react';
import PageLoader from '../components/PageLoader/PageLoader';
import cn from 'classnames';
import HeaderTwo from '../components/Header/HeaderTwo';
import FooterOne from '../components/Footer/FooterOne';
import BlogBreadcrumb from '../components/BlogBreadcrumb/BlogBreadcrumb';
import BlogAside from '../components/BlogAside/BlogAside';
import HeaderLegal from '@/components/Header/HeaderLegal';

const LayoutBlog = (props) => {
  return (
    <>
      <div className={cn('white-background')}>
        <PageLoader />

        <HeaderLegal />

        <main>
          <BlogBreadcrumb title={props.pageTitle} item={props.item} />

          <section className='blog-area  pt-130 pb-130'>
            <div className='container '>
              <div className='row '>
                <div className='col-lg-12 d-flex'>{props.children}</div>

                {/* <div className='col-lg-4'><BlogAside /></div> */}
              </div>
            </div>
          </section>
        </main>
      </div>
      <FooterOne />
    </>
  );
};

export default LayoutBlog;
