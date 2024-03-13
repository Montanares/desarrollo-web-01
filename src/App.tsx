import { useState } from 'react';
import './App.css';
import DisplayData from './components/display-data';

function App() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const handleChangeName = (event: any) => {
    setName(event.target.value)
  }
  const handleChangePassword = (event: any) => {
    setPassword(event.target.value)
  }
  const handleChangeEmail = (event: any) => setEmail(event.target.value)
  const handleClickLogin = () => {
    console.log('iniciar', name, password)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="App">
            <input type="text" placeholder="escriba nombre" value={name} onChange={handleChangeName} className='form-control' />
            <input type="password" placeholder='escriba contraseña' value={password} onChange={handleChangePassword} className='form-control' />
            <input type="email" value={email} onChange={handleChangeEmail} className='form-control'/>
            <button onClick={handleClickLogin} className='btn btn-primary'>Iniciar Sesión</button>
          </div>
        </div>
      </div>
      <DisplayData />
    </div>
  );
}

export default App;
