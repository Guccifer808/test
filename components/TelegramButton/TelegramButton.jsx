import Link from 'next/link';

const TelegramButton = ({ buttons }) => {
  return (
    <div className='text-center text-md-left d-flex flex-column flex-md-row justify-content-start mt-4 gap-4 gap-md-4'>
      {buttons.map((button, index) => (
        <Link
          key={index}
          href={button.href}
          className='btn btn-tg'
          target='_blank'
          rel='noreferrer'
        >
          {button.btnText} <i className='fab fa-telegram-plane'></i>
        </Link>
      ))}
    </div>
  );
};

export default TelegramButton;
