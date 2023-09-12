import React from "react";
import appstore from "../../../images/appstore.png";
import playstore from "../../../images/playstore.png";
import "./Footer.css";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h5>Find a store</h5>
        <h5>Become a member</h5>
        <h5>Send us feedback</h5>
        <h5>Discount</h5>
      </div>
      <div className="midFooter">
        <div className="gethelp">
          <h5>Get Help</h5>
          <ul>
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Contact Us On DreamStore Inquiries</li>
            <li>Contact Us On All Other Inquiries</li>
          </ul>
        </div>
        <div className="about">
          <h5>About US</h5>
          <ul>
            <li>News</li>
            <li>Carrers</li>
            <li>Investors</li>
            <li>Sustainability</li>
          </ul>
        </div>
      </div>
      <div className="rightFooter">
        <h4>Download our app</h4>
        <p>For iOS and Android</p>
        <img src={appstore} alt="Appstore logo" />
        <img src={playstore} alt="Playstore logo" />
        <div>
          <a href="https://instagram.com">
            <span>
              <AiFillInstagram size={"2vmax"} />
            </span>
          </a>
          <a href="https://instagram.com">
            <span>
              <AiFillYoutube size={"2vmax"} />
            </span>
          </a>
          <a href="https://instagram.com">
            <span>
              <BiLogoFacebookCircle size={"2vmax"} />
            </span>
          </a>
          <a href="https://instagram.com">
            <span>
              <AiFillTwitterCircle size={"2vmax"} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
