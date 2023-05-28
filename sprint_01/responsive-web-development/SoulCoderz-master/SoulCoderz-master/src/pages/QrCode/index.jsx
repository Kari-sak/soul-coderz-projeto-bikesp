import './style.css'
import Menu from '../../components/Menu'
import { useEffect, useState } from "react"
import { FaCamera } from "react-icons/fa";
import { api } from '../../lib/axios';

export default function QrCode() {
  const user = sessionStorage.getItem('user')

  useEffect(() => {
    if (!user) {
      window.location = '/login'
    }
  }, [])

  const [serial, setSerial] = useState('')
  const [isSerialWrong, setIsSerialWrong] = useState(false)
  const [isSerialDone, setIsSerialDone] = useState(false)
  async function handleSerial(event) {
    event.preventDefault()


    const bikeSerials = await api.get('/bicicleta')
      .then(response => response.data)
      .catch(error => console.log(error))
    const bike = bikeSerials.find(bikeSerial => bikeSerial.serial === serial)
    if (bike) {
      setIsSerialDone(true)
    } else {
      setIsSerialWrong(true)
    }
  }

  return (
    <>
      {
        user && (
          <>
            <Menu />
            <h2 className='qrcode_title'>Escaneie o <span>QR Code</span> ou<br /> digite o <span>Serial</span> e tenha acesso a sua bike</h2>
            <div className="qrcode_row">
              <div className="main_code">
                <form onSubmit={event => handleSerial(event)}>
                  <div className="title_code">Insira o Serial </div>
                  <div className="qrcode_box underline">
                    <input type="text" placeholder="AA0000000" required value={serial} onChange={event => {
                      setSerial(event.target.value)
                      setIsSerialDone(false)
                      setIsSerialWrong(false)
                    }} />
                    <div className="underline"></div>
                  </div>
                  {
                    isSerialWrong &&
                    <span className='alert'>Serial inválido</span>
                  }
                  {
                    isSerialDone &&
                    <span>Bike alugada com sucesso</span>
                  }
                  <input type='submit' value='Ler Serial' className='button_qrcode' />
                  <p className='paragraph_qrcode'>----------------ou----------------  <br />Escaneiei o código QR</p> <br />
                  <input type="file" id='file_input' />
                  <label htmlFor="file_input"><FaCamera className='camera_icon' />Escanear QR Code</label>
                </form>
              </div>
            </div>
          </>
        )
      }
    </>
  )
}