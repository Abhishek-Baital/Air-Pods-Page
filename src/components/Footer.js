import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>

    <div className='content'>
        <div>
        <h5>Free Delivery and PickUp</h5>
        <p>Get free delivery or pickup <br/> at your Apple Store.</p>
        </div>

        <div>
        <h5>Ways to Buy</h5>
        <p>Choose the way that's right <br/> for you.</p>
        </div>

        <div>
        <h5>Get help Buying</h5>
        <p>Have a question? <br/> Call a Specialist or chat online.<br/> Call 000800 040 1966</p>
        </div>

        <div>
        <h5>Make them yours</h5>
        <p>Engrave your AirPods with your <br/> initials or favourite emoji — free.<br/>Only at Apple.</p>
        </div>
    </div>

    <div className='points'>
        <ol>
            <li>Works with AirPods Pro (2nd generation) with the latest firmware when paired with a compatible Apple device running the latest operating system software.</li>
            <li>Precision Finding requires a U1-equipped iPhone; availability varies by region.</li>
            <li>Find My functionality requires iOS 16 or later.</li>
            <li>Lanyard is sold separately</li>
            <li>Siri may not be available in all languages or in all regions, and features may vary by region. Compatible device and Internet access are required. Cellular data charges may apply.</li>
        </ol>
    </div>

    <div className='foot'>
        <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
    </div>

    </>
  )
}

export default Footer