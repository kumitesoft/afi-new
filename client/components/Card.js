import Link from 'next/link';

const Card = ({
  id,
  name,
  description,
  price,
  category,
  image,
  createdAt,
}) => {

  return (
    <div className='blockBig' key={name}>
      <a
        className='blockBig_image_container'
        href='#!'
        onClick={() =>
          fetch(`http://localhost:3000/api/popularity/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
          })
        }
      >
        <span className='labelBig'>EXTRA</span>
        <img src={image} className='image' />
      </a>
      <p className='titleBig'>{name}</p>
      <div className='lastpartBig'>
        <p className='priceBig'>{price}PLN</p>
      </div>
      <style jsx>
        {`
          // *** BLOCK ***
          .blockBig {
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }

          // *** IMAGE ***
          .blockBig_image_container {
            position: relative;
            flex: 1;
            cursor: pointer;
            overflow: hidden;
            display: flex;
          }
          .blockBig .image {
            max-width: 100%;
            transition: 0.5s;
          }

          .blockBig:hover .image {
            transform: scale(1.1);
            opacity: 0.75;
          }

          // *** LABEL ***
          .labelBig {
            position: absolute;
            top: 1.3rem;
            padding: 0rem 0.9rem;
            line-height: 2.1rem;
            background-color: #ff2a2a;
            color: #fff;
            right: -5rem;
            pointer-events: none;
            transition: 0.1s;
            opacity: 0;
            z-index: 10;
          }

          .blockBig_image_container:hover .labelBig {
            right: 1.5rem;
            pointer-events: auto;
            opacity: 1;
          }

          // *** TITLE ***
          .titleBig {
            position: relative;
            color: #000;
            font-size: 1.5rem;
            cursor: pointer;
            margin-top: 0.3rem;
          }

          .titleBig:hover {
            color: #faab37;
          }

          // *** LASTPART ***
          .lastpartBig {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .priceBig {
            font-size: 1.5rem;
            color: #000;
          }
        `}
      </style>
    </div>
  );
};

export default Card;
