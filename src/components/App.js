
import { Outlet } from 'react-router-dom'
import './App.css';
import Home from './Home';
import Title from './Title';
import Footer from './Footer';
import './Footer.css';


function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
