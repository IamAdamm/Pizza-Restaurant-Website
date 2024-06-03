import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/Footer.css';


function footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <InstagramIcon /> <XIcon /> <FacebookIcon /> <LinkedInIcon />
        </div>
        <p> &copy; 2021 adamtechpizza.com </p>
    </div>
  );
};

export default footer