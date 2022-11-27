"use client";

import { motion } from "framer-motion";
import { Navbar } from "./../navbar";
import { PageWrapper } from "./../page-wrapper";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const images = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1
    },
  },
};

export default function Aboutpage() {
  return (
    <div className="container mx-auto">
      <h1>
        <Navbar />
        <PageWrapper>
          <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-5">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Technical Specifications
                </h2>
                <p className="mt-4 text-gray-500">
                  The walnut wood card tray is precision milled to perfectly fit
                  a stack of Focus cards. The powder coated steel divider
                  separates active cards from new ones, or can be used to
                  archive important task lists.
                </p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Origin</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      Designed by Good Goods, Inc.
                    </dd>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Material</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      Solid walnut base with rare earth magnets and powder
                      coated steel card cover
                    </dd>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Dimensions</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      6.25&quot; x 3.55&quot; x 1.15&quot;
                    </dd>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Finish</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      Hand sanded and finished with natural oil
                    </dd>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Includes</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      Wood card tray and 3 refill packs
                    </dd>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Considerations</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      Made from natural materials. Grain and color vary with
                      each item.
                    </dd>
                  </div>
                </dl>
              </div>
              <motion.div 
              variants={variants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <motion.img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100"
                  variants={images}
                />
                <motion.img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="rounded-lg bg-gray-100"
                  variants={images}
                />
                <motion.img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                  alt="Side of walnut card tray with card groove and recessed card area."
                  className="rounded-lg bg-gray-100"
                  variants={images}
                />
                <motion.img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-100"
                  variants={images}
                />
              </motion.div>
            </div>
          </div>
        </PageWrapper>
      </h1>
    </div>
  );
}
