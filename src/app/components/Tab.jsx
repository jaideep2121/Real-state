'use client'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { Modal } from './Modal';

const Tab = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [color, setColor] = useState(false);

    useEffect(() => {
        // Set the interval to toggle every 2 seconds
        const interval = setInterval(() => {
            setColor((prevColor) => !prevColor); // Toggle the state
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array to run this effect only once when the component mounts

    return (
        <div className='flex flex-col absolute left-24 top-60 gap-2 border py-6 px-10 bg-linear-to-r from-gray-200 to-yellow-100 ring'>
            <h6 className='text-black '>Sector 103,Gurugram</h6>
            <h1 className='text-2xl text-black font-bold font-semibold'>Whiteland Branded Residencess</h1>
            <h2 className='text-base font-light text-black text-xl'>3 & 4 BHK Ultra Luxury Apartments</h2>
            <h3 className='text-normal text-black font-light text-black'>STARTING AT</h3>
            <div className='flex justify-center item-center border py-1'>
                ₹ 5.5 Cr*
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJ1iDG5Hi3bWeoNv9UR6kXma2CgYPVfpPeg&s" className='h-5'></img>
                    <h1>Status : New Launch</h1>
                </div>
                <div className='flex gap-2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJ1iDG5Hi3bWeoNv9UR6kXma2CgYPVfpPeg&s" className='h-5'></img>
                    <h1>3 BHK:

2500-2800 Sq. Ft.</h1>
                </div>
                <div className='flex gap-2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJ1iDG5Hi3bWeoNv9UR6kXma2CgYPVfpPeg&s" className='h-5'></img>
                    <h1>4 BHK

3800 - 4200 Sq. Ft.</h1>
                </div>
            </div>
            <div>
                <Button
                    className={`w-full ${color ? 'text-yellow-400' : 'text-white'} animate-color-change hover:text-yellow-600`}
                    onClick={() => setIsModalOpen(true)}
                >
                    Enquire Now
                </Button>
            </div>
            <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
        </div>
    );
};

export default Tab;
