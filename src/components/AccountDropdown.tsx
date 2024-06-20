import femaleAvatar from '../assets/user/user_female.png'
const AccountDropdown = () => {
    return (
        <div className=" account-dropdown max-h-64 w-44 fixed bg-white -translate-x-3/4 overflow-y-auto rounded-lg shadow-2xl">
            <ul className=" flex flex-col items-start px-5 py-4 space-y-2">
                <li>
                    <a href="" className=" flex items-center gap-2 text-lg mb-2">
                    <img src={femaleAvatar} alt="avatar" height='40' width='40' className=" border-2 rounded-full" />
                    <span >Kajal</span>
                    </a>
                </li>
                <li className=" cursor-pointer hover:underline">
                    <a href="">
                        Account
                    </a>
                </li>
                <li className=" cursor-pointer hover:underline">
                    <a href="">Orders</a>
                </li>
                <li className=" cursor-pointer hover:underline">
                    <a href="">
                        Wishlist
                    </a>
                </li>
                <li className=" cursor-pointer hover:underline">
                    <a href="">
                        Contact us
                    </a>
                </li>
                <li className=" cursor-pointer hover:underline">
                    <a href="">
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default AccountDropdown