import styles from "./App.module.css";
import {Navbar,Hero,Business,Billing,Card,Feedback,Footer} from "./index"

function App() {

  return (
    <div className = {styles.container}>
      <Navbar />
      <Hero />
      <Business />
      <Billing />
      <Card />
      <Feedback />
      <Footer />
    </div>
  )
}

export default App
