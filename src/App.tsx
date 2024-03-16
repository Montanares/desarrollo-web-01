import { useState } from 'react';
import './App.css';
import DisplayData from './components/display-data';

function App() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [users, setUsers] = useState<any[]>([])
  const handleChangeName = (event: any) => {
    setName(event.target.value)
  }
  const handleChangePassword = (event: any) => {
    setPassword(event.target.value)
  }
  const handleChangeEmail = (event: any) => setEmail(event.target.value)
  const handleClickAddUser = () => {
    const user = {
      name: name,
      password: password,
      email: email
    }
    // console.log(user)
    const newUsers = users
    newUsers.push(user)
    setUsers(newUsers)
    // console.log(users)
    setName('')
    setPassword('')
    setEmail('')

  }
  const disableButtonAddUser = () => {
    if(name === '' || password === '' || email === ''){
      return true
    }
    return false
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="App">
            <input type="text" placeholder="escriba nombre" value={name} onChange={handleChangeName} className='form-control' />
            <input type="password" placeholder='escriba contraseña' value={password} onChange={handleChangePassword} className='form-control' />
            <input type="email" value={email} onChange={handleChangeEmail} className='form-control'/>
            <button onClick={handleClickAddUser} className='btn btn-primary' disabled={disableButtonAddUser()} >Agregar Usuario</button>
          </div>
        </div>
      </div>
      <DisplayData users={users} />
    </div>
  );
}

export default App;
