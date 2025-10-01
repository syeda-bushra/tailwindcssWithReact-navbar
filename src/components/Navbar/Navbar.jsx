import React from 'react'
import {NavbarMenu} from "../../mockData/data";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaDumbbell } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
const Navbar = () => {
  return (
    
    <>
      <nav>
        <div className="container flex justify-between items-center
        py-8">
            {/* {  logo section  } */}
            <div className="text-2xl flex item-center 
            gap-2 font-bold uppercase ">
               <FaDumbbell/> 
               <p>Coders</p>
               <p className="text-secondary">Gym</p>
            </div>
            {/* {  menu section  } */}
            <div className='hidden-x-overflow pl-10'>
                <ul className='flex items-center gap-6
                text-gray-600'>
                    {NavbarMenu.map((item)=>{
                        return(
                        <li key={item.id}>
                            <a href ={item.link} className="inline-block py-1 px-3 
                            hover:text-primary font-semibold">
                                {item.title}</a>
                                
                        </li> )
                        })
                    }

                </ul>
            </div>
            {/* {  icons section  } */}
            <div className="flex items-center gap-4">
                <button className="text-2xl hover:bg-primary
                hover:text-white rounded-full p-2 duration-200">
                    <IoSearch  />
                </button>
                <button className="text-2xl hover:bg-primary
                hover:text-white rounded-full p-2 duration-200">
                    <IoCartOutline  />
                </button>
                
                <button className="hover:bg-primary
                text-primary font-semibold hover:text-white
                rounded-md border-2 border-primary px-6 py-2 
                duration-200 hidden md:block">Login</button>
            </div> 

        </div>
      </nav>
      
      
    </>
  )

}

export default Navbar
