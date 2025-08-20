import React from 'react'
import {BsTwitter , BsInstagram} from 'react-icons/bs'
import {FaFacebookF , FaLinkedinIn , FaGithub } from 'react-icons/fa'

function SocialMedia() {
  return (
    <div className='app__social'>
     <a href='https://www.linkedin.com/in/lujain-alsasa-9476a7231/'>
         <div>
            <FaLinkedinIn/>
        </div>
     </a>
     <a href='https://github.com/lujain04'>
        <div>
            <FaGithub/>
        </div>
        </a>
        <a href='https://www.instagram.com/lujain_al_sasa?igsh=aWtxa2hqcWdqcDNu'>
        <div>
            <BsInstagram/>
        </div>
        </a>
    </div>
  )
}

export default SocialMedia