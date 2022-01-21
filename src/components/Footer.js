import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => (
  <div class="footer-dark">
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-3 item">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Blockchain</a>
              </li>
              <li>
                <a href="#">Web</a>
              </li>
              <li>
                <a href="#">Design</a>
              </li>
            </ul>
          </div>
          <div class="col-sm-6 col-md-3 item">
            <h3>Technos</h3>
            <ul>
              <li>
                <a href="https://web3js.readthedocs.io/en/v1.7.0/">Web3Js</a>
              </li>
              <li>
                <a href="https://fr.reactjs.org/">ReactJs</a>
              </li>
              <li>
                <a href="https://tailwindcss.com/">Tailwindcss</a>
              </li>
            </ul>
          </div>
          <div class="col-md-6 item text">
            <h3>Presentation</h3>
            <p>
              Hi! I'm Marjorie, blockchain developer. I create and test DApps
              and blockchain functionalities..
            </p>
          </div>
          <div class="col item social">
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <p class="copyright">
          <a href="http://marjorie-dev.me/marjorie-dev/">
            Marjorie Ngoupende © 2021
          </a>
        </p>
      </div>
    </footer>
  </div>
);
export default Footer;
