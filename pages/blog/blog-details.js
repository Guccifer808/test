import BlogDetails from '@/components/BlogDetails/BlogDetails';
import LayoutBlog from '@/layouts/LayoutBlog';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>FastMoney | Blog</title>
        <meta name='description' content='' />
      </Head>

      <LayoutBlog pageTitle={'Blog Details'} item={'BLOG DETAILS'}>
        <BlogDetails />
      </LayoutBlog>
    </>
  );
}
