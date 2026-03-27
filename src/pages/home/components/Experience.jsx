import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { experience } from '../../../utils/utils';

export default function Experience() {
  return (
    <section className="w-full py-16 text-black bg-gradient-to-r from-blue-50">
      <div className="mx-auto w-11/12 md:w-9/12">
        <div className="flex items-center mb-12">
          <FontAwesomeIcon icon={faBriefcase} className="text-3xl mr-4 text-blue-400" />
          <h2 className="text-3xl md:text-4xl font-bold">Experiencia laboral</h2>
        </div>

        <div className="relative border-l-2 border-blue-400/30 ml-3 md:ml-6 pb-4">
          {experience.map((item, index) => (
            <div key={index} className="mb-12 ml-6 md:ml-10 relative">
              <div className="absolute -left-[33px] md:-left-[49px] mt-1.5 w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold mb-1">{item.position}</h3>
                  <h4 className="text-lg font-semibold text-black mb-1">{item.company}</h4>
                  <p className="text-sm uppercase tracking-wider">{item.date}</p>
                </div>

                <div className="md:col-span-2">
                  <p className="leading-relaxed text-base md:text-lg whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
