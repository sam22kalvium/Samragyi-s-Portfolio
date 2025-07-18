import { ThemeProvider } from './hooks/useTheme';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import OpenSource from './components/OpenSource';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContent = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <OpenSource />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;