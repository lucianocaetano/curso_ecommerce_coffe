import { Label } from "@/components/ui/label"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import React from "react"
import {IFilter} from "../interfaces/filters.interface"
import useGetType from "@/api/useGetType"

interface IProps {
  handleEventFilter: (filter: IFilter) => void
}

const FilterTypes: React.FC<IProps> = ({handleEventFilter}) => {
  const {data: types, isLoading} = useGetType()
 
   return (
    <div>
      <h2 className="text-sm mt-2 mb-4 font-bold">Type</h2>
      <RadioGroup>
        <div>
          <RadioGroupItem value="all" onClick={()=>handleEventFilter({"filters[test][$eq]": undefined})} id="all"/>
          <Label htmlFor="all">All</Label>
        </div>

        {
          !isLoading && (
            types?.map((type: string, index: number) => (
              <div key={index}>
                <RadioGroupItem value={type} onClick={()=>handleEventFilter({"filters[test][$eq]": type})} id={type}/>
                <Label htmlFor={type}>{type}</Label>
              </div>
            ))
          )
        }
      </RadioGroup>
    </div>
  )
}

export default FilterTypes 
