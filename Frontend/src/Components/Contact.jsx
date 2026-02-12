import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Contact() {

    const [contact, setContact] = useState({})

    useEffect(() => {
        axios.get("https://website-backend-production-b98a.up.railway.app//contact").then((res) => {
            setContact(res.data)
        })
    }, [])

    const [inpVal, setInpVal] = useState({
        name: '',
        nop: '',
        date: '',
        msg: ''
    })

    function handleChange(e) {
        const { name, value } = e.target
        setInpVal({ ...inpVal, [name]: value })
    }
    async function handleSubmit() {
        let res = await axios.post("http://localhost:5030/form", inpVal)
        console.log(res);
        setData(res.data)
    }

    const [data, setData] = useState([])

    useEffect(() => {
        const getData = () => {

            axios.get("http://localhost:5030/form").then((res) => {
                console.log(res.data); // rendering issue
                setData(res.data || [])

            })
        }
        getData()
    }, [])

    return (
        <div className='flex justify-between w-[70%] mx-auto py-[80px] bg-white'>
            <div className='h-auto w-[100%] pr-10 font-serif space-y-5'>
                <h1 className='text-[36px]'>{contact.heading}</h1>
                <p className='text-[15px]'>{contact.description}</p>
                <p className='text-[20px] tracking-wide font-semibold text-[#607d8b]'>{contact.address}</p>
                <p className='text-[15px]'>{contact.description1}</p>
                <input onChange={handleChange} name='name' value={inpVal.name} className='border-b  w-full p-3 border-gray-500/50' placeholder='Name' type="text" />
                <input onChange={handleChange} name='nop' value={inpVal.nop} className='border-b  w-full p-3 border-gray-500/50' placeholder='How many people' type="number" />
                <input onChange={handleChange} name='date' value={inpVal.date} className='border-b  w-full p-3 border-gray-500/50' type="date" />
                <input onChange={handleChange} name='msg' value={inpVal.msg} className='border-b  w-full p-3 border-gray-500/50' placeholder='Message/Special requirements' type="text" />
                <button onClick={handleSubmit} className='bg-[#f1f1f1] py-2 px-4 text-[15px] cursor-pointer'>SEND MESSAGE</button>
                {
                    data?.map(item => (
                        <div className='w-full bg-gray-100 p-5'>
                            <p className='text-[16px] font-semibold text-black'>Name: {item.name}</p>
                            <p className='text-[16px] text-black'>Number of persons: {item.nop}</p>
                            <p className='text-[16px] text-black'>Date: {item.date}</p>
                            <p className='text-[16px] text-black'>Any special message: {item.msg}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
