import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProfileImg from "../assets/GOAT_selfie.jpeg"
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import { HashLink } from 'react-router-hash-link'
import resume from "../assets/Divyam_Vijay_CV.pdf"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [index, setIndex] = useState(1)
  const toRotate = ['MERN Stack Web Developer', 'Programmer', 'Video Editor']
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIndex(prevIndex => prevIndex - 1)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setIndex(1)
      setDelta(500)
    } else {
      setIndex(prevIndex => prevIndex + 1)
    }
  }

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='aligh-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <span className='tagline'>Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Divyam Vijay`}{' '}
                    <span
                      className='txt-rotate'
                      dataPeriod='500'
                      data-rotate='[ "MERN Stack Web Developer", "Programmer", "Video Editor" ]'
                    >
                      <span className='wrap'>{text}</span>
                    </span>
                  </h1>
                  <p>
                    I am currently pursuing my Bachelor of Technology (B.Tech)
                    degree in the prestigious <b>Mathematics and Computing</b>{' '}
                    branch at Delhi Technological University (DTU) , Delhi.
                    Throughout my academic journey, I developed a keen interest
                    in Data Structures and Algorithms and Web Development
                  </p>
                  <a href={resume} download class="btn btn2">My Resume</a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility> 
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img src={ProfileImg} alt='Header Img' class="my-image"/>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
