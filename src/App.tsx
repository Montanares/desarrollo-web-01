import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const handleChangeName = (event: any) => {
    setName(event.target.value)
  }
  const handleChangePassword = (event: any) => {
    setPassword(event.target.value)
  }
  const handleClickLogin = () => {
    console.log('iniciar', name, password)
  }

  return (
    <div className="App">
      <input type="text" value={name} onChange={handleChangeName} className='form-control'/>
      <input type="password" value={password} onChange={handleChangePassword} className='form-control'/>
      <button onClick={handleClickLogin} className='btn btn-primary'>Iniciar Sesión</button>
    </div>
  );
}

export default App;
