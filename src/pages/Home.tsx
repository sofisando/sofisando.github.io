import Navbar from "../components/Navbar";
import About_me from "../components/About_me";
import Proyects from "../components/Projects";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="py-2" />
      <Navbar />
      <About_me />
      <Proyects />
      <Footer />
    </>
  );
}

export default Home;