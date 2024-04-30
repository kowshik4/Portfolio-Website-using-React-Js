import React from 'react';

const Info = () => {
    return (
        <div className='about__info grid'>
            <div className='about__box'>
            <i class='bx bx-award about__icon' ></i>

                <h3 className='about__title'>Experience</h3>
                <span className='about__subtitle'>2+ years</span>
            </div>
            
            <div className='about__box'>
            <i class='bx bx-briefcase about__icon'></i>

                <h3 className='about__title'>Projects</h3>
                <span className='about__subtitle'>4</span>
            </div>

            <div className='about__box'>
            <i class='bx bx-buildings about__icon'></i>

                <h3 className='about__title'>Companies</h3>
                <span className='about__subtitle'>2</span>
            </div>
        </div>
    )
}

export default Info