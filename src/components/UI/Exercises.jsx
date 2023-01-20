import React from 'react'
import '../../styles/exercises.css'
import LungesImg from '../../assets/img/lunges.png'
import YogaPoseImg from '../../assets/img/yoga-pose.png'
import ExtendedImg from '../../assets/img/extended.png'

const Exercises = () => {
    return (
        <section id='schedule'>
            <div className='container exercise__container'>
                <div className='exercise__top' data-aos='fade-up' data-aos-delay='300' data-aos-duration='1500'>
                    <h2 className='section__title'>Benefits of <span className='highlights'>Exercise</span></h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing <br />
                        elit. Error quidem, nam nihil expedita atque modi?
                    </p>
                </div>
                {/* ===== Exercise List ===== */}
                <div className='exercise__wrapper'>
                    <div className='exercise__item' data-aos='zoom-in' data-aos-duration='1500'>
                        <span className='exercise__icon'>
                            <img src={LungesImg} alt='lunges-img' />
                        </span>
                        <div className='exercise__content'>
                            <h4>Healthy Life</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Aliquam iure, animi consectetur iste alias beatae?
                            </p>
                        </div>
                    </div>
                    <div className='exercise__item' data-aos='zoom-in' data-aos-duration='1500'>
                        <span className='exercise__icon'>
                            <img src={YogaPoseImg} alt='yoga-pose-img' />
                        </span>
                        <div className='exercise__content'>
                            <h4>Increased Flexibility</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Aliquam iure, animi consectetur iste alias beatae?
                            </p>
                        </div>
                    </div>
                    <div className='exercise__item' data-aos='zoom-in' data-aos-duration='1500'>
                        <span className='exercise__icon'>
                            <img src={ExtendedImg} alt='extended-img' />
                        </span>
                        <div className='exercise__content'>
                            <h4>Reducing Bloog Pressure</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Aliquam iure, animi consectetur iste alias beatae?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Exercises