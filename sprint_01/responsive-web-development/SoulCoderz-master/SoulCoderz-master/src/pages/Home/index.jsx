import './style.css'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import HomeImg2 from '../../assets/img/HomeImg2.png'
import HomeImg3 from '../../assets/img/HomeImg3.png'
import { Carousel } from '../../components/Carousel'
import { FaArrowRight } from "react-icons/fa";

export default function Home() {

  return (
    <>
      <Menu />
      <section>
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <h1>Tenha <span>praticidade</span> no cotidiano👋</h1>
                <h2 className='title'>É para todos!</h2>
                <p className="main_info">As bicicletas são para todos, basta se cadastrar no site e ler o QR Code, <br /> De bike, São Paulo fica mais perto de você!!</p>
                <a href="#start" className="button">Veja mais <FaArrowRight className='arrow_icon' size={16} /></a>
              </div>
              <div className="col-2">
                <img src={HomeImg2} alt="Imagem da página home" />
              </div>
            </div>
          </div>
        </div>
        <div className='categories'>
          <div className='small-container'>
            <h2 id='start' className='sub-title'>Selecione o tamanho<br />que mais <span>combina com você</span></h2>
            <h3 className="type">Kids ou Adulto</h3>
            <Carousel />
            <h2 className='sub-title'>Libere sua bike em <br /><span>apenas 3 passos</span></h2>

            <h3 className='phases'>1. Cadastre-se na plataforma</h3>
            <h3 className='phases'>2. Aponte sua câmera para o <br /> QRCode presente em nossos pontos</h3>
            <h3 className='phases'>3. Pronto. Sua bike está liberada e <br /> pronto para uso</h3>

            <div className='row'>
              <div className='col-3'>
                <img src={HomeImg3} alt='Imagem de uma pessoa lendo um qr code' />
              </div>
            </div>
          </div>
        </div >
      </section >
      <Footer />
    </>
  )
}



