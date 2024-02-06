import React from 'react'
import styles from './Billing.module.css'
import {bill,apple,google} from '../../assets'
const Billing = () => {
  return (
    <section className={styles.container}>
        <img src={bill} alt="" className={styles.billImg} />
        <div className={styles.content}>
            <h1>Easily control your billing & invoicing.</h1>
            <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
            <div>
                <img className={styles.IMG} src={apple} alt="" />
                <img className={styles.IMG} src={google} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Billing