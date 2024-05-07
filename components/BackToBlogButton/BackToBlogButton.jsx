import useScrollPercentage from '@/lib/hooks/useScrollPercentage';
import Link from 'next/link';

const BackToBlogButton = () => {
  const showComponent = useScrollPercentage(20);
  return (
    <>
      {showComponent ? (
        <div className='blog-back-btn-wrap'>
          <Link href={'/blog'} className='btn-back '>
            <i className='fa fa-arrow-left'></i>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default BackToBlogButton;
