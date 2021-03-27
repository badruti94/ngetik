import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import KeyboardEventHandler from 'react-keyboard-event-handler';

const Header = () => {
  return (
    <div className="header" >
      <p>Ini header</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="footer" >
      <p><a target="_blank" href="https://fb.com/badru.saja.58">Ailce Violet</a>. Ini Footer</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div >
  );
}

export default App;
