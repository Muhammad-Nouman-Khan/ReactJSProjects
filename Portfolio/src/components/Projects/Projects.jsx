import styles from './Projects.module.css';
import {projectsInfo} from '../../constants'
import projectImg from '../../assets/project.png'
const Projects = () => {

	return (

		<section className = {styles.Container} id="projects">
				
			<h1 className = {styles.title}>Projects</h1>

			<div className = {styles.projectContainer}> 
				
				{projectsInfo.map((project,index)=>(

					<div key = {index} className = {styles.project}>
						
						<img src={projectImg} alt="projectImg" className = {styles.projectImg} />
						<h1 className = {styles.projectTitle} >{index === 0 ? "Project A" : index === 1 ? "Project B" : index === 2 ? "Project C" : ""}</h1>
						<p className = {styles.projectDetails} >{project.details}</p>
						<div className = {styles.Skills} >
							<span>{project.skills[0]}</span>
							<span>{project.skills[1]}</span>
							<span>{project.skills[2]}</span>
						</div>	

						<div className = {styles.contact}>
							<a href="www.example@gmail.com">Demo</a>
							<a href={project.source}>Source</a>
						</div>

					</div>

				))}


			</div>

		</section>

	);



}

export default Projects