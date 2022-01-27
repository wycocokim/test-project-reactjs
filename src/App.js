import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Button cname="btn">Start</Button>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
