import React from 'react'
import './Image.css'

const Image = () => {
  return (
    <>
        <img className='airpods'
        src="https://www.apple.com/v/airpods-pro/i/images/overview/case_front__r6ng7f1x18a6_large_2x.png"
        alt="airpods"
        />

        <h4 className='des'>The U1 chip enables Find My with <br/>
        Precision Finding7 for your case, so you<br/>
         can locate it exactly. You can also use<br/> 
         Find My with proximity view if you lose<br/>
          track of your AirPods Pro.8</h4>

        <img className='airpods'
        src="https://www.apple.com/v/airpods-pro/i/images/overview/case_closed__fn3wuwvygjau_large_2x.png"
        alt="case"
        />

        <h4 className='des'>Both AirPods Pro and the MagSafe<br/>
         Charging Case4 are IP54 dust, sweat and<br/>
          water resistant.10
        </h4>
    </>
  )
}

export default Image