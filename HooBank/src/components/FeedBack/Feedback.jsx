import {feedbacks} from '../../constants'
import styles from './Feedback.module.css'
import {Button} from '../../index'
import {quotes,people01,people02,people03,airbnb,binance,coinbase,dropbox} from '../../assets'
const Feedback = () => {
  return (
    <section className={styles.container}>
        <div className={styles.top}>
            <h1>What people are saying about us</h1>
            <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>

        <div className={styles.mid}>
            {feedbacks.map((feedback,index)=>(
                <div key={index} className={styles.feedback}>
                    <img src={quotes} alt="" className={styles.quotes} />
                    <p>{feedback.content}</p>
                    <div className={styles.person}>
                        <img src={index === 0 ? people01 : index === 1 ? people02 : index === 2 ? people03 : ''} alt="" />
                        <div className={styles.info}>
                            <h2>{feedback.name}</h2>
                            <p>{feedback.occ}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className={styles.imgContainer}>
            <img src={airbnb} alt="" />
            <img src={binance} alt="" />
            <img src={coinbase} alt="" />
            <img src={dropbox} alt="" />
        </div>

        <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
                <h1>Let's try our service now!</h1>
                <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <Button />
        </div>
    </section>
  )
}

export default Feedback