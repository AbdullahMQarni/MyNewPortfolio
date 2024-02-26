import './App.css';
import AboutSection from './components/AboutSection/AboutSection';
import ContactUs from './components/ContatctUs/Contatct';
import Welcoming from './components/Welcoming/Welcoming';
import Header from './components/header/Header'

function App() {
  return (
    <>
      <div className='section'>
        <Header />
        <Welcoming />
        <AboutSection />
        <ContactUs />
      </div>
    </>
  );
}

export default App;
