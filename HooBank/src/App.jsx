import styles from "./App.module.css";
import {Navbar,Hero,Business,Button} from "./index"

function App() {

  return (
    <div className = {styles.container}>
      <Navbar />
      <Hero />
      <Business />
    </div>
  )
}

export default App
