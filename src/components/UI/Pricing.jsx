import React from 'react'
import '../../styles/pricing.css'

const Pricing = () => {
    return (
        <section id='pricing'>
            <div className='container'>
                <div className='pricing__top' data-aos='fade-up' data-aos-delay='300' data-aos-duration='1500'>
                    <h2 className='section__title'>Gym <span className='highlights'>Pricing</span> Plan</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipicising <br />
                        elit.Omnis asperiores, rem voluptatum sit in ratione.
                    </p>
                </div>
                {/* ===== Pricing Wrapper ===== */}
                <div className='pricing__wrapper'>
                    <div className='pricing__item' data-aos='fade-up' data-aos-duration='1500'>
                        <div className='pricing__card-top'>
                            <h2 className='section__title'>Regular Member</h2>
                            <h2 className='pricing section__title'>$50 <span>/month</span></h2>
                        </div>
                        <div className='services'>
                            <ul>
                                <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Unlimited access to the gym</li>
                                <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Customer support</li>
                                <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Personal trainer</li>
                                <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Standard options</li>
                                <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> 5 classes per week</li>
                            </ul>
                            <button className='register__btn'>Join Now</button>
                        </div>
                    </div>

                    <div className='pricing__item pricing__item-02' data-aos='fade-up' data-aos-duration='1800'>
                        <div className='pricing__card-top'>
                            <h2 className='section__title'>Premium Member</h2>
                            <h2 className='pricing section__title'>$70 <span>/month</span></h2>
                        </div>
                        <div className='services'>
                            <ul>
                                <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Unlimited access to the gym</li>
                                <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Customer support</li>
                                <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Personal trainer</li>
                                <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Standard options</li>
                                <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> 5 classes per week</li>
                            </ul>
                            <button className='register__btn'>Join Now</button>
                        </div>
                    </div>

                    <div className='pricing__item' data-aos='fade-up' data-aos-duration='2000'>
                        <div className='pricing__card-top'>
                            <h2 className='section__title'>Standard Member</h2>
                            <h2 className='pricing section__title'>$100 <span>/month</span></h2>
                        </div>
                        <div className='services'>
                            <ul>
                                <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Unlimited access to the gym</li>
                                <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Customer support</li>
                                <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Personal trainer</li>
                                <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Standard options</li>
                                <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> 5 classes per week</li>
                            </ul>
                            <button className='register__btn'>Join Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing