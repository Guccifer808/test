import BlogList from '@/components/BlogList/BlogList';
import LayoutBlog from '@/layouts/LayoutBlog';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>FastMoney | Blog</title>
        <meta
          name='description'
          content='Надежный сервис обмена валюты без лишних хлопот и скрытых комиссий. Быстро, выгодно, безопасно.'
        />
      </Head>

      <LayoutBlog pageTitle={`FastMoney's Блог`} item={'Blog'}>
        <BlogList />

        {/* <BlogPagination /> */}
      </LayoutBlog>
    </>
  );
}
