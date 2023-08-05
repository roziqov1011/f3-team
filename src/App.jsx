
import './App.scss';
import Book from './components/Book/Book';
import Customer from './components/Customer/Customer';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Map from './components/Map/Map';
import Memories from './components/Memories/Memories';
import Subscribe from './components/Subscribe/Subscribe';
import Travelars from './components/Travelars/Travelars';
// import map from './img/Group (1).svg'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Features/>
      <Book/>
      <Travelars/>
      <Customer/>
      <Memories/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
