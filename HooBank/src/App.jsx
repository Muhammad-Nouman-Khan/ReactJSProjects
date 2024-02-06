import styles from "./App.module.css";
import {Navbar,Hero,Business,Billing} from "./index"

function App() {

  return (
    <div className = {styles.container}>
      <Navbar />
      <Hero />
      <Business />
      <Billing />
    </div>
  )
}

export default App
