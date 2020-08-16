import SmallCard from './SmallCard';

const LatestNews = ({ data, latest }) => {
  return (
    <div className='latestNews_container'>
      <div className='latestNews_title'>
        <p className='latestNews_title-left'>Najnowsze</p>
        <a href='#allImages' className='latestNews_title-right' onClick={() => latest()}><p>Zobacz</p></a>
      </div>
      {data ? (
        <div className='latestNews'>
          {data.map((el) => (
            <SmallCard
              id={el._id}
              name={el.name}
              description={el.description}
              price={el.price}
              category={el.category}
              image={el.image}
              createdAt={el.createdAt}
              key={el.name}
            />
          ))}
        </div>
      ) : (
        <p>loading</p>
      )}
      <style jsx>
        {`
          .latestNews_container {
            width: 95%;
            margin: 3rem auto 0 auto;
          }
          .latestNews_title {
            font-size: 1.3rem;
            color: #000;
            display: flex;
            justify-content: space-between;
            align-items: baseline;
          }
          .latestNews_title-left {
            font-size: 1.8rem;
          }
          .latestNews_title-right {
            cursor: pointer;
          }
          .latestNews_title-right:hover {
            opacity: 0.75;
          }
          .latestNews {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
            grid-gap: 1.3rem;
            margin-top: 1rem;
          }

          @media only screen and (max-width: 768px) {
            .latestNews_title-right {
              text-align: center;
            }
          }
          @media only screen and (max-width: 425px) {
            .latestNews_container {
              margin: 3rem auto 0 auto;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LatestNews;
