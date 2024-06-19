import { menCategory } from "../data/menCategory"
import { womenCategory } from "../data/womenCategory"
import { brand } from "../data/brand"
import { ChevronDown, CloseButton } from "./Icons"
import { MouseEvent, useState } from "react"

interface SidebarInterface{
  handleClick: (event: MouseEvent)=>void
}

const Sidebar = (props: SidebarInterface) => {
  const [showMenSubcategory, setMenShowSubcategory] = useState(false);
  const [showWomenSubcategory, setWomenShowSubcategory] = useState(false);
  const [showBrandSubcategory, setBrandShowSubcategory] = useState(false);


  return (
    <div className=" sidebar">
      <div className="sidebar-header bg-orange-600 w-full h-12 flex items-center px-2 ">
        <button onClick={props.handleClick}><CloseButton /></button>
      </div>
      <div className=" sidebar-list-container px-5 py-5 h-full" onClick={(event) => event.stopPropagation()}>
        <ul>
          <li className=" px-2 pb-1">
            <a href="#" className="flex items-center justify-between gap-1 font-bold" onClick={(event) => { event.stopPropagation(); setMenShowSubcategory(!showMenSubcategory) }}>
              <span>Men</span>
              {menCategory.menCategory.length > 0 ? <ChevronDown /> : ""}
            </a>
            {showMenSubcategory ? menCategory.menCategory.map((data) => {
              return (
                <li className=" px-4 py-1 hover:cursor-pointer hover:bg-gray-200 rounded border-2 border-transparent">
                  <a href="#" className="flex items-center gap-1">
                    {data.text}
                  </a>
                </li>
              )
            }) : ""}
          </li>
          <li className="  px-2 pb-1">
            <a href="#" className="flex items-center justify-between gap-1 font-bold" onClick={() => setWomenShowSubcategory(!showWomenSubcategory)}>
              <span>Women</span>
              {womenCategory.womenCategory.length > 0 ? <ChevronDown /> : ""}
            </a>
            {showWomenSubcategory ? womenCategory.womenCategory.map((data) => {
              return (
                <li className=" px-4 py-1 hover:cursor-pointer hover:bg-gray-200 rounded border-2 border-transparent">
                  <a href="#" className="flex items-center gap-1">
                    {data.text}
                  </a>
                </li>
              )
            }) : ""}
          </li>
          <li className="  px-2 pb-1">
            <a href="#" className="flex items-center justify-between gap-1 font-bold" onClick={() => setBrandShowSubcategory(!showBrandSubcategory)} >
              <span>Brand</span>
              {brand.brand.length > 0 ? <ChevronDown /> : ""}
            </a>
            {showBrandSubcategory ? brand.brand.map((data) => {
              return (
                <li className=" px-4 py-1 hover:cursor-pointer hover:bg-gray-200 rounded border-2 border-transparent">
                  <a href="#" className="flex items-center gap-1">
                    {data.text}
                  </a>
                </li>
              )
            }) : ""}
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Sidebar