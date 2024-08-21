import React from 'react'
import mission1 from '../../assets/mission1.png'
import mission2 from '../../assets/mission2.png'
import vision from '../../assets/vision.png'
import picture1 from '../../assets/picture1.png'

const Mission = () =>{
    return(
        <div className='relative w-screen bg-white grid md:grid-cols-3 mx-1 mr-1 md:mx-5 '>
            <div className='relative grid md:grid-cols-1 md:-mt-6'>
                    <img src={picture1} alt="" className='w-full object-cover'/>
                    <div className='absolute inset-0  bg-gradient-to-b from-[rgb(5,5,5,0.33)] to-[rgb(0,108,255,0.85)] '></div>

            </div>

            <div className='md:absolute md:inset-0 md:left-96 grid md:col-span-2 md:pt-12'>
                <div className='my-4 flex gap-3 p-4'>
                    <img src={mission1} alt="" className='size-24 ' />
                    <div>
                        <h1 className='text-titleFont text-2xl font-semibold mb-3'>Mission</h1>
                        <p className='text-justify font-normal text-base md:text-lg md:max-w-3xl md:pr-9 text-normalFont leading-tighter'>At Helder Technologies, our mission is to empower businesses with innovative technology solutions that drive growth and success in the digital age. We are committed to understanding and fulfilling the unique needs of our clients, building lasting partnerships based on trust, collaboration, and excellence.</p>
                    </div>
                </div>
                <div className='my-4 flex gap-3 p-4'>
                    <img src={vision} alt="" className='size-24 ' />
                    <div>
                        <h1 className='text-titleFont text-2xl font-semibold mb-3'>Vision</h1>
                        <p className='text-justify font-normal text-base md:text-lg md:max-w-3xl md:pr-9 text-normalFont leading-tighter'> Our vision at Helder Technologies is to be a global leader in technology solutions, known for our creativity, expertise, and unwavering dedication to client success. We strive to transform industries and inspire positive change through cutting-edge innovation and sustainable practices.</p>
                    </div>
                </div>
                <div className='my-4 flex gap-3 p-4'>
                    <img src={mission2} alt="" className='size-24 ' />
                    <div>
                        <h1 className='text-titleFont text-2xl font-semibold mb-3'>Mission</h1>
                        <p className='text-justify font-normal text-base md:text-lg md:max-w-3xl md:pr-9 text-normalFont leading-tighter'>  Helder Technologies is dedicated to delivering exceptional technology solutions that surpass client expectations while nurturing lasting relationships built on trust and shared success. We strive to lead in technological innovation, integrating sustainable practices into our operations and fostering a supportive work environment that empowers our team to thrive creatively and personally.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;