import './App.css';
import CoinSelect from './components/CoinSelect';
import backgroundVideo from './assets/backgroundVideo.mp4'
import logo from "./assets/logo.svg"


function App() {
  return (
    <div >
      <video autoPlay loop muted className='video' >
        <source src={backgroundVideo} type='video/mp4' />
      </video>
      <div className='logo' >
        <img src={logo} height={"200px"} />
      </div>

      <div className="container">

        <CoinSelect />
      </div>
    </div>
  );
}

export default App;
