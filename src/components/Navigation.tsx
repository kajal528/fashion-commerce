import logo from '../assets/logo.svg';
import { Hamburger, Search, User } from './Icons';

const Header = () => {
    return (
        <div className=" navigation fixed top-0 z-10 w-full h-32 bg-orange-600 px-4 py-4">
            <div className='flex items-center justify-between pb-2'>
                <button className='sm:hidden'>
                    <Hamburger />
                </button>
                <div className='flex items-center'>
                    <img src={logo} alt="logo" width="50px" height="50px"/>
                    <span className="text-white font-bold text-lg">Fashion</span>
                </div>
                <button>
                    <User />
                </button>
            </div>
            <div className=' flex w-full bg-white px-2 py-1 rounded-full'>
                <Search />
                <input type="search" placeholder='Search your product' className=' outline-none px-2 w-full' />
            </div>
        </div>
    )


}

export default Header;