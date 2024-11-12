import useGetOriginProduct from "@/api/useGetOrigin"
import { Label } from "@/components/ui/label"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import React from "react"
import {IFilter} from "../interfaces/filters.interface"

interface IProps {
  handleEventFilter: (filter: IFilter) => void
}

const FilterOrigin: React.FC<IProps> = ({handleEventFilter}) => {
  const {data: origins, isLoading} = useGetOriginProduct()

   return (
    <div>
      <h2 className="text-sm mt-2 mb-4 font-bold">Origin</h2>
      <RadioGroup>

        <div>
          <RadioGroupItem value="all" onClick={()=>handleEventFilter({"filters[origin][$eq]": undefined})} id="all"/>
          <Label htmlFor="all">All</Label>
        </div>

        {
          !isLoading && (
            origins?.map((origin: string, index: number) => (
              <div key={index}>
                <RadioGroupItem value={origin} onClick={()=>handleEventFilter({"filters[origin][$eq]": origin})} id={origin}/>
                <Label htmlFor={origin}>{origin}</Label>
              </div>
            ))
          )
        }
      </RadioGroup>
    </div>
  )
}

export default FilterOrigin
