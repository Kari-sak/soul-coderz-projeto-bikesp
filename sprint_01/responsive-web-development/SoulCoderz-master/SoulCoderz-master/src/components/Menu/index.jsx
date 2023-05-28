import { Link } from 'react-router-dom'
import './style.css'

export default function Menu() {
  const user = sessionStorage.getItem('user')

  function handleLogout() {
    sessionStorage.removeItem('user')
    window.location = '/'
  }
  return (
    <header>
      <nav>
        <ul>
          {
            window.location.pathname !== '/' &&
            <li><Link to='/'>Home</Link></li>
          }
          <li><Link to='/criarponto'>Criar Ponto</Link></li>
          <li><Link to='/qrcode'>Ler QR Code</Link></li>
          {
            !user ?
              <li><Link to='/login'>Login</Link></li> :
              <li><button onClick={handleLogout}>Logout</button></li>
          }
        </ul>
      </nav>
    </header>
  )
}

