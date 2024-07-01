import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Section from './components/section/Section'
import Hero from './components/hero/Hero'
import Faq from './components/faq/Faq'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
        <Hero />
        <Section
          title="Enjoy on your TV"
          description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
          imageUrl="section3.png"
        />
        <Section
          title="Download your shows to watch offline"
          description="Save your favorites easily and always have something to watch."
          imageUrl="section.jpg"
          isReverse={true}
        />
        <Section
          title="Watch everywhere"
          description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          imageUrl="section2.png"
        />
        <Faq/>
        <Footer />
    </>
  );
}

export default App;
