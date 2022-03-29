import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
        <Featured/>
        <Signup/>
        <Footer/>
    </div>
  );
}

export default App;
