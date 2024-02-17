import React from 'react'

const Menu = ({items}) => {
  return (
    <div className='lg:grid grid-cols-2 gap-10'>
     {items.map((item)=>{
        const {id, title, price, img, desc, extra} = item
        return(
            <div className='flex justify-between items-center py-4' key={id}>
              <div className='w-56 h-30 md:w-full'>
                <img src={img} alt={title} className='h-28 w-28 md:w-80 lg:w-60 object-cover rounded border-2 border-gold'/>
              </div>
              <div className='w-full'>
                <div className='flex justify-between items-center mb-4 pb-1 border-b-2 border-dotted border-gold'>
                  <p className='text-xs md:text-base font-bold capitalize'>{title}</p>
                  <p className='text-sm md:text-base font-bold text-gold'>{'\u20A6'}{price}</p>
                </div>
                <p className='text-xs md:text-base'>{desc} <span className='font-bold'>{extra}</span></p>
              </div>
            </div>
        )
     })} 
    </div>
  )
}

export default Menu
