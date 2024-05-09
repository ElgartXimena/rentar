import React, { useEffect, useState } from 'react'
import { cross, downarrow } from '../../assets'
import FilterOptions from './FilterOptions'

const Filter = ({selectedFilter, placeholder, options}) => {
    const [filterOpen, setFilterOpen] = useState(false)
    const [selectedPlaceholder, setSelectedPlaceholder] = useState(null)
    const [removeFilter, setRemoveFilter] = useState(false)

    const addFilter = (filter) => {
        setSelectedPlaceholder(filter.name)
        selectedFilter(filter)
        setRemoveFilter(true)
    }

    const rmFilter = () => {
        selectedFilter(null)
        setSelectedPlaceholder(null)
        setRemoveFilter(false)
    }

    useEffect(()=>{},[selectedPlaceholder])
    return (
    <div>
        <div className='flex flex-row items-center'>    
            <div 
                className={`flex flex-row inner-border-[1px] inner-border-color-stronggray text-color-black/70 
                rounded-3xl px-7 py-3 w-fit gap-2 items-center
                ${filterOpen ? 'bg-color-black text-color-lightgray' : ''}
                hover:inner-border-color-black hover:cursor-pointer transition-all`}
                onClick={()=>{setFilterOpen(!filterOpen)}}
            >
                <h1 className='font-poppins font-medium'>{selectedPlaceholder ? selectedPlaceholder : placeholder}</h1>
                <img src={downarrow} className={`${filterOpen ? 'rotate-180' : ''}`}/>
            </div>
            {
                removeFilter ? (
                    <div onClick={rmFilter} className='ml-2 flex items-center p-1 h-fit w-fit hover:cursor-pointer hover:bg-color-middlegray/20 rounded-xl transition-all'>
                        <img src={cross} className='h-[24px]'/>
                    </div>
                ) : null
            }
            
        </div>
        <div className='absolute'>

            {
                filterOpen ? (
                    <FilterOptions setFilterOpen={setFilterOpen} addFilter={addFilter} options={options}/>
                ) : null
            }
        </div>
    </div>
  )
}

export default Filter
