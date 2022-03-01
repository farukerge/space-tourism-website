import React from 'react'
import data from '../../data/data.json'
import { useState } from 'react'

 

function Destination() {

  const [planets] = useState(data.destinations)
  const [value, setValue] = useState(0)

  const { name, images, description, distance, travel } = planets[value]



  return (
    <section className="w-full h-screen destination  pl-52 pr-52 flex justify-between text-cyan-50">
        <div className=" flex justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-white text-3xl font-extralight  uppercase tracking-wider pb-20 mb-40">
              01
              <span className="ml-5 font-bold">Pick your destination</span>
            </h2>

            <img
              src={images}
              alt={name}
              title={name}
              className="block mx-auto"
            />
          </div>

          <div className="pt-20 text-center md:text-left pb-10 w-3/6">
            <ul className="flex items-center justify-center md:justify-start mb-10">
              {planets.map((item, index) => (
                <li key={index} className="mr-5">
                  <button
                    onClick={() => setValue(index)}
                    className={`uppercase font-semibold tracking-wider text-gray-200 pb-2 border-b border-transparent ${
                      index === value && "border-b border-white"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            <h2 className="text-white font-bold text-4xl lg:text-6xl uppercase tracking-widest mb-5">
              {name}
            </h2>

            <p className="text-white border-b border-gray-400 pb-5">
              {description}
            </p>

            <ul className="flex flex-wrap items-center justify-between pt-5">
              <li className="uppercase text-gray-200 text-xl">
                Avg. Distance<span className="text-4xl block">{distance}</span>
              </li>
              <li className="uppercase text-gray-200 text-xl">
                Est. travel time<span className="text-4xl block">{travel}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
  )
}

export default Destination