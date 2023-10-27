import SignIn from './component/SignIn';
import './App.css';
import SignUp from '../src/component/signUp/index';
import React , {useState} from 'react';
function App() {


  const [isSignUp, setIsSignUp] = useState(false);

  const handleBtn = (props) => {
    setIsSignUp(props);
  };


  return (
    <>
    {isSignUp ? <SignUp handleBtn = {handleBtn}/> : <SignIn handleBtn = {handleBtn} /> }
    </>
  );
}

export default App;
