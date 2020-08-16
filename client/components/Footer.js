const Footer = () => (
  <div className='footer-container'>
    <div className='footer'>
      <div className='footer_left'>
        <img src='./logo.png' alt='logo' />
        <p>2020</p>
      </div>
      <div className='footer_right'>
        <img src='./instagram.png' />
        <p>Thank you</p>
      </div>
    </div>
    <style jsx global>
      {`
        .footer-container {
          margin-top: 3rem;
          background-color: #2d2d2d;
          min-height: 4rem;
          padding: 1rem;
          color: #fff;
        }
        .footer {
          width: 76%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
        }
        .footer_left {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .footer_left img {
          max-width: 221px;
          filter: invert(1);
        }
        .footer_right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .footer_right img {
          width: 34px;
        }

        @media only screen and (max-width: 768px) {
          .footer {
            width: 90%;
          }
        }
      `}
    </style>
  </div>
);

export default Footer;
