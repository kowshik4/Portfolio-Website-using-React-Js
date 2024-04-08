import React from 'react';

const Social = () => {
    return (
        <div className='home__social'>
            <a href="https://www.linkedin.com/in/kowshik-sai-133611140/" target='_blank' className='home__social-icon'>
                <i className='uil uil-linkedin-alt'></i>
            </a>

            <a href="https://github.com/kowshik4" target='_blank' className='home__social-icon'>
                <i class="uil uil-github-alt"></i>
            </a>

            <a href="https://www.instagram.com/" target='_blank' className='home__social-icon'>
                <i className='uil uil-instagram'></i>
            </a>
        </div>
    );
};

export default Social