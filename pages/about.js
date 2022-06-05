import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import Image from 'next/image';
import Potimation from './potimation.js';

const About = () => (
  <Root>
    <Head>
      <title>About | CandiesByJami</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-1 pt-2 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 mt-3 mb-3 px-sm-5 justify-content-center">
            <div className="mb-5">
              <Image
                src="/logo.svg"
                alt="logo"
                width={271}
                height={91}
              />
            </div>
            <h4 className="font-size-subheader font-color-green mb-4">
              &ldquo;As a little girl, my mom made many Christmas candies, but in my mind caramel was the best!  Instead of begging her to make it, it was easier to learn myself.  Eventually, I started sharing with friends and family.  Everyone loved my recipe and in 2013 I started taking orders and making more caramel than ever!  It quickly grew into a passion and a business started to grow.&rdquo;<br>
              </br><br>
              </br>
              &ldquo;Candies by Jami is still operating with the same excitement of that little girl in
              Mom&apos;s kitchen. We use the best ingredients and make everything fresh to order so every
              time you get the best caramels ever. Now operating in Sioux City, Iowa, we continue to
              grow wherever we go.&rdquo;
            </h4>
            <div className="about-cjs mt-3 d-flex flex-row">
              <a className="px-4 py-3 font-color-white font-family-pacifico about-doc" href="https://commercejs.com/docs/" target="_blank" rel="noopener noreferrer">
                -Jami
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <Potimation />
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <Image
                src="/review1.svg"
                alt="1st review"
                height={306}
                width={522}
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <Image
              src="/review2.svg"
              alt="2nd review"
              height={306}
              width={522}
            />
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <Image
                src="/review3.svg"
                alt="3rd review"
                height={306}
                width={922}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default About;
