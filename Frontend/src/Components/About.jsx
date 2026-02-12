import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function About() {
    const [about, setAbout] = useState({})

    useEffect(() => {
        axios.get("http://localhost:5030/about").then((res) => {
            // console.log(res.data);
            setAbout(res.data)
        })
    }, [])
    return (
        <div className='flex justify-between w-[70%] mx-auto border-b border-gray-500/50 py-[80px] bg-white'>

            <div className='h-[100vh] w-[47%] relative'>
                <img className='h-full w-full' src={about.aboutImg} alt="" />
                <div className='h-full w-full bg-white/30 absolute top-0 left-0'></div>
            </div>
            <div className='h-[80vh] w-[49%] pr-10 font-serif space-y-10'>
                <h1 className='text-[36px] text-center'>{about.heading}</h1>
                <p className='text-[18px] text-center tracking-widest'>{about.subHeading}</p>
                <p className='text-[17px]'>{about.para1}</p>
                <p className='text-[17px] text-gray-600'>{about.para2}</p>
            </div>

        </div>
    )
}
