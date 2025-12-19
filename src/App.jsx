import "./App.css";
import Skills from "./components/Skills/Skills";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Contacts />
    </>
  );
}

export default App;
