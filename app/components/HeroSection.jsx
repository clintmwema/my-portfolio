import React from 'react'

const HeroSection = () => {
  return (
   
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>    
                <div className='col-span-7 place-self-center'>           
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hi, I'm Rori</h1>
                    <p className='text-white text-lg lg:text-xl'>
                        Intermediate in full-stack development, advanced computer user,
                        and currently exploring Web3 and blockchain development.
                    </p>
                </div>    
            </div>        
        </section>
   
  );
}

export default HeroSection
