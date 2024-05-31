import React from 'react'

const FilterOptions = ({setFilterOpen, addFilter, options}) => {

    return (
        <div 
        className='flex-col z-50 bg-white rounded-2xl drop-shadow-2xl z-100 font-poppins text-color-stronggray mt-2
        overflow-y-auto scrollbar scrollbar-thumb-color-middlegray  scrollbar-w-2 scrollbar-thumb-rounded max-h-[200px]
        w-full'>
          <ul>
            {options.map((item) => (
            <li 
                key={item.id} 
                className='hover:bg-color-lightgray p-6 hover:text-color-black hover:cursor-pointer' 
                onClick={()=>{addFilter(item); setFilterOpen(false)}}>{item.name}
            </li>
            ))}
          </ul>
        </div>
  )
}

export default FilterOptions
