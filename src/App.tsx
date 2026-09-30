import Footer from "./Footer";
import Navbar from "./Navbar";
import Proyect from "./Proyect";
import "./App.css"
import About_me from "./About_me";

function App() {
  return (
    <div className="relative min-h-screen">

      {/* 🌈 FONDO GLOBAL */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="lava lava-1"></div>
        <div className="lava lava-2"></div>
        {/* <div className="lava lava-3"></div> */}
      </div>

      {/* 📦 TU APP */}
      <div id="root" className="relative z-10">
        <Navbar />
        <About_me/>
        <Proyect />
        <Footer />
      </div>

    </div>
  );
}

export default App;
