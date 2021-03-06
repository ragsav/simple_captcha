import logo from './logo.svg';
import './App.css';
import Captcha from "./components/captcha";
import { useEffect, useState } from "react";

function App() {

  const [isBot, setIsBot] = useState(true);
  useEffect(() => {
    console.log(isBot);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Captcha specialChar={true} isBot={setIsBot}></Captcha>
      </header>
    </div>
  );
}

export default App;
