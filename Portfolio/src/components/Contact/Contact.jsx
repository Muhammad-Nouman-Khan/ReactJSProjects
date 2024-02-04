import styles from './Contact.module.css'
import email from '../../assets/emailIcon.png'
import github from '../../assets/githubIcon.png'
import linkedin from '../../assets/linkedinIcon.png'
const Contact = () => (


	<div className = {styles.container} id = "contact">

		<div className = {styles.left}>
			<h1>Contact</h1>
			<p>Feel free to reach out</p>
		</div>

		<div className = {styles.right}>
			
			<div className = {styles.contact}>
				<img src={email} alt="" />
				<a href="#">myemail@email.com</a>
			</div>

			<div className = {styles.contact}>
				<img src={linkedin} alt="" />
				<a href="#">myemail@email.com</a>
			</div>

			<div className = {styles.contact}>
				<img src={github} alt="" />
				<a href="#">myemail@email.com</a>
			</div>


		</div>
		
	</div>


)
export default Contact