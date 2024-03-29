import './App.css';
import AboutSection from './components/AboutSection/AboutSection';
import ContactUs from './components/ContatctUs/Contatct';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Welcoming from './components/Welcoming/Welcoming';
import Header from './components/header/Header'

function App() {
  return (
    <>
      <div className='section'>
        <Header />
        <Welcoming />
        <AboutSection />
        <Projects />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;