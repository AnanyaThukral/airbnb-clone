import React from 'react';
import Image from 'next/image';
import { SearchIcon, MenuIcon, GlobeAltIcon, UserCircleIcon } from '@heroicons/react/solid' 

const Header = () => {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
            {/* left */}
            <div className = "relative flex items-center h-10 cursor-pointer">
                <Image src="https://media.designrush.com/inspiration_images/135187/conversions/_1511452487_364_Airbnb-mobile.jpg"
                // layout = "fill"
                height={100}
                width={100}
                objectFit='contain' /*don't stretch keep the aspect ratio*/
                objectPosition='left'
                />
            </div>
            
            {/* middle */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input className = "pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Start your search"></input>
                <SearchIcon className = "hidden md:inline-flex h-8 md:mx-2 bg-red-300 text-white rounded-full p-2 cursor-pointer"/>
            </div>
            {/* right */}
            <div className='flex items-center space-x-4 justify-end text-gray-500'>
                <p className = 'hidden md:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer'/>
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                    <MenuIcon className='h-6'/>
                    <UserCircleIcon className='h-6'/>
                </div>
            </div>
        </header>
    );
};

export default Header;


