import styles from './SmallCard.module.scss';

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
    <div className={styles.blockSmall_container} key={name}>
      <p className={styles.titleSmall}>{name}</p>
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
        <img src={image} className={styles.imageSmall}/>
      </a>
      <style jsx>
        {`
          
        `}
      </style>
    </div>
  );
};

export default SmallCard;
