import Menu from '../../components/Menu'
import Point from '../../components/Point'
import { useEffect, useState } from "react"
import { HiOutlineZoomIn } from "react-icons/hi";
import { CgSearch } from "react-icons/cg";
import { api } from '../../lib/axios';
import './style.css'


export default function CriarPonto() {

  const user = sessionStorage.getItem('user')

  useEffect(() => {
    if (!user) {
      window.location = "/login"
    }
    makeRequest()
  }, [])

  const [points, setPoints] = useState([])
  async function makeRequest() {
    const bikePoints = await api.get('/ponto')
      .then(response => response.data)
      .catch(error => console.log(error))
    setPoints(bikePoints.map(point => {
      return {
        ...point,
        address: point.endereco,
      }
    }))
  }

  const [address, setAddress] = useState('')
  async function handleAddPoint(event) {
    event.preventDefault()

    await api.post('/ponto', {
      "endereco": address,
      "usuario": user
    })
    setAddress('')
  }
  return (
    <>
      {
        user && (
          <main className='page_criar_ponto'>
            <Menu />
            <h2 className='point_title' id='point_title'>Adicionar ponto</h2>
            <form className="input_box_point" onSubmit={event => handleAddPoint(event)}>
              <div className='icon_input'>
                <HiOutlineZoomIn className='magnifying_glass_icon' size={22} />
                <input type="text" placeholder="Insira o endereço completo" required value={address} onChange={event => setAddress(event)} />
              </div>
              <input type='submit' value='Adicionar' className='button_point' />
            </form>
            <h2 className='point_title'>Pesquisar pontos</h2>
            <form className="input_box_point">
              <div className='icon_input'>
                <CgSearch className='magnifying_glass_icon' size={22} />
                <input type="text" placeholder="Insira o endereço completo" required />
              </div>
              <input type="submit" className='button_point' />
            </form>
            <div className="point_list">
              {
                points.length !== 0 ?
                  points.map(point => {
                    return (
                      <Point key={point.id} address={point.address} amountKids={point.amountKids ? point.amountKids : '0'} amountAdult={point.amountAdult ? point.amountAdult : '0'} />
                    )
                  }) :
                  <span>Carregando...</span>
              }
            </div>
          </main>
        )}
    </>
  )
}

