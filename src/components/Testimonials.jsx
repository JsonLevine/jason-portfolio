import React from 'react'
import { HandThumbUpIcon, UsersIcon } from "@heroicons/react/24/solid";
import { testimonials } from "../data";

function Testimonials() {
    return (
        <section id="testimonials">
          <div className="container px-5 py-10 mx-auto text-center">
            <UsersIcon className="w-10 inline-block mb-4" />
            <h1 className="jersey-25 sm:text-5xl text-4xl font-medium title-font text-white mb-4">
              Testimonials
            </h1>
            <div className="flex flex-wrap m-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name}className="cursor-default p-4 lg:w-1/2 w-full group">
                  <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded transition ease-in-out duration-300 group-hover:ring-4 group-hover:ring-green-400/50">
                    <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                    <div className="inline-flex items-center">
                      <HandThumbUpIcon className="mr-4 block w-8 text-gray-500 transition ease-in-out duration-300 group-hover:text-green-600 group-hover:-translate-y-1 group-hover:-rotate-12 group-hover:scale-125" />
                      <img
                        alt="testimonial"
                        src={testimonial.image}
                        className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-white">
                          {testimonial.name}
                        </span>
                        <span className="text-gray-500 text-sm uppercase">
                          {testimonial.company}
                        </span>
                        <span className="text-gray-600 text-xs">
                          {testimonial.title}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Testimonials