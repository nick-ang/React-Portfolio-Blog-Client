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
              <a href="/" >
                <i class="fas fa-home"></i>
              </a>
            </div>
            <br />
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
