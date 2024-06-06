import React from 'react';
import { CiMenuBurger } from "react-icons/ci";

export default function DrawerSideBar({ val, setval }: any) {
    const handeldrawer=()=>{
        setval(!val);
      }
    return (
        <div className='flex flex-col  font-bold text-black cursor-pointer w-8'>
          <div  onClick={handeldrawer}  className='text-xl '>
<CiMenuBurger/>
</div>
        </div>
    );
}
