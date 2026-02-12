import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Navbar() {

    const [nav, setNav] = useState({})

    useEffect(() => {
        axios.get("https://website-backend-production-b98a.up.railway.app/nav").then((res) => {
            // console.log(res.data);
            setNav(res.data)
        })
        // axios.get("http://localhost:5030/nav").then((res) => {
        //     // console.log(res.data);
        //     setNav(res.data)
        // })
    }, [])

    return (
        <div className='h-auto relative w-full'>
            <nav className='h-[50px] w-full z-1 bg-white fixed top-0 left-0 shadow-lg flex justify-between items-center font-serif px-10 tracking-widest'>
                <h1 className='text-[15px]'>{nav.logo}</h1>
                <ul className='flex space-x-10 cursor-pointer text-[15px]'>
                    {
                        nav?.menu?.map(link => (
                            <li>{link}</li>
                        ))
                    }
                </ul>
            </nav>
            <div className='h-screen w-full relative'>
                <img className='h-full w-full' src={nav.heroImg} alt="" />
                <h1 className='absolute left-5 bottom-5 text-5xl text-gray-700'>{nav.heroText}</h1>
            </div>
        </div>
    )
}
