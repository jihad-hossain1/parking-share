import React from 'react'

const HeaderCard = ({icons, title, desc}) => {
  return (
    <div className='flex items-center w-full md:w-60 lg:w-80 md:gap-2 lg:gap-4 bg-white text-black py-5 px-4 lg:py-10 lg:px-8 shadow-2xl hover:bg-black hover:border hover:text-white transition-all duration-300' >
        <div >
            {icons}
        </div>
        <div>
            <h2 className='text-2xl font-semibold' >{title}</h2>
            <p className='text-sm'>{desc}</p>
        </div>
    </div>
  )
}

export default HeaderCard