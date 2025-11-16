/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function LatestWorks() {
  const [activeSlide, setActiveSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Digital Banking Platform",
      subtitle: "Modern Financial Solutions for Tomorrow",
      description: "Comprehensive digital banking platform with advanced security features and seamless user experience.",
      client: "Bank Indonesia",
      category: "Fintech",
      image: "/api/placeholder/800/500"
    },
    {
      id: 2,
      title: "E-Commerce Revolution",
      subtitle: "Next-Gen Shopping Experience",
      description: "Revolutionary e-commerce platform with AI-powered recommendations and real-time analytics.",
      client: "Tokopedia",
      category: "E-Commerce",
      image: "/api/placeholder/800/500"
    },
    {
      id: 3,
      title: "Smart City Dashboard",
      subtitle: "Urban Intelligence Platform",
      description: "Integrated smart city management system with IoT connectivity and data visualization.",
      client: "Jakarta Smart City",
      category: "Government",
      image: "/api/placeholder/800/500"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-[#3C6E71] mb-6 tracking-tight">
            Our Latest Works
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            A Glimpse of our Production to make Dream Project
          </p>
        </div>

        {/* Project Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => setActiveSlide(activeSlide === 0 ? projects.length - 1 : activeSlide - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 border border-gray-200"
          >
            <FaChevronLeft className="text-[#3C6E71] text-lg" />
          </button>
          
          <button
            onClick={() => setActiveSlide(activeSlide === projects.length - 1 ? 0 : activeSlide + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 border border-gray-200"
          >
            <FaChevronRight className="text-[#3C6E71] text-lg" />
          </button>

          <div className="overflow-hidden rounded-[3rem]">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="relative bg-white rounded-[2.5rem] border overflow-hidden transition-all duration-500">
                    {/* Gradient accent */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#3C6E71] to-blue-400" />
                    
                    {/* Content */}
                    <div className="relative z-10 p-8 md:p-16">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-6">
                          <div className="inline-block px-4 py-2 bg-[#3C6E71]/10 rounded-full">
                            <span className="text-[#3C6E71] font-medium text-sm">{project.category}</span>
                          </div>
                          
                          <h3 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
                            {project.title}
                          </h3>
                          
                          <p className="text-2xl text-[#3C6E71] font-light italic">
                            "{project.subtitle}"
                          </p>
                          
                          <p className="text-lg text-gray-600 leading-relaxed">
                            {project.description}
                          </p>
                          
                          <div className="flex items-center space-x-4 pt-4">
                            <div className="w-12 h-12 bg-[#3C6E71]/20 rounded-xl flex items-center justify-center">
                              <span className="text-[#3C6E71] font-bold text-sm">
                                {project.client.slice(0, 2)}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-gray-800">{project.client}</p>
                              <p className="text-sm text-gray-500">Client</p>
                            </div>
                          </div>
                        </div>

                        {/* Image Placeholder */}
                        <div className="relative">
                          <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                                <span className="text-[#3C6E71] font-bold text-xl">
                                  {project.id}
                                </span>
                              </div>
                              <p className="text-gray-600 font-medium">Project Preview</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSlide === index 
                    ? 'bg-[#3C6E71] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}