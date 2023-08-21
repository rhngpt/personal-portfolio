import React from "react";
import { PhoneIcon, MailIcon, TerminalIcon, GlobeIcon, LocationMarkerIcon } from "@heroicons/react/solid";


export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto sm:flex-nowrap flex-wrap">
          <div className="text-center mb-20">
          <PhoneIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 text-center">
            Contact Information
          </h1>
        </div>
      </div>
      <div className="bg-gray-900 relative flex flex-wrap px-4 py-6 justify-center rounded shadow-md">
            <div className="lg:w-1/3 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-sm">
              <LocationMarkerIcon className="w-4 inline-block mb-1 mr-1" />ADDRESS
              </h2>
              <p className="mt-1">
                Blacksburg, Virginia 24060
              </p>
            </div>
            <div className="lg:w-1/3 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-sm">
              <MailIcon className="w-5 inline-block mb-1 mr-1" />EMAIL
              </h2>
              <a 
              href="mailto:rhngpta96@gmail.com"
              className="text-indigo-400 leading-relaxed">
                rohangupta@vt.edu
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-sm mt-4">
              <PhoneIcon className="w-4 inline-block mb-1 mr-1" />PHONE
              </h2>
              <p className="leading-relaxed">540-449-7542</p>
            </div>
            <div className="lg:w-1/3 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-sm">
              <GlobeIcon className="w-4 inline-block mb-1 mr-1" />LINKEDIN
              </h2>
              <a 
              href="https://www.linkedin.com/in/rohan-anil-gupta/"
              target="_blank"
              className="text-indigo-400 leading-relaxed">
                rohan-anil-gupta
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-sm mt-4">
              <TerminalIcon className="w-4 inline-block mb-1 mr-1" />GITHUB
              </h2>
              <a 
              href="https://github.com/rhngpt"
              target="_blank"
              className="text-indigo-400 leading-relaxed">
                rhngpt
              </a>
            </div>
          </div>
    </section>
  );
}
