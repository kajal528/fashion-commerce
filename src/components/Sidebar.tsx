import { CloseButton } from "./Icons"
import { MouseEvent, useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContextProvider"

interface SidebarInterface {
  handleClick: (event: MouseEvent) => void
}

const Sidebar = (props: SidebarInterface) => {
  const {setUserLogOut} = useContext(AuthContext);

  return (
    <div className=" sidebar flex flex-col h-full">
      <div className="sidebar-header shrink-0 bg-orange-600 w-full h-12 flex items-center px-2 ">
        <button onClick={props.handleClick}><CloseButton size={6} /></button>
      </div>
      <div className=" sidebar-list-container px-5 py-5" onClick={(event) => event.stopPropagation()}>
        <ul className=" cursor-pointer">
          <li className=" px-2 pb-1">
            <Link to='/products' className="flex items-center justify-between gap-1 font-bold" onClick={(event) => { event.stopPropagation() }}>
              <span>Men</span>
            </Link>
          </li>
          <li className=" px-2 pb-1">
            <Link to='/products' className="flex items-center justify-between gap-1 font-bold" onClick={(event) => { event.stopPropagation() }}>
              <span>Women</span>
            </Link>
          </li>
          <li className=" px-2 pb-1">
            <Link to='/products' className="flex items-center justify-between gap-1 font-bold" onClick={(event) => { event.stopPropagation() }}>
              <span>Brand</span>
            </Link>
          </li>
        </ul>
        <div className=" w-full h-[1px] bg-gray-400 my-5" />
        <ul className=" cursor-pointer">
          <li className=" px-2 pb-1">
            <a href=""> Account</a>
          </li>
          <li className=" px-2 pb-1">
            <a href="">Orders</a>
          </li>
          <li className=" px-2 pb-1">
            <a href="">Wishlist</a>
          </li>
        </ul>
      </div>
      <div className=" grow flex flex-col justify-end">
        <button className=" logout px-4 py-2 border-2 bg-gray-200 " onClick={()=>setUserLogOut()}>
          Log out
        </button>
      </div>


    </div>
  )
}

export default Sidebar