import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section className='contact section' id='contact'>
            <h2 className='section__title'>Contact Me</h2>
            <span className='section__subtitle'>Get in touch</span>

            <div className='contact__container container grid'>
                <div className='contact__content'>
                    <h3 className='contact__title'>Talk to me</h3>

                    <div className='contact__info'>
                        <div className='contact__card'>
                            <i className='bx bx contact__card-icon'></i>

                            <div>
                                <h3 className='contact__card-title'>Call Me</h3>
                                <span className='contact__card-data'>+1 234 567 890</span>

                                <a href='#' className='contact__button'>Write me{" "}
                                <i className='bx bx-right-arrow-alt conatct__button-icon'></i></a>
                            </div>
                        </div>

                        <div className='contact__card'>
                            <i className='bx bx contact__card-icon'></i>

                            <div>
                                <h3 className='contact__card-title'>Email</h3>
                                <span className='contact__card-data'>kowshikmosalakanti@gmail.com</span>

                                <a href='mailto:kowshikmosalakanti@gmail.com' 
                                className='contact__button'>
                                    Write me{" "}
                                <i className='bx bx-right-arrow-alt conatct__button-icon'></i></a>
                            </div>
                        </div>

                        <div className='contact__card'>
                            <i className='bx bx contact__card-icon'></i>

                            <div>
                                <h3 className='contact__card-title'>Whatsapp</h3>
                                <span className='contact__card-data'>+1 234 567 890</span>

                                <a href='#' 
                                className='contact__button'>
                                    Write me{" "}
                                <i className='bx bx-right-arrow-alt conatct__button-icon'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact__content'>
                    <h3 className='contact__title'></h3>
                </div>
            </div>
            
        </section>
    );
}

export default Contact;