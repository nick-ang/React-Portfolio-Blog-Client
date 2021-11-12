import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <div class="footer">

            <div class="footer-links">
              <a href="https://github.com/nick-ang" target="_blank">
                <i class="fab fa-github"></i>

              </a>
              <a href="https://www.instagram.com/nickangg/" target="_blank">
                <i class="fab fa-instagram"></i>

              </a>
              <a href="https://www.linkedin.com/in/nick-c-ang/" target="_blank">
                <i class="fab fa-linkedin"></i>

              </a>
              <a href="/">
                <i class="fas fa-home"></i>

              </a>
              <a href="/Articles">
                <i class="fas fa-book"></i>

              </a>
            </div>
            <br />
               <div style={{ width: 350, "margin-top": 5, "border-radius": "50px" }} >

          <p align="center">Built with:</p>
          <br/>
<div className="flex w-50 justify-evenly w-100" align="left"> <a className="m-2" href="https://aws.amazon.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg" alt="aws" width="40" height="40"/> </a> <a className="m-2" href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a>  <a  className="m-2" href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a>  <a  className="m-2" href="https://kotlinlang.org" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" alt="kotlin" width="40" height="40"/> </a> <a  className="m-2" href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a>  <a  className="m-2" href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a  className="m-2" href="https://spring.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/> </a>  </div>
                    <br/>
          </div>
          </div>

          &copy; {new Date().getFullYear()} Copyright - Coded by Nick Ang{" "}
          <a href="https://www.linkedin.com/in/nick-c-ang/"> </a>

          <br />
          <br />
          <br />
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
