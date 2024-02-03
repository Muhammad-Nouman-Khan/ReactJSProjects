import React from 'react'
import heroImage from '../../assets/heroImage.png'
import styles from './Hero.module.css'

const Hero = () => {

	return(

		<section className = {styles.heroContainer}>
			<div className = {styles.heroContent}>
				<h1 className = {styles.heroTitle}>Hi,I'm Nouman</h1>
				<p className = {styles.heroAbout}>
					I’m a frontend developer with 1 year
					of experience using React JS.
					Reach out if you’d like to learn more!
				</p>
				<a href="mailto:myemail@gmail.com" className = {styles.heroBtn}>Contact Me</a>
			</div>
			<img className = {styles.heroImg} src={heroImage} alt="" />
			<div className = {styles.topColor} />
			<div className = {styles.bottomColor} />

		</section>

	);		

}

export default Hero