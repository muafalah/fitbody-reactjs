import React from 'react'
import HeroImg from '../../assets/img/gym-02.png'
import DumbleIcon from '../../assets/img/dumble.png'
import '../../styles/hero.css'

const Hero = () => {
    return (
        <section id='hero'>
            <div className='container'>
                <div className='hero__wrapper'>
                    {/* ===== Hero Content ===== */}
                    <div className='hero__content'>
                        <h2 className='section__title' data-aos='fade-up' data-aos-duration='1500'>Exercise is the key to a <span className='highlights'>Healthy</span> Lifestyle</h2>
                        <p data-aos='fade-up' data-aos-delay='100' data-aos-duration='1800'>
                            Lorem ipsum dolor sit amet consctetur, adpisicing elit.<br />
                            Laboratorium repellendus odit fugit eos! Id, labore.
                        </p>
                        <div className='hero__btns' data-aos='fade-up' data-aos-delay='200' data-aos-duration='2000'>
                            <button className='register__btn'>Get Started</button>
                            <button className='watch__btn'><span><i className='ri-play-fill'></i></span> Watch Video</button>
                        </div>
                    </div>
                    {/* ===== Hero Img ===== */}
                    <div className='hero__img'>
                        <div className='hero__img-wrapper'>
                            <div className='box-01'>
                                <div className='box-02'>
                                    <div className='box-03'>
                                        <div className='box__img'>
                                            <img src={HeroImg} alt='hero-img' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='heart__rate' data-aos='fade-right' data-aos-duration='1500'>
                                <h5>Heart Rate</h5>
                                <span><i className='ri-heart-pulse-fill'></i></span>
                                <h6>2567 BPM</h6>
                            </div>
                            <div className='gym__location' data-aos='fade-left' data-aos-duration='1500'>
                                <span><i className='ri-map-pin-2-fill'></i></span>
                                <h5>Find a new <br />gym near you</h5>
                            </div>
                            <div className='dumble__icon' data-aos='fade-down' data-aos-duration='1500'>
                                <img src={DumbleIcon} alt='dumble-icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero