import React from 'react'
import { useState } from "react"
import data from '../data/data.json'
import { BsCircleFill } from "react-icons/bs"


function Crew() {

  const [crew] = useState(data.crew)
  const [value, setValue] = useState(0)

  const { name, images, role, bio } = crew[value]

  return (
    <section className='w-full h-screen crew  flex items-center pl-52 pr-52 justify-between text-cyan-50'>
      <div className="px-5 pt-32 grid grid-cols-1 gap-5 md:grid-cols-2 gap-10 xl:max-w-7xl xl:mx-auto">
          <div className="pt-10 xl:pt-32 text-center md:text-left">
            <h2 className="text-white text-3xl font-extralight text-gray-300 uppercase tracking-wider pb-5 md:pb-10">
              02
              <span className="ml-5 font-bold text-white">Meet your crew</span>
            </h2>

            <h3 className="text-white font-light text-2xl uppercase tracking-widest mb-5 pt-5 md:pt-20">
              {role}
            </h3>

            <h2 className="text-white font-bold text-3xl lg:text-4xl uppercase tracking-widest mb-5">
              {name}
            </h2>

            <p className="text-white pb-5">{bio}</p>

            <ul className="flex items-center justify-center md:justify-start mb-10">
              {crew.map((item, index) => (
                <li key={index} className="mr-5">
                  <button
                    onClick={() => setValue(index)}
                    className={`gray ${index === value && "white"}`}
                  > <BsCircleFill />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <img
              src={images}
              alt={name}
              title={name}
              className="xl:absolute right-20 bottom-0 block mx-auto"
            />
          </div>
        </div>
    </section>
  )
}

export default Crew