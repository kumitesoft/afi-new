const SmallCard = ({
  id,
  name,
  description,
  price,
  category,
  image,
  createdAt,
}) => {
  return (
    <div className='blockSmall' key={name}>
      <p className='titleSmall'>{name}</p>
      <a
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
        <img src={image} className='image' />
      </a>
      <style jsx>
        {`
          // *** BLOCK ***
          .blockSmall {
            position: relative;
            cursor: pointer;
            min-height: 10rem;
            max-height: 17rem;
            display: flex;
          }
          .blockSmall a { 
            display: flex;
          }
          .blockSmall a .image {
            max-width: 100%;
            transition: 0.2s;
            border-radius: 0.2rem;
          }

          .blockSmall:hover .image {
            transform: translate(-0.5rem, -0.5rem) rotate(-3deg);
          }

          // *** TITLE ***
          .titleSmall {
            transition: 0.2s;
            position: absolute;
            bottom: 1rem;
            right: 12%;
            font-weight: 600;
            min-width: 8rem;
            z-index: -1;
          }

          .blockSmall:hover .titleSmall {
            bottom: -1.1rem;
            right: 0;
            color: black;
          }
        `}
      </style>
    </div>
  );
};

export default SmallCard;
