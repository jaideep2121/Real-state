'use client'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { Modal } from './Modal';

const Tab = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [color, setColor] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setColor((prevColor) => !prevColor);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="
            absolute left-4 top-60 
            sm:left-16 sm:top-32 
            md:left-28 md:top-40 
            lg:left-28 lg:top-60 
            w-full max-w-[320px] sm:max-w-[400px] 
            bg-gradient-to-r from-gray-200 to-yellow-100 
            shadow-lg rounded-lg border p-4 sm:p-6 "
        >
            <h6 className="text-black">Sector 103, Gurugram</h6>
            <h1 className="text-xl sm:text-2xl text-black font-bold">
                Whiteland Branded Residences
            </h1>
            <h2 className="text-base sm:text-lg font-light text-black">
                3 & 4 BHK Ultra Luxury Apartments
            </h2>
            <h3 className="text-sm sm:text-base font-light text-black">
                STARTING AT
            </h3>
            <div className="flex justify-center items-center border py-1 font-bold text-base sm:text-lg">
                ₹ 5.5 Cr*
            </div>
            <div className="flex flex-col gap-2 mt-3">
                {[
                    { label: 'Status : New Launch', size: '' },
                    { label: '3 BHK: 2500-2800 Sq. Ft.', size: '' },
                    { label: '4 BHK: 3800-4200 Sq. Ft.', size: '' },
                ].map((item, index) => (
                    <div key={index} className="flex gap-2 items-center">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoI1iDG5Hi3bWeoNv9UR6kXma2CgYPVfpPeg&s"
                            className="h-4 sm:h-5"
                            alt="Icon"
                        />
                        <h1 className="text-black text-sm sm:text-base">{item.label}</h1>
                    </div>
                ))}
            </div>
            <div className="mt-4">
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
