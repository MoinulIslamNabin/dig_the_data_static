import "./App.css";
import Navbar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Intro from "./Components/Intro/Intro";
import Event from "./Components/Event/Event";
import Previous from "./Components/Previous/Previous";
import Legacy from "./Components/Legacy/Legacy";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Event />
      <Previous />
      <Legacy />
    </>
  );
}

export default App;
