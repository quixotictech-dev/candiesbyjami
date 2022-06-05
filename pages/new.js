import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import Aboutimation from './aboutimation.js';

const New = () => (
  <Root>
    <Head>
      <title>New &amp; Coming Soon | CandiesByJami</title>
    </Head>
    <div className="new-container bg-grad7">
      {/* Row */}
      <div className="row mt-5 pt-5 new-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
            <h2 className="font-size-header mb-4 outline-black font-color-purple shadow-5">
              Coming Soon to Mobile: <u>CandyGifts(byJami)</u>
            </h2>
            <h4 className="font-size-subheader mb-4 font-color-white">
              We are presently in development of a mobile app that will add an extra layer of convenience to CandiesByJami products.<br>
            </br><br>
            </br>While CandiesByJami.com already offers a convenient way to aquire our superb sweets for yourself, this new app, CandyGifts(byJami), is chiefly focused on providing the most simple and cost effective way to give the same celestial confections to a friend, loved one, or anyone you might want to impress or congradulate.
            </h4>
            <div className="new-cjs mt-3 d-flex flex-row">
              <a className="px-4 py-3 font-color-white new-doc border border-color-white" href="/app" >
                More Info.
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <Aboutimation />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default New;
