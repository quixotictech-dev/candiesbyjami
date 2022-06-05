import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CategoryBanner() {
  return (
    <div className="bg-brand300 py-2 collection-banner">
      <div className="custom-container py-2">
        <p className="font-size-display2 my-3 py-5 text-center font-family-secondary">
          Categories
        </p>

        <div className="row">
          <div className="col-12 col-md-4 mb-5 collection-item-1 cursor-pointer">
            <Link className="notjustcaramel-catlink" href='/collection#not-just-caramel'>
              <a className="align-items-center border-width-5 border-color-brand700 rounded-lg shadow-2 flex-column cursor-pointer mb-5">
                <div className="ast_4OANwREPnblvYL">
                  <p className="mb-2 font-size-heading font-family-tertiary text-center font-color-white">
                    (not) Just Caramel
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-5 collection-item-2 cursor-pointer">
            <Link className="applesetc-catlink" href='collection#apples-etc'>
              <a className="align-items-center border-width-5 border-color-brand700 shadow-2 flex-column cursor-pointer mb-5">
                <div className="ast_VPvL5zYP43oAQkL">
                  <p className="mb-2 font-size-heading font-family-tertiary font-color-white text-center">
                    Apples, Etc.
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-5 collection-item-3 cursor-pointer">
            <Link className="withchocolate-catlink" href='/collection#with-chocolate'>
              <a className="align-items-center border-width-5 border-color-brand700 shadow-2 flex-column cursor-pointer mb-5">
                <div className="ast_yA6nldxM1zlEWb">
                  <p className="mb-2 font-size-heading font-family-tertiary font-color-white text-center">
                    With Chocolate
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
