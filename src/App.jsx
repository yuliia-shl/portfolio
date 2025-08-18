import "./App.css";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Contact />
      </main>
    </>
  );
}

export default App;
