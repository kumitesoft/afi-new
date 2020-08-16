import Link from 'next/link';
import DesktopMenu from './DesktopMenu'

const Navbar = ({ setOpenMobileMenu, openMobileMenu, setMainPage }) => {
  return (
    <div className='navbar-container'>
      <div className='navbar'>
          <div className='navbar-logo'>
            <Link href='/'>
              <img alt='logo' src='./logo.png' />
            </Link>
          </div>
          <DesktopMenu setMainPage={setMainPage}/>

        <button className='burger' onClick={() => setOpenMobileMenu(!openMobileMenu)}>mobile</button>
      </div>

      <style jsx>
        {`
          .navbar-container {
            position: sticky;
            top: 0;
            left: 0;
            height: 3.5rem;
            background-color: #fff;
            width: 100%;
            z-index: 50;
            display: flex;
            border-bottom: .5px solid #dcdcdc;
          }
          .navbar {
            display: flex;
            width: 95%;
            margin: 0 auto;
            justify-content: space-between;
          }
          .navbar-logo {
            display: flex;
            align-items: center;
            cursor: pointer;
            height: 3.5rem;
            justify-content: center;
            transition: 0.5s;
          }
          .navbar-logo img {
            max-width: 17rem;
          }

          .burger {
            display: none;
          }

          @media only screen and (max-width: 1024px) {
            .burger {
              display: block;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
