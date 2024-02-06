import styles from "./App.module.css";
import {Navbar,Hero,Business,Billing,Card,Feedback} from "./index"

function App() {

  return (
    <div className = {styles.container}>
      <Navbar />
      <Hero />
      <Business />
      <Billing />
      <Card />
      <Feedback />
    </div>
  )
}

export default App
