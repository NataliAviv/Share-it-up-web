import React, { useEffect } from 'react';
import './App.css';
import { login } from './ServerApi';
import Routing from './routes/Routing';
function App() {
  useEffect(() => {
    let user = {
      user: {
        email: 'natali.aviv162@gmail.com',
        password: '12321'
      }
    };
    login(user).then(res => console.log(res));
  }, []);

  return (
    <div className='App'>
      <Routing />
    </div>
  );
}

export default App;
