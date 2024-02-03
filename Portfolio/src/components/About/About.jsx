import styles from './About.module.css'
import {aboutInfo} from '../../constants'
import cursor from '../../assets/cursor.png'
import uiIcon from '../../assets/uiIcon.png'
import serverIcon from '../../assets/serverIcon.png'
import aboutImage from '../../assets/aboutImage.png'

const About = () => (
  

    <section className = {styles.aboutContainer} id="about">

      <h1 className = {styles.aboutHeading}>ABOUT</h1>
      
      <div className = {styles.serviceContainer}>
        
        <img className = {styles.aboutImage} src={aboutImage} alt="" /> 

        <div className = {styles.services}>

          {aboutInfo.map((info,index) => (

            <div key = {index} className = {styles.service}>
              <img
              src={index === 0 ? cursor : index === 1 ? serverIcon : index === 2 ? uiIcon : ''}
              alt="" />
              <div className = {styles.serviceInfo}>
                <h1>{info.title}</h1>
                <p>{info.content}</p>
              </div>
            </div>

          ))}
          
        </div>

      </div>  
    </section>




)

export default About;