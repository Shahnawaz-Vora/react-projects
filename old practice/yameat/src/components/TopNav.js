import React, { useState } from 'react';
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from 'react-icons/ai';
import { BsFillCartFill, BsPerson } from 'react-icons/bs';
import { TbTruckReturn } from 'react-icons/tb';
import { FaUserFriends, FaGoogleWallet } from 'react-icons/fa';
import { MdHelp, MdOutlineFavorite } from 'react-icons/md';

export default function TopNav() {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className="max-w-[1520] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={() => setSideNav(!sideNav)} className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <div className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Yum<span>Eats</span>
        </div>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-orange-700 text-white rounded-full p-2 font-bold">
            Free
          </p>
          <p className="p-2 font-bold">Delivery</p>
        </div>
      </div>

      {/* between */}
      <div className="flex items-center bg-gray-200 rounded-full px-2 w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search meals"
        />
      </div>

      {/* right side */}
      <button className="hidden lg:flex items-center bg-orange-700 text-white py-2 px-4 rounded-full ml-4">
        <BsFillCartFill size={20} /> Cart
      </button>

      {sideNav ? (
        <div
          className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => setSideNav(!sideNav)}
        ></div>
      ) : (
        ''
      )}

      <div
        className={`fixed top-0 left-0 w-[calc(100% - 2rem)] max-w-md sm:max-w-xl lg:max-w-3xl h-screen bg-white z-10 duration-300 ${
          sideNav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <AiOutlineClose
          size={25}
          onClick={() => setSideNav(!sideNav)}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Yum <span className="text-orange-700 font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <li className="text-lg py-4 flex">
              <BsPerson
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              My Account
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
