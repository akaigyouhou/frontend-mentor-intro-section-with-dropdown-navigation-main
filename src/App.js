import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Hero />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
