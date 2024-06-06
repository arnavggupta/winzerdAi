import React from 'react';


export default function DrawerSideBar({ val, setval }: any) {
    const handeldrawer=()=>{
        setval(!val);
      }
    return (
        <div className='flex flex-col  font-bold text-black cursor-pointer' onClick={handeldrawer}>
          
{val ? <h4>Close</h4> : <h4>Open</h4>}

        </div>
    );
}
