import styles from './App.module.css'
import {Navbar,Hero,About,Experience,Projects,Contact} from './components'


const App = () => (
  

    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>




)

export default App;