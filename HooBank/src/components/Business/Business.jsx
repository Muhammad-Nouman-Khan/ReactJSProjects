import React from "react";
import {star,shield,send} from '../../assets'
import styles from './Business.module.css'
import {Button} from '../../index'
const Business = () => {
  return (
    <section className={styles.Container}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          You do the business,
          <br /> we’ll handle the money.
        </h1>
        <p className={styles.para}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>

      <div className={styles.right}> 
        <div className={styles.service}>
          <img src={star} alt="" />
          <div>
            <h1>Rewards</h1> 
            <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
          </div>
        </div>
        <div className={styles.service}>
          <img src={shield} alt="" />
          <div>
            <h1>100% Secured</h1> 
            <p>We take proactive steps make sure your information and transactions are secure.</p>
          </div>
        </div>
        <div className={styles.service}>
          <img src={send} alt="" />
          <div>
            <h1>Balance Transfer</h1> 
            <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
