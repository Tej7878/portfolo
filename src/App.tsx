import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Contact } from "./components/Contact";
import { Cursor } from "./components/Cursor";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Loader } from "./components/Loader";
import { Marquee } from "./components/Marquee";
import { Nav } from "./components/Nav";
import { Practice } from "./components/Practice";
import { Work } from "./components/Work";

export default function App() {
  const [booting, setBooting] = useState(true);

  return (
    <>
      <div className="noise" />
      <Cursor />
      <AnimatePresence>{booting && <Loader onDone={() => setBooting(false)} />}</AnimatePresence>
      {!booting && (
        <>
          <Nav />
          <main>
            <Hero />
            <Marquee />
            <Work />
            <Practice />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
