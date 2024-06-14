import React from 'react';
import "./footer.css"

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Karthik</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>

          <li>
            <a href="#services" className="footer__link">Services</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/karthikvaldas_06/" className="footer__social-link" target='_blank' rel="noreferrer">
              <i class="bx bxl-instagram"></i>
          </a>

          <a href="https://www.facebook.com/karthik.v.1726/" className="footer__social-link" target='_blank' rel="noreferrer">
              <i class="bx bxl-facebook"></i>
          </a>

          <a href="https://x.com/karthik_valdas" className="footer__social-link" target='_blank' rel="noreferrer">
              <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Karthik {year}
        </span>
      </div>
    </footer>
  )
}

export default Footer;