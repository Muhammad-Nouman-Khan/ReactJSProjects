import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Cards/Card";
import { posts } from "./constants";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
      <span className="user">Noman</span>
    </div>
  );
};

export default App;
