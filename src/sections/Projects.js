import React, { Component } from "react";
import data from "./data.json";
import ArrowBack from "./images/arrow-back.svg";
import { Link } from "react-scroll";
// console.log("data: ", data);

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: data.projects,
      project: false,
      index: null
    };
  }

  project(index) {
    console.log("click project");
    console.log("index:", index);
    this.setState({
      project: true,
      index: index
    });

    console.log("this.state: ", this.state);
    console.log("this.state.project ", this.state.project);
    console.log("this.state.projectPath ", this.state.projectPath);
  }

  noProject() {
    this.setState({
      project: false
    });
    console.log("this.state.project ", this.state.project);
  }

  render() {
    console.log("this.state.index: ", this.state.index);
    return (
      <div className="projects-section" id="projects">
        {!this.state.project && (
          <>
            <div className="projects-container">
              <div className="title">My recent work:</div>
              {this.state.projects.map((project, index) => {
                return (
                  <div className="project-div" key={index}>
                    <img
                      className="project-picture"
                      src={window.location.origin + project.main_image}
                      alt={project.title}
                    />
                    <div className="cover">
                      <div className="title">{project.title}</div>
                      {project.short_desc}
                      <div className="buttons">
                        <Link
                          to="projects"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={0}
                          duration={500}
                        >
                          <div
                            className="button"
                            onClick={() => this.project(index)}
                          >
                            Description
                          </div>
                        </Link>

                        <div className="button">Visit Website</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {this.state.project && (
          <>
            <div className="project-container">
              <div className="title">
                {this.state.projects[this.state.index].title}
                <div className="back-to">
                  <img
                    src={ArrowBack}
                    className="arrow-back"
                    alt="arrow-back"
                    onClick={() => this.noProject()}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Projects;

//
// <div className="project-div"></div>
// <div className="project-div"></div>
// <div className="project-div"></div>
// <div className="project-div"></div>
// <div className="project-div"></div>
// <div className="project-div"></div>
// <div className="project-div"></div>
// <div className="project-div"></div>

// {acceptedFriends &&
//     acceptedFriends.map((user, index) => {
//         return (
//             <>
//                 <div
//                     key={index}
//                     className="friendsmallbox"
//                 >

// {this.state.pictures.map((picture, index) => (
//     <img
//         key={index}
//         src={picture.picture}
//         className="smallpicture"
//     />
// ))}
