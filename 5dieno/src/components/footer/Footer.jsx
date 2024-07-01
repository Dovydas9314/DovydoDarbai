import React from 'react';
import './style.css'

const Footer = () => {
  return (
    <div className="container-fluid footer text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">FAQ</a></li>
              <li><a href="#" className="text-light">Investor Relations</a></li>
              <li><a href="#" className="text-light">Privacy</a></li>
              <li><a href="#" className="text-light">Speed Test</a></li>
              <li><a href="#" className="text-light">Ad Choices</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Help Center</a></li>
              <li><a href="#" className="text-light">Jobs</a></li>
              <li><a href="#" className="text-light">Cookie Preferences</a></li>
              <li><a href="#" className="text-light">Legal Guarantee</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Account</a></li>
              <li><a href="#" className="text-light">Ways to Watch</a></li>
              <li><a href="#" className="text-light">Corporate Information</a></li>
              <li><a href="#" className="text-light">Legal Notices</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Media Center</a></li>
              <li><a href="#" className="text-light">Terms of Use</a></li>
              <li><a href="#" className="text-light">Contact Us</a></li>
              <li><a href="#" className="text-light">Only on Netflix</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="mt-3"><a href="#" className="text-light">Questions? Contact us.</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;