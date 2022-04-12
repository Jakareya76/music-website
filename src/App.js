import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import "./App.css";

function App() {
  return (
    <div className="text-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Experience />
      </main>
    </div>
  );
}

export default App;
