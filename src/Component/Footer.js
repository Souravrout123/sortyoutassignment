import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <section className="">
        <div className="page-container" style={{ backgroundColor: 'black',color:'white' }}>
      <footer className="bg-secondary text-white text-center text-md-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h3 className="text-uppercase">About us</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                aliquam voluptatem veniam, est atque cumque eum delectus sint!
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h3 className="text-uppercase">Get In Touch</h3>

              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-white">Address-</a>
                  <p></p>
                </li>
                <li>
                  <a className="text-white">Phone-</a>
                </li>
                <li>
                  <a className="text-white">Email-</a>
                </li>
                <li>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h3 className="text-uppercase">Social Media</h3>
                <ul className="list-inline list-unstyled">
                  <li className="list-inline-item">
                      <FontAwesomeIcon icon={faFacebook} />
                  </li>
                  <li className="list-inline-item">
                      <FontAwesomeIcon icon={faTwitter} /> 
                  </li>
                  <li className="list-inline-item">
                      <FontAwesomeIcon icon={faInstagram} />
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        
        </div>
        <div className="text-center p-3" style={{ backgroundColor: '#00a67e' }}>
          © 2020 Copyright:
        </div>
      </footer>
      </div>
    </section>
  );
}

export default Footer;



