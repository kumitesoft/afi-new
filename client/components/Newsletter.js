const Newsletter = () => {
  return (
    <>
      <div className='empty_padding_newsletter' id='newsletter' />
      <div className='newsletter_container'>
        <div className='newsletter_wrapper'>
          <p className='newsletter_component'>
            Twoj newsletter - <br /> najnowsze promocje, oferty i znizki
          </p>
          <p className='btn newsletter_btn'>Zapisz sie</p>
        </div>
      </div>
      <style jsx>{`
        .empty_padding_newsletter {
          height: 8rem;
        }
        .newsletter_container {
          background-color: #95ac00;
          height: 12rem;
          display: flex;
          align-items: center;
        }
        .newsletter_wrapper {
          display: flex;
          width: 61%;
          margin: 0 auto;
        }
        .newsletter_component {
          font-size: 3rem;
          width: 36rem;
          line-height: 2.3rem;
          color: #000;
          font-variant-caps: all-petite-caps;
        }
        .newsletter_btn {
          align-self: center;
          font-size: 1.6rem;
          padding: 0.7rem 1.4rem;
          white-space: nowrap;
        }
        .newsletter_btn:hover {
          color: #fff;
          background-color: #000;
        }

        @media only screen and (max-width: 1024px) {
          .newsletter_wrapper {
            width: 80%;
          }
        }

        @media only screen and (max-width: 768px) {
          .newsletter_container {
            height: auto;
            padding: 1rem 0;
          }
          .newsletter_component {
            text-align: center;
            margin-bottom: 1rem;
            width: auto;
            font-size: 2rem;
            line-height: 1.8rem;
          }
          .newsletter_wrapper {
            width: 90%;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
};

export default Newsletter;
