import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    DESIGNED AND DEVELOPED BY
                </p>
                <p className='footer-subscription-text'>
                    BabyYoda
                </p>
                <small class='website-rights'> © 2023</small>
            </section>
            <img src="grogu.png" alt="grogu" className='footer-pic' />
        </div>
    )
}

export default Footer
