import { Link } from 'react-router-dom'
import { useState } from "react"
import { FaLock, FaUserCircle } from "react-icons/fa";
import './style.css'
import Menu from '../Menu';
import { api } from '../../lib/axios';

export default function Login() {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [isLoginOrPasswordWrong, setIsLoginOrPasswordWrong] = useState(false)
  async function handleLogin(event) {
    event.preventDefault()

    let user = await api.get(`/usuario/${login}`)
      .then(response => response.data)
      .catch(error => {
        console.log(error)
      })
    user = {
      id: user.id,
      name: user.nome,
      login: user.login,
      email: user.email,
      password: user.senha
    }
    if (user.login === login && user.password === password) {
      sessionStorage.setItem('user', user.login)
      window.location = '/'
    } else {
      setIsLoginOrPasswordWrong(true)
    }
  }

  return (
    <>
      <Menu />

      <body className='login_body'>
        <div className="main_login">
          <form onSubmit={event => handleLogin(event)}>
            <div className="title_login">Login</div>
            <div className="input_box underline">
              <FaUserCircle size={18} />
              <input type="text" placeholder="Insira seu login" required id="login" value={login} onChange={event => {
                setIsLoginOrPasswordWrong(false)
                setLogin(event.target.value)
              }} />
              <div className="underline"></div>
            </div>
            <div className="input_box">
              <FaLock size={18} />
              <input type="password" placeholder=" Insira sua senha" required value={password} onChange={event => {
                setIsLoginOrPasswordWrong(false)
                setPassword(event.target.value)
              }} />
              <div className="underline"></div>
            </div>
            {
              isLoginOrPasswordWrong &&
              <span className='alert'>Login ou senha incorretos</span>
            }
            <input type='submit' value='Entrar' className='button_login' />
            <Link to="/registrar">
              <p className='paragraph_login' >Ainda não possui conta? <br /> Clique aqui e registre-se</p>
            </Link>
          </form>
        </div>
      </body>
    </>
  )
}