import Card from './Card';
import { useState } from 'react';

const HomeNews = ({ data, latest, popular, under, random }) => {
  return (
    <div className='homeNews_container' id='allImages'>
      <div className='homeNews_title'>
        <p className='homeNews_title-left'>Wejdz na wyzszy poziom zakupow</p>
      </div>
      {data ? (
        <div className='homeNews'>
          <div className='homeNews_buttons'>
            <p className='btn' onClick={() => latest()}>
              Najnowsze
            </p>
            <p className='btn' onClick={() => popular()}>
              Popularne
            </p>
            {/* <p onClick={() => popular()}>Cena</p> */}
            <p className='btn' onClick={() => under()}>
              - 10PLN
            </p>
            <p className='btn' onClick={() => random()}>
              Random
            </p>
          </div>
          <div className='homeNews_box'>
            {data.map((el) => (
              <Card
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
        </div>
      ) : (
        <p>loading</p>
      )}
      <style jsx>
        {`
          .homeNews_container {
            width: 95%;
            margin: 0rem auto;
            padding-top: 7rem;
          }
          .homeNews_title {
            font-size: 1.3rem;
            color: #000;
            display: flex;
            justify-content: space-between;
          }
          .homeNews_title-left {
            font-size: 1.8rem;
          }

          .homeNews {
            margin-top: 1rem;
          }

          // *** BUTTON ***
          .homeNews_buttons {
            white-space: nowrap;
            grid-template-columns: repeat(4, minmax(6.9rem, 14rem));
            display: grid;
            font-size: 1.3rem;
            margin-bottom: 4rem;
          }
          .homeNews_buttons p {
            margin-right: 1rem;
            position: relative;
            text-align: center;
          }
          .homeNews_buttons p::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            width: 0%;
            transition: 0.2s;
            background-color: #484848;
          }
          .homeNews_buttons p:hover {
            color: #484848;
          }
          .homeNews_buttons p:hover::before {
            margin-right: 1rem;
            width: 100%;
          }

          .homeNews_buttons p:active {
            transform: translateY(0.3rem);
          }

          // *** HOMENEWS BOX ***
          .homeNews_box {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(15.9rem, 24.4rem));
            grid-auto-rows: 25.14rem;
            grid-gap: 1.3rem;
            grid-row-gap: 4rem;
            justify-content: center;
            margin-top: 2rem;
          }

          @media only screen and (max-width: 768px) {
            .homeNews_buttons {
              white-space: nowrap;
              grid-template-columns: repeat(2, minmax(6.9rem, 1fr));
              row-gap: 1rem;
              column-gap: 1rem;
            }
            .homeNews_buttons p {
              margin-right: 0rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomeNews;
