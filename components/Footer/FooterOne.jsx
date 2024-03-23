import { scrollToTop } from '@/lib/helpers';
import Link from 'next/link';
import React from 'react';

const FooterOne = () => {
  return (
    <footer>
      <div className='footer-area'>
        <div className='container'>
          <div className='footer-scroll-wrap'>
            <button
              className='scroll-to-target'
              data-target='html'
              onClick={scrollToTop}
            >
              <i className='fas fa-arrow-up'></i>
            </button>
          </div>
          <div className='footer-top'>
            <div className='row'>
              <div className='col-xl-3 col-lg-4 col-md-6'>
                <div
                  className='footer-widget wow fadeInUp'
                  data-wow-delay='.2s'
                >
                  <Link href='/' className='f-logo'>
                    <img src={'/img/logo/fm_logo.svg'} alt='FastMoney Logo' />
                  </Link>
                  <div className='footer-content'>
                    <p>
                      A new way to make the payments easy, reliable and 100%
                      secure. claritatem itamconse quat. Exerci tationulla
                    </p>
                    <ul className='footer-social'>
                      <li>
                        <a
                          href='https://t.me/+E8eKDKmN0U5lOTYy'
                          target='_blank'
                        >
                          <i className='fab fa-telegram'></i>
                        </a>
                      </li>
                      <li>
                        <a href='https://wa.me/79520042864' target='_blank'>
                          <i className='fab fa-whatsapp'></i>
                        </a>
                      </li>
                      <li>
                        <a href='https://instagram.com/1mfast' target='_blank'>
                          <i className='fab fa-instagram'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-5 col-sm-6'>
                <div
                  className='footer-widget  wow fadeInUp'
                  data-wow-delay='.4s'
                >
                  <h4 className='fw-title'>Useful Links</h4>
                  <div className='footer-link'>
                    <ul>
                      <li>
                        <Link href='/'>Contact us</Link>
                      </li>
                      <li>
                        <Link href='/'>How it Works</Link>
                      </li>
                      <li>
                        <Link href='/'>Create</Link>
                      </li>
                      <li>
                        <Link href='/'>Explore</Link>
                      </li>
                      <li>
                        <Link href='/'>Terms & Services</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-xl-2 col-lg-3 col-sm-6'>
                <div
                  className='footer-widget wow fadeInUp'
                  data-wow-delay='.6s'
                >
                  <h4 className='fw-title'>Community</h4>
                  <div className='footer-link'>
                    <ul>
                      <li>
                        <Link href='/'>Help Center</Link>
                      </li>
                      <li>
                        <Link href='/'>Partners</Link>
                      </li>
                      <li>
                        <Link href='/'>Suggestions</Link>
                      </li>
                      <li>
                        <Link href='/'>Blog</Link>
                      </li>
                      <li>
                        <Link href='/'>Newsletters</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-6'>
                <div
                  className='footer-widget wow fadeInUp'
                  data-wow-delay='.8s'
                >
                  <h4 className='fw-title'>Subscribe Newsletter</h4>
                  <div className='footer-newsletter'>
                    <p>
                      Exerci tation ullamcorper suscipit lobortis nisl aliquip
                      ex ea commodo
                    </p>
                    <form action='#'>
                      <input
                        type='email'
                        placeholder='Info@gmail.com'
                        required
                      />
                      <button type='submit'>
                        <i className='fas fa-paper-plane'></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer-bottom'>
            <div className='row align-items-center'>
              <div className='col-lg-6'>
                <div className='copyright-text'>
                  <p>&copy; FastMoney </p>
                </div>
                <div className='footer-menu d-sm-none d-block'>
                  <ul>
                    <li>
                      <Link href='/privacy-policy' target='_blank'>
                        Политика конфиденциальности
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-6 d-none d-sm-block'>
                <div className='footer-menu'>
                  <ul>
                    <li>
                      <Link href='/privacy-policy' target='_blank'>
                        Политика конфиденциальности
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
