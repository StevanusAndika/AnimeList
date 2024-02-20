import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";


const Navbar = ()=>{

return (
    <header className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 transition ease-out duration-300">
    <div className="flex md:flex-row flex-col justify-between md:items-center p-4 font-bold text-white text-2xl gap-2">
        <Link href="/" className="text-color-dark text-2x hover:text-white">Stev Anime List</Link>
       <InputSearch/>
       <UserActionButton/>
    </div>
    </header>
    
)
}

export default Navbar;
