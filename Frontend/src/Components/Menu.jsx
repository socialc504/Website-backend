import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


export default function Menu() {

    const [menu, setMenu] = useState({})

    useEffect(() => {
        axios.get("https://website-backend-production-b98a.up.railway.app//menu").then((res) => {
            // console.log(res.data)
            setMenu(res.data)

        })
    }, [])
    return (
        <div className='flex justify-between w-[70%] mx-auto border-b border-gray-500/50 py-[80px] bg-white'>

            <div className='h-[80vh] w-[49%] font-serif space-y-10'>
                <h1 className='text-[36px] text-center'>{menu.heading}</h1>
                {
                    menu?.dishes?.map(item => (
                        <div className='space-y-3'>
                            <p className='text-[20px]'>{item.name}</p>
                            <p className='text-[15px] text-gray-500'>{item.description}</p>
                        </div>
                    ))
                }

            </div>
            <div className='h-[100vh] w-[47%] relative'>
                <img className='h-full w-full' src={menu.menuImg} alt="" />
                <div className='h-full w-full bg-white/30 absolute top-0 left-0'></div>
            </div>

        </div>
    )
}
