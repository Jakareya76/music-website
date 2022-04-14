import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Search from "./components/Search";
import "./App.css";

function App() {
  return (
    <div className="text-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Search />
      </main>
    </div>
  );
}

export default App;
