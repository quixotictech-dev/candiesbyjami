import React from 'react';

const Footer = () => (
  <footer className="pt-2">
    <div className="custom-container mb-2 pb-2 pt-2">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-pacifico font-size-display1 mb-4">
            CandiesByJami
          </p>
          <div className="d-flex font-color-medium mb-2 pb-2 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="/collection"
                className="mb-3 d-block font-color-medium"
              >
                Products
              </a>
              <a
                href="/about"
                className="d-block font-color-medium"
              >
                About Us
              </a>
            </div>
            <div>
              <a
                href="/privacy"
                className="mb-3 d-block font-color-medium"
              >
                Privacy Statement
              </a>
              <a
                href="/shipping"
                className="d-block font-color-medium"
              >
                Shipping
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Follow us
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://twitter.com/CandiesByJami"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://www.facebook.com/candiesbyjami/"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-3">
            Newsletter
          </p>
          <div className="position-relative">
            <input
              className="borderbottom border-color-gray400 h-48 w-100 px-3"
              placeholder="email address"
            />
            <button className="bg-transparent position-absolute right-0 top-50 translateY--50 pr-2 h-48">
              <img src="/icon/arrow-long-right.svg" className="w-24" alt="Arrow icon"/>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-md-5">
      <div className="bg-brand300">
        <div className="custom-container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="font-color-brand font-size-caption py-4 text-right">
          <a
              href="https://candiesbyjami.com/"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              &copy; { new Date().getFullYear() } CandiesByJami
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
