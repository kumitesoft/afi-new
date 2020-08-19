import styles from './Card.module.scss';

const Card = ({ id, name, description, price, category, image, createdAt }) => {
  return (
    <div className={styles.blockBig_container} key={name}>
      <a
        className={styles.blockBig_image_container}
        href='#!'
        onClick={() =>
          fetch(`http://localhost:3000/api/popularity/${id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
          })
        }
      >
        <span className={styles.labelBig}>EXTRA</span>
        <img src={image} className={styles.imageBig}/>
      </a>
      <p className={styles.titleBig}>{name}</p>
      <p className={styles.priceBig}>{price}PLN</p>
      <style jsx>{``}</style>
    </div>
  );
};

export default Card;
