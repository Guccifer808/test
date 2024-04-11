import BlogList from '@/components/BlogList/BlogList';
import BlogPagination from '@/components/BlogPagination/BlogPagination';
import LayoutBlog from '@/layouts/LayoutBlog';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>FastMoney | Blog</title>
        <meta name='description' content='' />
      </Head>

      <LayoutBlog pageTitle={`FastMoney's Блог`} item={'Blog'}>
        <BlogList />

        {/* <BlogPagination /> */}
      </LayoutBlog>
    </>
  );
}
