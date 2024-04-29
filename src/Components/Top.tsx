import { useState } from "react";
import Logo from '../assets/Logo.png'
import { FaSearch } from "react-icons/fa";
const Top = () => {
  const [Location, useLocation] = useState('Kathmandu');

 const handleSearchClick=()=>{
  useLocation('lol')
 }

  return (
    <div className='flex  '>
        <div className="flex flex-col justify-center items-center ">
          <img src={Logo} alt="Logo" className=" w-16 sm:w-24 rounded-full"/>
        <h1 className='text-xl sm:text-2xl text-white font-bold p-2'> Mahusam</h1>
        </div>
      <form className="w-full flex justify-center py-2 sm:p-4" id="form">
        <div className="flex items-center h-8 px-2 border border-white rounded-2xl">
          <input
            className="bg-transparent border-0 w-64 sm:w-96 h-8 text-white focus:outline-none text-1xl  placeholder-gray-200"
            type="text"
            name="Search"
            id="Search"
            value={Location}
            onChange={(e) => { useLocation(e.target.value) }}
            placeholder='Search location . . .'
          />
          <button
            className="rounded-r text-white "
            type="submit"
            onClick={handleSearchClick}
          >
          <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Top;