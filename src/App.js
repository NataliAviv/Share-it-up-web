import React,{useEffect} from 'react';
import './App.css';
import { login } from './ServerApi';
import RouterApp from './RouterApp';
function App() {

useEffect(() => {
  let user= {"user":{
    "email":"natali.aviv162@gmail.com",
    "password":"12321"
    }
    }
login(user).then((res)=>console.log(res))
 
}, [])

  return (
    <div className="App">
    <RouterApp/>
    </div>
  );
}

export default App;
