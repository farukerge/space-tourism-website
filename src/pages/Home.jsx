import React from 'react'


function Home() {
  return (
      <div className=' w-full h-screen home  flex items-center pl-52 pr-52 justify-between text-cyan-50 ' >
          <div className=' w-2/4 items-center'>
            <h2 className=' text-xl mb-11  text-slate-300'>So, you want to travel to</h2>
            <h1 className=' text-8xl ml-4 mb-11 tracking-widest'>SPACE</h1>
            <p className=' w-2/4 text-slate-300'>  Let’s face it; if you want to go to space, you might as well genuinely go to 
                 outer space and not hover kind of on the edge of it. Well sit back, and relax 
                 because we’ll give you a truly out of this world experience!
            </p>
          </div>
      
          <div className='bg-white rounded-full h-96  text-center items-center grid  w-1/4 '>
              <h1 className='text-4xl  text-black  contents p-4 tracking-widest '>EXPLORE</h1>
          </div>

      </div>
  )
}

export default Home