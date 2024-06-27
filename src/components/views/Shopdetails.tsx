import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

const Shopdetails = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={require('../../../public/pic/11929743_shop2.jpg')}
        height={1000}
        width={1000}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Elegance in Every Stitch, Style in Every Fold of Our Cloths
      </h1>
      <p className="mb-8 leading-relaxed">
      At Asad Commerce, we believe that fashion is not jsut about clothing; it&apos;s about self-expression, confidence, and making a statement without saying a word.Our clothing store is your one-stop destination for all things stylish , elegant, and fashion-forward.
      </p>
      <div className="flex w-full md:justify-start justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
          <label
            htmlFor="hero-field"
            className="leading-7 text-sm text-gray-600"
          >
            Subscribe to our Newsleter
          </label>
          <input
            type="text"
            id="hero-field"
            name="hero-field"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <Button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Subscribe
        </Button>
      </div>
      <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
        We deal in Excellent Product
      </p>
      
    </div>
  </div>
</section>

    </div>
  )
}

export default Shopdetails