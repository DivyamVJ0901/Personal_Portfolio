import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import projImg1 from '../assets/img/StudyNotion.png'
import projImg2 from '../assets/img/Ecomzy.png'
import projImg3 from '../assets/img/Weather_App.png'
import projImg4 from '../assets/img/project-img-4.png'
import colorSharp2 from '../assets/img/color-sharp2.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Projects = () => {
  const projects = [
    {
      title: 'StudyNotion - An EdTech platform',
      description:
        'Study Notion is an EdTech web application developed using the MERN stack.',
      imgUrl: projImg1,
      link1: 'https://study-notion-ed-pearl.vercel.app/',
      link2: 'https://github.com/DivyamVJ0901/StudyNotion'
    },
    {
      title: 'Ecomzy-Shopping Website',
      description:
        'It is an impressive shopping app developed using React and Redux.',
      imgUrl: projImg2,
      link1: 'https://ecomzy-shopping-app-by-divyam.netlify.app/',
      link2: 'https://github.com/DivyamVJ0901/Shopping-App'
    },
    {
      title: 'Check Your Weather',
      description:
        'A weather app is a powerful tool that provides real-time weather information, forecasts, and conditions for any location.',
      imgUrl: projImg3,
      link1: 'https://weatherappbydivyamvijay.netlify.app/',
      link2: 'https://github.com/DivyamVJ0901/Weather-App'
    },
    {
      title: 'Dev Detective',
      description:
      'Uncover comprehensive details about any developer using their GitHub username, including company name, location, Twitter handle, repos etc.',
      imgUrl : projImg4,
      link1: 'https://dev-detective-by-divyam.netlify.app/',
      link2: 'https://github.com/DivyamVJ0901/Dev-Detective-Project'
    }
  ]

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Throughout my web development learning journey, I've
                    embarked on numerous exciting projects that demonstrate my
                    growing expertise and creative flair. Each project has
                    challenged me to push the boundaries of my knowledge,
                    resulting in a portfolio that not only showcases my
                    technical skills but also my ability to innovate and solve
                    complex problems. From dynamic websites and interactive user
                    interfaces to robust backend systems, my work reflects a
                    deep passion for web development and a commitment to
                    excellence.
                  </p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='first'>Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second'>
                        <p>
                          <a href='https://github.com/DivyamVJ0901' className='twitter-link'>Know more ....</a>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <p>
                          <a href='https://github.com/DivyamVJ0901' className='twitter-link'>Know more ....</a>
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2}></img>
    </section>
  )
}
