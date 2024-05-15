import { useState, useEffect } from "react";
import Logo from '../assets/Logo.png';
import { FaSearch } from "react-icons/fa";
import useDataFetching from "../Hooks/useFetching";

const Top = () => {
  const [Location, setLocation] = useState('Kathmandu');
  const[Search ,setSearch]=useState('Kathmandu');
  const apiKey = `adf65e2fa7e0de243f0a7adaec8b6839`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=${apiKey}&units=metric`;
  
  // Fetch data when Location changes
  const { loading, results, error } = useDataFetching(url);

  const handleSearchClick = (e: MouseEvent) => {
    e.preventDefault();
    setSearch(Location);
    console.log(results);
  }

  return (
    <div className='flex  '>
      <div className="flex flex-col justify-center items-center ">
        <img src={Logo} alt="Logo" className="mt-1 w-16 sm:w-24 rounded-full"/>
        <h1 className=' text-sm sm:text-xl text-white font-bold '> Mahusam</h1>
      </div>
      <form className="w-full flex justify-center py-2 sm:p-4" id="form">
        <div className="flex items-center h-8 px-2 border border-white rounded-2xl">
          <input
            className="bg-transparent border-0 w-56 sm:w-96 h-8 text-white focus:outline-none text-1xl  placeholder-gray-200"
            type="text"
            name="Search"
            id="Search"
            value={Location}
            onChange={(e) => { setLocation(e.target.value) }}
            placeholder='Search location . . .'
          />
          <button
            className="rounded-r text-white"
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
