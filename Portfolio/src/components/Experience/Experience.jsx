import styles from './Experience.module.css'
import {experienceInfo} from '../../constants'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import graph from '../../assets/graph.png'
import mongo from '../../assets/mongo.png'
import figma from '../../assets/figma.png'
import google from '../../assets/google.png'
import microsoft from '../../assets/microsoft.png'
import netflix from '../../assets/netflix.png'



const Experience = () => (
  

    <section className = {styles.experienceContainer} id="experience">

      <h1 className = {styles.experienceHeading}>EXPERIENCE</h1>
      
      <div className = {styles.Container}>
        
        <div className = {styles.imageContainer}>
          <div className = {styles.IMG} ><img src={html} alt="" /></div> 
          <div className = {styles.IMG} ><img src={css} alt="" /></div>
          <div className = {styles.IMG} ><img src={react} alt="" /></div> 
          <div className = {styles.IMG} ><img src={node} alt="" /></div> 
          <div className = {styles.IMG} ><img src={graph} alt="" /></div> 
          <div className = {styles.IMG} ><img src={mongo} alt="" /></div> 
          <div className = {styles.IMG} ><img src={figma} alt="" /></div> 
        </div>
        <div className = {styles.experiences}>

          {experienceInfo.map((exp,index) => (

            <div key = {index} className = {styles.experience}>
              <img
              src={index === 0 ? google : index === 1 ? microsoft : index === 2 ? netflix : ''}
              alt="" />
              <div className = {styles.experienceInfo}>
                <h1>{exp.title}</h1>
                <p>{exp.date}</p>
                <ul>
                  <li>{exp.resp1}</li>
                  <li>{exp.resp2}</li>
                </ul>
              </div>
            </div>

          ))}
          
        </div>

      </div>  
    </section>




)

export default Experience;