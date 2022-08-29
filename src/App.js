import './App.css';
import {Header} from './components/Header.js';
import {Body} from './components/Body/Body.js';
import {useState, useEffect} from 'react'


function App() {
  const [registerVisibility, setRegisterVisibility] = useState(false)

  const handleRegisterVisibility = () => {
    setRegisterVisibility(registerVisibility=>registerVisibility = !registerVisibility)
  }

  useEffect(() => {
    console.log(registerVisibility);
  },[registerVisibility])

  return (
    <div className="App">
      <Header></Header>
      <Body handleRegisterVisibility={handleRegisterVisibility}
      registerVisibility={registerVisibility}>

      </Body>
    </div>
  );
}

export default App;
