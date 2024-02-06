import {card} from "../../assets";
import styles from "./Card.module.css"
import {Button} from '../../index'
const Card = () => {
  return (
    <section className={styles.Container}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          Find a better card deal <br /> in few easy steps.
        </h1>
        <p className={styles.para}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <img src={card} alt="" className={styles.cardImg}/>
    </section>
  );
};

export default Card;
