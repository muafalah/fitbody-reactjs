import React from 'react'
import '../../styles/testimonials.css'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-cards"
import { EffectCards } from "swiper"
import Avatar01 from '../../assets/img/avatar01.png'
import Avatar02 from '../../assets/img/avatar02.png'

const Testimonials = () => {
    return (
        <section>
            <div className='container sliders'>
                <h2 className='section__title' data-aos='fade-up' data-aos-delay='300' data-aos-duration='1500'>Testimonials</h2>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                    data-aos='zoom-in' data-aos-duration='1500'
                >
                    <SwiperSlide>
                        <div className='slide__item'>
                            <div className='slide__img-01'>
                                <img src={Avatar01} alt='avatar-01' />
                            </div>
                            <h4>Jessica Fernandes</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Expedita corrupti delectus repudiandae incidunt et nihil
                                quo rem placeat earum. Magni maiores minima velit labore
                                dolor rerum! Ex eveniet atque ilum.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide__item'>
                            <div className='slide__img-02'>
                                <img src={Avatar02} alt='avatar-02' />
                            </div>
                            <h4>Jessica Fernandes</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Expedita corrupti delectus repudiandae incidunt et nihil
                                quo rem placeat earum. Magni maiores minima velit labore
                                dolor rerum! Ex eveniet atque ilum.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide__item'>
                            <div className='slide__img-03'>
                                <img src={Avatar01} alt='avatar-01' />
                            </div>
                            <h4>Jessica Fernandes</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Expedita corrupti delectus repudiandae incidunt et nihil
                                quo rem placeat earum. Magni maiores minima velit labore
                                dolor rerum! Ex eveniet atque ilum.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials