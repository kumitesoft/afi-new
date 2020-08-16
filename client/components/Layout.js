import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Head from 'next/head';
import Footer from './Footer';
import MobileMenu from './MobileMenu';

const Layout = ({children, mainPage, setMainPage}) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    if (openPopup && openMobileMenu) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'visible';
    }
  }, [openPopup, openMobileMenu]);

  return (
    <div className='layout'>
      <Head>
        <title>MOJA ZTRONA</title>
      </Head>
      <MobileMenu
        openMobileMenu={openMobileMenu}
        setOpenMobileMenu={setOpenMobileMenu}
        setMainPage={setMainPage}
      />
      <div
        className='popup_help_container'
        style={{ display: openPopup ? 'block' : 'none' }}
      >
        <div className='popup_help_wrapper'>
          <p>
            NASZA FIRMA NAWIAZALA KONTAKT AFILIACYJNY Z PONAD 100 INNYCH FIRM.
            DZIEKI NAM MASZ MOZLIWOSC DOJSCIA DO NAJCIEKAWSZYCH PRODUKTOW WIELU
            FIRM.
          </p>
          <p
            className='popup_help_close'
            onClick={() => setOpenPopup(!openPopup)}
          >
            cloze
          </p>
        </div>
        <div className='popup_help_container_bg' />
      </div>
      <div className='topline_container'>
        <div className='topline_wrapper' style={{justifyContent: mainPage ? 'space-between' : 'flex-end' }}>
          <div className='topline_box' style={{display: mainPage ? 'flex' : 'none' }}>
            <a href='#newsletter'>
              <p className='newsletter'>NEWSLETTER</p>
            </a>
            <a href='#allImages'>
              <img className='arrowdown' src='./arrowdown.png' />
            </a>
          </div>
          <div className='topline_box'>
            <p onClick={() => setOpenPopup(!openPopup)}>POMOC</p>
          </div>
        </div>
      </div>
      <Navbar
        setOpenMobileMenu={setOpenMobileMenu}
        openMobileMenu={openMobileMenu}
        setMainPage={setMainPage}
      />
      <div className='bottom_container'>
        <div className='bottom_box'>
          <p className='blinking'>
            MAMY WSZYSTKO CZEGO POTRZEBUJESZ. JESTESMY POLACZENI DO PONAD 100
            FIRM
          </p>
        </div>
      </div>
      {children} {/* CHILDREN */}
      <Footer />
      <style jsx global>
        {`
          // *** GENERAL ***
          html {
            font-family: 'Vollkorn', serif !important;
            line-height: 1.8em;
            letter-spacing: 0.2rem;
            font-size: 14px;
            scroll-behavior: smooth;
          }
          body {
            margin: 0;
            padding: 0;
            color: rgb(119, 119, 119);
            overflow-x: hidden;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          li,
          a {
            text-decoration: none;
            color: #545454;
          }
          p {
            margin: 0;
          }
          button {
            border: none;
            background: none;
          }
          svg {
            color: #a7a7a7;
          }
          .btn {
            cursor: pointer;
            padding: 0.6rem 0.6rem 0.4rem 0.6rem;
            user-select: none;
            color: #000;
            background: #fff;
            border: 1px solid #eaeaeb;
            -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.15);
            box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.15);
            white-space: no-wrap;
          }

          // *** LAYOUT ***
          .layout {
            display: flex;
            flex-direction: column;
            position: relative;
          }
          .popup_help_container {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 100;
            display: none;
            height: 100vh;
            width: 100vw;
          }
          .popup_help_container_bg {
            height: 100%;
            width: 100%;
            opacity: 0.8;
            background-color: #fff;
          }
          .popup_help_wrapper {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #000;
            z-index: 1;
            height: 13rem;
            width: 32rem;
            background-color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 1rem;
          }
          .popup_help_close {
            position: absolute;
            top: 0;
            right: 0;
          }
          .popup_help_wrapper p {
            color: #fff;
          }
          .topline_container,
          .bottom_container {
            height: 2.8rem;
            background-color: #000;
            display: flex;
          }
          .topline_container .topline_wrapper,
          .bottom_container .bottom_wrapper {
            width: 95%;
            margin: 0.3rem auto 0.1rem auto;
            display: flex;
            justify-content: space-between;
          }
          .topline_container .topline_wrapper .topline_box {
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }

          .topline_container .topline_wrapper .topline_box p {
            cursor: pointer;
          }
          .newsletter {
            border-right: 1px solid rgb(119, 119, 119);
            padding-right: 0.4rem;
            margin-right: 0.4rem;
          }
          .arrowdown {
            filter: invert(1);
            width: 26px;
            opacity: 5;
            cursor: pointer;
            transform: translateY(4px);
          }
          .arrowdown {
            opacity: 1;
          }
          .topline_container .topline_wrapper .topline_box p:hover {
            color: #fff;
          }

          @keyframes blink {
            50% {
              background-color: #95ac00;
            }
          }

          .bottom_container {
            animation: blink 1s ease infinite;
          }
          .bottom_container .bottom_box {
            width: 100%;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .bottom_container .bottom_box p {
            color: #fff;
            letter-spacing: 0.5rem;
            line-height: 1.2rem;
            padding: .4rem 0 .2rem 0;
          }

          @media only screen and (max-width: 768px) {
            .bottom_container {
              height: auto;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
