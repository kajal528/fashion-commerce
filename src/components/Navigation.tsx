import { MouseEvent, useState } from 'react';
import { Hamburger, Search, User } from './Icons';
import Sidebar from './Sidebar';

const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    function handleClick(event: MouseEvent) {
        event.stopPropagation();
        setShowSidebar(!showSidebar);
    }

    return (
        <div className={`navigation-container fixed top-0 z-50 w-full bg-orange-600 px-4 py-6 `}>
            <div className='nav-header flex items-center justify-between mb-4 '>
                <button className={`nav-button sm:hidden transition-transform ease-linear duration-200 ${!showSidebar ? 'visible' : ' invisible'}`} onClick={handleClick}>
                    <Hamburger />
                </button>
                <div className="app-name text-white font-bold text-lg">Fashion</div>
                <button>
                    <User />
                </button>
            </div>
            <div className='search-box flex w-full bg-white px-2 py-2 rounded-full'>
                <Search />
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