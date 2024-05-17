import { useState, MouseEvent } from "react";
import Logo from '../assets/Logo.png';
import { FaSearch } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { fetchWeather } from "../feature/Weather/Weather";

const Top = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState<string>('Kathmandu');

  const handleSearchClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(fetchWeather(location)); 
  }

  return (
    <div className='flex'>
      <div className="flex flex-col justify-center items-center">
        <img src={Logo} alt="Logo" className="mt-1 w-16 sm:w-24 rounded-full" />
        <h1 className='text-sm sm:text-xl text-white font-bold'>Mahusam</h1>
      </div>
      <form className="w-full flex justify-center py-2 sm:p-4" id="form">
        <div className="flex items-center h-8 px-2 border border-white rounded-2xl">
          <input
            className="bg-transparent border-0 w-56 sm:w-96 h-8 text-white focus:outline-none text-1xl placeholder-gray-200"
            type="text"
            name="Search"
            id="Search"
            value={location}
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
