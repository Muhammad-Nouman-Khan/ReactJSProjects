import styles from "./App.module.css";
import {Navbar,Hero} from "./index"

function App() {

  return (
    <div className = {styles.container}>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
