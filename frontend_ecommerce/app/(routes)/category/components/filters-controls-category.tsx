import React, {useEffect, useState} from "react"
import FilterOrigin from "./filter-origin"
import {IFilter} from "../interfaces/filters.interface"

const FiltersControlsCategory: React.FC = () => {
  const [filter, setFilter] = useState<IFilter>(
    {origin: undefined}
  )

  const handleEventFilter = (filters: IFilter): void => {
    setFilter({...filter, ...filters})
  }

  useEffect(()=>{
    console.log(typeof handleEventFilter(filter))
  }, [filter])


  return (
    <div className="sm:w-[350px] sm:mt-5">
      <FilterOrigin handleEventFilter={handleEventFilter}/>
    </div>
  )
}

export default FiltersControlsCategory
