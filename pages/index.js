import Head from 'next/head';
import LayoutTwo from '@/layouts/LayoutTwo';
import BannerTwo from '@/components/Banner/BannerTwo';
import About from '@/components/About/About';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import CounterArea from '@/components/CounterArea/CounterArea';
import Faq from '@/components/Faq/Faq';
import WhyChooseUsTwo from '@/components/WhyChooseUs/WhyChooseUsTwo';
import WhitePaper from '@/components/WhitePaper/WhitePaper';
import Roadmap from '@/components/Roadmap/Roadmap';
import cn from 'classnames';

export default function HomeTwo() {
  return (
    <>
      <Head>
        <title>FastMoney - Сервис по обмену валют</title>
        <meta name='description' content='' />
      </Head>

      <LayoutTwo>
        <main>
          <div className={cn('white-background')}>
            <BannerTwo />

            <About />
            <WhyChooseUs />
            <WhyChooseUsTwo />
            <CounterArea />
          </div>
          <div className='area-bg'>
            <Roadmap />
            <WhitePaper />
          </div>
          <div className={cn('white-background')}>
            <Faq />
          </div>
        </main>
      </LayoutTwo>
    </>
  );
}
