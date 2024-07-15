import { Facebook, Twitter, Instagram } from "./Icons"

const Footer = () => {
    return (
        <footer className="footer bg-[#FAF9F6] py-4 text-center self-end w-full text-black">
            <div className=" flex flex-col ">
                <a href="#">About us</a>
                <a href="#">Contact us</a>
            </div>
            <div className=" flex justify-center gap-2 my-4 ">
                <p>Follow us:</p>
                <li className=" w-6 list-none">
                    <a href="#"><Twitter /></a>
                </li>
                <li className=" w-6 list-none">
                    <a href="#"><Facebook /></a>
                </li>
                <li className=" w-6 list-none">
                    <a href="#"><Instagram /></a>
                </li>
            </div>
            <p className=" ">&copy; Copyright Fashion 2024</p>
        </footer>
    )
}

export default Footer