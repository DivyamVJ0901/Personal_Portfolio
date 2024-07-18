import { Container, Row, Col } from 'react-bootstrap'
import { MailchimpForm } from './MailchimpForm'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import imgFooter from '../assets/img/img-Photoroom.png'

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <div className='footer-section'>
              <img src={imgFooter} className='footer-img'></img>
            <div className='text-center text-sm-end footer-logos'>
              <div className='social-icon'>
                <a href='https://www.linkedin.com/in/divyam-vijay-597768233/'>
                  <img src={navIcon1} alt='Icon' />
                </a>
                <a href='https://github.com/DivyamVJ0901'>
                  <img src={navIcon2} alt='Icon' />
                </a>
                <a href='https://www.instagram.com/divyam.vj_18/?hl=en'>
                  <img src={navIcon3} alt='Icon' />
                </a>
              </div>
              <p>Designed and Developed by Divyam Vijay © All Rights Reserved</p>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  )
}
