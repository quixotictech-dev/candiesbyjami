import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import Image from 'next/image';

const Shipping = () => (
  <Root>
    <Head>
      <title>Shipping | CandiesByJami</title>
    </Head>
    <div className="shipping-container bg-black600 bg-caramel">
      <div className="row mt-1 pt-2 shipping-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 mt-3 mb-3 px-sm-5 justify-content-center">
            <div className="mb-5 img-shadow">
              <Image
                src="/images/turtlecartoon.png"
                alt="turtle drawing"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="ship-state h-100 font-family-secondary">
            <div className="d-flex align-items-center justify-content-center h-100">
              <div className="ship-text mt-4 pt-4">
                <h4 className="font-size-display1 mt-4 pt-4 font-family-secondary font-color-green mb-2 pb-2">Freshness Guarantee</h4>
                <p className="font-size-subheader mb-2 font-color-white pb-2">
                  At dCandiesByJami, we are obsessed with providing only the most excellent handcrafted sweets. We use only the finest real cane sugar and gourmet chocolates, purchase the Granny Smith apples for our caramel apples in small batches, and we do not add any artificial or industrial preservatives to our products. We don&apos;t use any ingredients that do not belong in a household kitchen. Thus, the freshness of our product is paramount in maintaining our superior quality.<br>
                </br><br>
                </br>To ensure that our products are fresh, we pride ourselves on keeping very low inventory and tailor-making our batches per order. Because our production never exceeds our demand we can guarantee that the candies we ship are not more than a few days old. Anything older than a week doesn&apos;t ship. As a result, we do not simply drop ship like you would expect from many online retailers. Buyers can expect a short lead time on orders (usually 2-4 days but never exceeding one week). That being said, we do try our best to deliver on special time-sensitive requests. If you need your product shipped sooner let us know either in an email with the order number in the subject line or somewhere in the order. We will do our best to accommodate and let you know immediately if this is not possible. Therefore, if exceptional delays (shipping in longer than one week or longer than requested) become likely we will always inform you as soon as it becomes apparent.
                </p>
                <h4 className="font-size-display1 font-family-secondary font-color-green mb-2 pb-2">Shipping Options</h4>
                <p className="font-size-subheader font-color-white mb-2 pb-2">
                  Shipped orders will default to the most cost effective method by default (USPS Regional, or First Class for larger quantities). Expensive shipping options can be requested at the buyers expense. Also, Sioux City locals may request local pickup. All other arrangements will have to be made known and agreed upon prior to ordering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default Shipping;
