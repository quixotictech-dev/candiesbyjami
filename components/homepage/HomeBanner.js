import React from 'react';
import Link from 'next/link';

export default function HomeBanner() {
  return (
    <div className="p-5 newbanner bg-black200 bordertop borderbottom border-color-black500">
      <span
        className="font-size-display1 font-family-4 text-center font-color-powderblue shadow-5"
        style={{ maxWidth: '53rem' }}
      >
        A gift of homemade candies never fails impress, <u>and we are going to make it easier than ever!</u></span>
      <div className="font-size-display2 font-family-secondary font-color-black shaddw-4 mt-5 text-center mx-auto">
        <p>Coming Soon to iOS and Google Play Store: Candy-Gifts(byJami)!</p>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-3 mb-5">
        <Link href="/new">
          <a className="d-flex py-3 align-items-center font-color-white bordertop  border-bottom border-color-white">
            <p className="mr-3">Find out more</p>
            <img src="/icon/arrow-long-right.svg" alt="arrow" />
          </a>
        </Link>
      </div>
    </div>
  );
}
