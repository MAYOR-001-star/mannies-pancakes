import React from 'react'

const Categories = ({categories, filterItems}) => {
  return (
    <div className='flex justify-evenly my-7'>
      {categories.map((category, index)=>{
        return(
            <button type='button' key={index} onClick={()=>filterItems(category)} className='mx-1 md:mx-2 text-sm py-1 px-1 md:px-4 capitalize text-gold md:text-xl hover:border-2 hover:border-gold hover:bg-gold hover:text-gray-200 rounded-md'>
                {category}
            </button>
        )
      })}
    </div>
  )
}

export default Categories
