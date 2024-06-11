import React, { useEffect, useState } from 'react'
import { cross, downarrow } from '../../assets'
import FilterOptions from './FilterOptions'

const Filter = ({selectedFilter, placeholder, options, hasFilter, prefilter}) => {
    const [filterOpen, setFilterOpen] = useState(false)
    const [selectedPlaceholder, setSelectedPlaceholder] = useState(prefilter)
    const [removeFilter, setRemoveFilter] = useState(false)

    const addFilter = (filter) => {
        setSelectedPlaceholder(filter.filter.getParam())
        selectedFilter(filter)
        setRemoveFilter(true)
    }

    const rmFilter = () => {
        selectedFilter(null)
        setSelectedPlaceholder(null)
        setRemoveFilter(false)
    }

    useEffect(()=>{

    },[selectedPlaceholder])

    useEffect(()=>{
        if (hasFilter){
            setRemoveFilter(true)
        } else {
            setRemoveFilter(false)
            setSelectedPlaceholder(placeholder)
        }
    }, [hasFilter])
    return (
    <div>
        <div className='flex flex-row items-center'>    
            <div 
                className={`flex flex-row inner-border-[1px] inner-border-color-stronggray text-color-black/70 
                rounded-3xl px-7 py-3 w-fit gap-2 items-center
                ${filterOpen ? 'bg-color-black text-color-lightgray inner-border-0' : ''}
                hover:inner-border-color-black hover:cursor-pointer transition-all`}
                onClick={()=>{setFilterOpen(!filterOpen)}}
            >
                <h1 className='font-poppins font-medium whitespace-nowrap'>{selectedPlaceholder ? selectedPlaceholder : placeholder}</h1>
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
        <div className='absolute z-50'>

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
