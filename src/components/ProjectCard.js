import { Col } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = ({ title, description, imgUrl , link1 , link2 }) => {
  return (
    <Col size={12} lg={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-txtx-btns">
          <button className="proj-btn" onClick={() => window.open(link1 , "_blank")}><FaExternalLinkAlt size={30}/></button>
          <button className="proj-btn" onClick={() => window.open(link2 , "_blank")}><FaGithub size={30}/></button>
          </div>
        </div>
      </div>
    </Col>
  )
}
