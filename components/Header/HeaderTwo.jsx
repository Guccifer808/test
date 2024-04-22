import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import $ from 'jquery';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

let flag = true;

const HeaderTwo = () => {
  const [activeSection, setActiveSection] = useState('');
  // sticky nav bar
  const [stickyClass, setStickyClass] = useState({
    fixed: '',
    header: '',
  });

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight < 245
        ? setStickyClass({ fixed: '', header: '' })
        : setStickyClass({ fixed: 'active-height', header: 'sticky-menu' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  // mobile menu
  useEffect(() => {
    if (flag === true) {
      //SubMenu Dropdown Toggle
      if ($('.menu-area li.menu-item-has-children ul').length) {
        $('.menu-area .navigation li.menu-item-has-children').append(
          '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
        );
      }

      //Mobile Nav Hide Show
      if ($('.mobile-menu').length) {
        var mobileMenuContent = $('.menu-area .main-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

        //Dropdown Button
        $('.mobile-menu li.menu-item-has-children .dropdown-btn').on(
          'click',
          function () {
            $(this).toggleClass('open');
            $(this).prev('ul').slideToggle(500);
          }
        );
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
          $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.menu-backdrop, .mobile-menu .close-btn').on('click', function () {
          $('body').removeClass('mobile-menu-visible');
        });
      }
    }

    flag = false;
  }, []);

  // scroll to element by id
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // active link switching
  const [hash, setHash] = useState('');
  const { asPath, pathname } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionOffsets = {
        header: document.getElementById('header').offsetTop,
        about: document.getElementById('about').offsetTop,
        roadmap: document.getElementById('roadmap').offsetTop,
        blog: document.getElementById('blog').offsetTop,
        faq: document.getElementById('faq').offsetTop,
        // Add offsets for other sections if needed
      };

      let activeSection = '';
      Object.entries(sectionOffsets).forEach(([key, value]) => {
        if (scrollPosition >= value) {
          activeSection = key;
        }
      });
      setHash(activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call handleScroll once to set the initial active section
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (sectionId) => {
    const sectionOffset = document.getElementById(sectionId).offsetTop;
    window.scrollTo({ top: sectionOffset, behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  useEffect(() => {
    setHash(asPath.split('#')[1]);
  }, [asPath]);

  const isActiveLink = (id) => {
    return id === `#${hash}` ? 'active' : '';
  };

  return (
    <header id='header'>
      <div
        id='sticky-header'
        className={cn(
          'menu-area menu-style-two transparent-header',
          stickyClass.header
        )}
      >
        <div className='container custom-container-three'>
          <div className='row'>
            <div className='col-12'>
              <div className='mobile-nav-toggler'>
                <i className='fas fa-bars'></i>
              </div>

              <div className='menu-wrap'>
                <nav className='menu-nav'>
                  <div className='logo'>
                    <Link href='/'>
                      <Image
                        src={'/img/logo/fm_logo.svg'}
                        alt='FastMoney'
                        width={120}
                        height={50}
                      />
                    </Link>
                  </div>

                  <div className='navbar-wrap main-menu d-none d-lg-flex'>
                    <ul className='navigation'>
                      <li
                        className={cn(
                          isActiveLink('#header'),
                          'menu-item-has-children'
                        )}
                      >
                        <Link
                          href='#header'
                          className='section-link'
                          onClick={() => handleClick('header')}
                        >
                          Калькулятор
                        </Link>
                      </li>
                      <li className={isActiveLink('#about')}>
                        <Link
                          href='#about'
                          className='section-link'
                          onClick={() => handleClick('about')}
                        >
                          О Нас
                        </Link>
                      </li>
                      <li className={isActiveLink('#roadmap')}>
                        <Link
                          href='#roadmap'
                          className='section-link'
                          onClick={() => handleClick('roadmap')}
                        >
                          Roadmap
                        </Link>
                      </li>
                      <li className={isActiveLink('#blog')}>
                        <Link
                          href='#blog'
                          className='section-link'
                          onClick={() => handleClick('blog')}
                        >
                          Блог
                        </Link>
                      </li>
                      <li className={isActiveLink('#faq')}>
                        <Link
                          href='#faq'
                          className='section-link'
                          onClick={() => handleClick('faq')}
                        >
                          Faq
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className='header-action d-none d-md-block'>
                    <ul>
                      <li className='header-btn'>
                        <Link
                          href='https://t.me/fastmoneyphuket'
                          className='btn'
                          target='_blank'
                        >
                          Telegram <i className='fab fa-telegram-plane'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* <!-- Mobile Menu  --> */}
              <div className='mobile-menu'>
                <nav className='menu-box'>
                  <div className='close-btn'>
                    <i className='fas fa-times'></i>
                  </div>
                  <div className='nav-logo'>
                    <Link href='/'>
                      <Image
                        src={'/img/logo/fm_logo.svg'}
                        alt='FastMoney'
                        title=''
                        width={120}
                        height={50}
                      />
                    </Link>
                  </div>
                  <div className='menu-outer'>
                    {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                  </div>
                  <div className='social-links'>
                    <ul className='clearfix'>
                      <li>
                        <Link href='https://t.me/fm_advisor'>
                          <i className='fab fa-telegram-plane'></i>
                        </Link>
                      </li>
                      <li>
                        <Link href='https://wa.me/79520042864'>
                          <i className='fab fa-whatsapp'></i>
                        </Link>
                      </li>
                      <li>
                        <Link href='https://instagram.com/1mfast'>
                          <i className='fab fa-instagram'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className='menu-backdrop'></div>
              {/* <!-- End Mobile Menu --> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
