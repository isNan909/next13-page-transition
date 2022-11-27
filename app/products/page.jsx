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
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Productpage() {
  return (
    <div className="container mx-auto">
      <h1>
        <Navbar />
        <PageWrapper>
          <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 pt-24 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-0">
              <div>
                <div class="w-full">
                  <div class="mb-12 max-w-[620px] lg:mb-20">
                    <span class="mb-2 block text-lg font-semibold text-primary">
                      All New
                    </span>
                    <h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                      All Products
                    </h2>
                    <p class="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
                      There are many variations of passages of Lorem Ipsum
                      available but the majority have suffered alteration in
                      some form.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="show"
              class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
            >
              <motion.div variants={images} class="group relative">
                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0"
                        ></span>
                        Basic Tee
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">Black</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">$35</p>
                </div>
              </motion.div>

              <motion.div variants={images} class="group relative">
                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0"
                        ></span>
                        Basic Tee
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">Black</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">$35</p>
                </div>
              </motion.div>

              <motion.div variants={images} class="group relative">
                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0"
                        ></span>
                        Basic Tee
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">Black</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">$35</p>
                </div>
              </motion.div>

              <motion.div variants={images} class="group relative">
                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0"
                        ></span>
                        Basic Tee
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">Black</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">$35</p>
                </div>
              </motion.div>

              <motion.div variants={images} class="group relative">
                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0"
                        ></span>
                        Basic Tee
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">Black</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">$35</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </PageWrapper>
      </h1>
    </div>
  );
}
