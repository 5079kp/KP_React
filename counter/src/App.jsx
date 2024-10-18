import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';

function App() {
  return (
    <div className="bg-dark text-light" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-sm-12 col-md-6 col-xl-6">
            <h1>Hi I'm Kuldeep Patel</h1>
            <h3>Web Designer And Developer at HKP Corp</h3>
            <p>June 2022- Present for Web Designer</p>

            <ul>
              <li>
                <i className="fas fa-code"></i>
                Design, Developed and Mainted the as per requirement of the company using TailwaindCSS, React-JS & Node.JS.
              </li>
              <br />

              <li>
                <i className="fas fa-tachometer-alt"></i>
                Improve Website, Performance reducing load time by 30% to 35%.
              </li>
              <br />

              <li>
                <i className="fas fa-paintbrush"></i>
                Collabroted with Design Team to Implement user-friendly interfaces.
              </li>
              <br />

              <li>
                <i className="fas fa-mobile-alt"></i>
                Assisted in Developing Responsive Web Application Using Bootstrap & Mediaquery As per require clinet.
              </li>
              <br />

              <li>
                <i className="fas fa-bug"></i>
                Worked on Bug fixing And improving Application Performance.
              </li>
              <br />

              <li>
                <i className="fas fa-users"></i>
                Participated in team meetings and contributed to Project Planning.
              </li>
              <br />

            </ul>

            <a href="#" className="btn btn-primary">
              <i className="fas fa-check-circle"></i> AVAILABLE
            </a>
            <div className="mt-2">
              <i className="fab fa-facebook fa-1x"></i>{" "}
              <i className="fab fa-twitter fa-1x"></i>{" "}
              <i className="fab fa-instagram fa-1x"></i>{" "}
              <i className="fab fa-github fa-1x"></i>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-xl-6">
            <img
              src={"https://f.hubspotusercontent30.net/hubfs/3277184/how%20to%20implement%20an%20effective%20remote%20working%20strategy.png" }
              alt="Profile"
              height={550}
              width={600}
              className="img-fluid"
            />
          </div>

        </div>
        </div>
      </div>
  );
}

export default App;

