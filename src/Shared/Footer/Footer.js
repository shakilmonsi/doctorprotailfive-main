import React from 'react'
import footer  from "../../assets/images/footer.png"
function Footer() {

  return (
    <footer 
    style={{
      background:`url(${footer})`,
      backgroundSize: 'cover'
    }}
     className="footer p-8">
    
    <div className='footer '>
    <nav>
      <header className="footer-title">Services</header> 
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </nav> 
    <nav>
      <header className="footer-title">Company</header> 
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav> 
    <nav>
      <header className="footer-title">Legal</header> 
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>
    </div>
  </footer>
  )
}

export default Footer