import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import '../../pages/Home/style.css'

import ImgAdult from '../../assets/img/ImgAdult.jpg'
import ImgKids from '../../assets/img/ImgKids.png'

export function Carousel() {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      spaceBetween={10}
      pagination={{ clickable: true }}
      breakpoints={{
        1024: {
          slidesPerView: 1,
          spaceBetween: 32
        }
      }}
    >
      <SwiperSlide>
        <div className='row'>
          <div className='col-3'>
            <img src={ImgKids} alt='Imagem de uma criança andando de bicicleta' />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='row'>
          <div className='col-3'>
            <img src={ImgAdult} alt='Imagem de um adulto andando de bicicleta' />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
