import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Search from "../components/Search";
import Download from "../components/Download";

const LandingPage = () => {
  return (
    <main className="text-white overflow-hidden">
      <Hero />
      <Experience />
      <Search />
      <Download />
    </main>
  );
};

export default LandingPage;
