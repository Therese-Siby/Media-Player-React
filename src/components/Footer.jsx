import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <div style={{ height: '300px' }} className='mt-5 container w-100'>
        <div className='d-flex justify-content-between'>
          {/* Intro */}
          <div style={{ width: '400px' }}>
            <h5><i class="fa-solid fa-music me-3" ></i>
              Media Player</h5>
            <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
            <p>Code licensed MIT, docs CC BY 3.0.</p>
            <p>Currently v5.3.3.</p>
          </div>
          {/* Links */}
          <div className='d-flex-column'>
            <h5>Links</h5>
            <Link to={'./'} style={{ textDecoration: 'none', color: 'white' }}>Landing Page</Link><br />
            <Link to={'./'} style={{ textDecoration: 'none', color: 'white' }}>Home Page</Link><br />
            <Link to={'./'} style={{ textDecoration: 'none', color: 'white' }}>History Page</Link><br />
          </div>
          {/* Guides */}
          <div className='d-flex-column'>
            <h5>Guides</h5>
            <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>React</a><br />
            <a href="https://react-bootstrap.netlify.app/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>React-bootstrap</a><br />
            <a href="https://reactrouter.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>React router</a>
          </div>
          {/* Contact */}
          <div className='d-flex-column'>
            <h5>Contacts</h5>
            <div className='d-flex'>
              <input type="text" placeholder='Enter your email here..' className='form-control me-2' />
              <button className='btn btn-info'><i class="fa-sharp fa-solid fa-arrow-right"></i></button>
            </div>
            <div className='d-flex justify-content-between mt-3'>
              <a href="https://www.instagram.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-instagram"></i></a>
              <a href="https://www.facebook.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-facebook"></i></a>
              <a href="https://www.linkedin.com/feed/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/dashboard" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-github"></i></a>
              <a href="https://x.com/?lang=en&mx=2" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-twitter"></i></a>
              <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-solid fa-phone"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer