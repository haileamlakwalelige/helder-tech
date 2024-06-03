// import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";

const Copy = () => {
    return (
        <div className="bg-primary min-h-[60px] w-screen  px-2 sm:px-6 md:px-12 lg:px-16">
            <div className="">
            <div className="flex flex-wrap justify-center py-4 lg:justify-between items-center lg:gap-10 gap-2 ">
                <div className="flex justify-center items-center gap-1 text-footer">
                    <FaRegCopyright />
                    <p>2024 ELDANA Spring homes. All Rights Reserved. </p>
                </div>
                <div className="flex justify-end items-end gap-1 text-footer">
                    <p>Powered by Helder</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Copy;