const InbetweenOne = () => {
  return (
    <div className='inbetweenOne_container'>
      <div className='inbetweenOne_wrapper'>
        <span>The year 2020</span>
        <p>WSZYSTKO CZEGO DUSZA ZAPRAGNIE JEST W JEDNYM MIEJSCU</p>
      </div>
      <style jsx>{`
        .inbetweenOne_container {
            margin: 8rem 0rem 0rem 0rem;
        }
        .inbetweenOne_wrapper {
            width: 50%;
            margin: 0 auto;
            text-align: center;
            position: relative;
            background: #fbfbfb;
            border-radius: .3rem;
            padding: 2rem 3rem;
        }
        .inbetweenOne_wrapper p {
            color: #000;
            font-size: 5rem;
            line-height: 5rem;
        }
      `}</style>
    </div>
  );
};

export default InbetweenOne;
