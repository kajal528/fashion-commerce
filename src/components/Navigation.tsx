import { MouseEvent, useState } from 'react';
import { Cart, Hamburger, Search, User } from './Icons';
import Sidebar from './Sidebar';
import AccountDropdown from './AccountDropdown';

const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showAccountDropdown, setShowAccountDropdown] = useState(false);

    function handleClick(event: MouseEvent) {
        event.stopPropagation();
        setShowSidebar(!showSidebar);
    }

    return (
        <div className={`navigation-container fixed top-0 z-50 w-full h-28 md:h-16 bg-orange-600 px-5`}>
            <div className='nav-header flex items-center my-4'>
                <div className='basis-1/3'>
                <button className={`nav-button sm:hidden transition-transform ease-linear duration-200 ${!showSidebar ? 'visible' : ' invisible'}`} onClick={handleClick}>
                    <Hamburger />
                </button>
                <div className=' hidden sm:block sm:w-full'>
                <ul className='flex gap-5 text-white cursor-pointer'>
                    <li className=' hover:underline hover:font-bold'>
                        Men
                    </li>
                    <li className=' hover:underline hover:font-bold'>
                        Women
                    </li>
                    <li className=' hover:underline hover:font-bold'>
                        Brand
                    </li>
                </ul>
                </div>
                </div>
                <div className="app-name basis-1/3 md:basis-1/4 text-center md:text-end md:px-4 text-white font-bold text-lg">Fashion</div>

                <div className=' basis-1/3 md:basis-1/2 flex gap-5 justify-end'>
                <div className='search-box md:flex w-full bg-white px-2 py-1 rounded-full hidden items-center max-w-60'>
                <Search size={5}/>
                <input type="search" placeholder='Search your product' className=' outline-none px-2 w-full' />
            </div>
                    <div  className=" hidden sm:block" onMouseLeave={()=>setShowAccountDropdown(false)}>
                    <button onMouseEnter={()=>setShowAccountDropdown(true)}>
                            <User />
                        </button>
                        {showAccountDropdown && <AccountDropdown />}
                    </div>
                    <div>
                    <button>
                        <Cart />
                    </button>
                    </div> 
                </div>
                
            </div>
            <div className='search-box flex w-full bg-white px-2 py-1 rounded-full md:hidden'>
                <Search size={6}/>
                <input type="search" placeholder='Search your product' className=' outline-none px-2 w-full' />
            </div>
            <div className={`sidebar-overlay ${!showSidebar ? '-translate-x-full' : 'translate-x-0 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80'}`}
                onClick={handleClick}>
                <div className={` sidebar-container transition ease-linear duration-200 ${!showSidebar ? '-translate-x-full' : 'translate-x-0  w-1/2 h-screen bg-white overflow-y-auto'}`}
                    onClick={(event) => event.stopPropagation()}>
                    {showSidebar ? <Sidebar handleClick={handleClick} /> : ""}
                </div>
            </div>

        </div>
    )
}

export default Header;