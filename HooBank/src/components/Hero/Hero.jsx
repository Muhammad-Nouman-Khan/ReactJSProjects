import {robot,discount,arrowUp} from '../../assets'
import styles from './Hero.module.css'
import {stats} from '../../constants'

const Circle = () => {
    return(

        <div className={styles.circle}>
            <p className={styles.circlePara}>Get <img src={arrowUp} alt="" /> <br/> Started</p>
        </div>

    );
}

const Hero = () => {
  return (
    <section className={styles.Container}>
        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <p className={styles.heroDiscount}><img src={discount} alt="" /><span>20%</span>DISCOUNT FOR<span>1 MONTH</span>ACCOUNT</p>
                <div className={styles.title}>
                    <h1>The Next<br/><span className={styles.generation}><h1>Generation</h1></span></h1>
                    <Circle />
                </div>
                <h1>Payment Method.</h1>
                <p className={styles.heroPara}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.We examine annual percentage rates, annual fees.</p>
            </div>
            <img src={robot} alt="" className={styles.heroImg} />
        </div>

        <div className={styles.statsContainer}>
            {stats.map((stat,index)=>(
                <div key = {index} className={styles.stat}>
                    <h1>{stat.count}</h1>
                    <span>{stat.title}</span>
                    <p>{index !== stats.length-1 ? "I" : ''}</p>
                </div>
            ))}
        </div>

    </section>
  )
}

export default Hero